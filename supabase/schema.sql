-- Bunny Trading Education Hub — database schema
-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query → paste → Run).
--
-- Design: every student gets a real Supabase Auth account (magic-link email login,
-- no passwords). This table extends that account with the stuff the app actually
-- needs: which tier they're on, their name, join date. Tier is assigned by Bunny
-- manually in the Supabase Table Editor when a student joins or changes tier —
-- no admin UI needed for the handful of students this business has today.

create table if not exists public.students (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null default 'Student',
  tier text not null default 'foundations' check (tier in ('foundations','active','elite')),
  join_date date not null default current_date,
  notifications boolean not null default true,
  created_at timestamptz not null default now()
);

-- One row per lesson a student has completed. lesson_id matches the "<module>-<index>"
-- ids already used in the standalone app (e.g. "forex-foundations-0").
create table if not exists public.lesson_progress (
  student_id uuid not null references public.students(id) on delete cascade,
  lesson_id text not null,
  completed_at timestamptz not null default now(),
  primary key (student_id, lesson_id)
);

-- Trading journal entries — same shape as the standalone app's journal tab.
create table if not exists public.journal_entries (
  id bigint generated always as identity primary key,
  student_id uuid not null references public.students(id) on delete cascade,
  symbol text not null,
  side text not null check (side in ('long','short')),
  outcome text not null check (outcome in ('win','loss','breakeven')),
  reason_first boolean not null default true,
  reason text not null,
  mentor_note text,
  created_at timestamptz not null default now()
);

-- Row Level Security: a student can only ever see and edit their own rows.
-- This is what makes the anon public key safe to ship in the browser — Postgres
-- itself enforces the boundary, not application code.
alter table public.students enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.journal_entries enable row level security;

create policy "students see own row" on public.students
  for select using (auth.uid() = id);
create policy "students update own row" on public.students
  for update using (auth.uid() = id);
-- Note: no insert policy for students — see the trigger below, which creates
-- the row automatically on signup so a student can never set their own tier.

-- RLS is row-level only — without this, the update policy above would let a
-- student PATCH their own `tier` column directly (e.g. from devtools) and
-- upgrade themselves for free. Column-level grants close that gap: students
-- can only ever write name/notifications, never tier or join_date.
--
-- Table-level grants are a separate mechanism from RLS policies — Postgres
-- requires both (the grant to attempt the operation at all, the RLS policy
-- to restrict it to the caller's own row). Listed explicitly here for all
-- three tables so nothing is left relying on a default that may not exist.
grant select, insert, delete on public.lesson_progress to authenticated;
grant select, insert, delete on public.journal_entries to authenticated;
grant select on public.students to authenticated;
revoke update on public.students from authenticated;
grant update (name, notifications) on public.students to authenticated;

create policy "students manage own progress" on public.lesson_progress
  for all using (auth.uid() = student_id) with check (auth.uid() = student_id);

create policy "students manage own journal" on public.journal_entries
  for all using (auth.uid() = student_id) with check (auth.uid() = student_id);

-- Auto-create a students row the moment someone signs up via magic link, so
-- Bunny just has to open Table Editor → students → set their tier, not run SQL.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.students (id) values (new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Lesson content lives here, not in the app's code bundle. That's the actual
-- fix: a module's title/subtitle/tier is fine to ship to every browser (it's
-- the "locked" teaser students see to upsell them), but the individual lesson
-- titles inside a module the student can't access yet must never leave the
-- server for that student — hiding them in the UI isn't enough, since the
-- bundle would still contain them for anyone who opened devtools.
create table if not exists public.lessons (
  id text primary key,
  module_id text not null,
  module_tier text not null check (module_tier in ('foundations','active','elite')),
  idx integer not null,
  title text not null,
  minutes integer not null
);

create or replace function public.tier_rank(t text) returns integer as $$
  select case t when 'foundations' then 0 when 'active' then 1 when 'elite' then 2 else -1 end;
$$ language sql immutable;

alter table public.lessons enable row level security;
grant select on public.lessons to authenticated;

-- A student only ever receives rows for modules at or below their own tier —
-- enforced by Postgres on every query, regardless of what the client asks for.
create policy "students see lessons within their tier" on public.lessons
  for select using (
    public.tier_rank(module_tier) <= (
      select public.tier_rank(tier) from public.students where id = auth.uid()
    )
  );

insert into public.lessons (id, module_id, module_tier, idx, title, minutes) values
('forex-foundations-0','forex-foundations','foundations',0,'What Is Forex Trading?',12),
('forex-foundations-1','forex-foundations','foundations',1,'Currency Pairs & Pips Explained',15),
('forex-foundations-2','forex-foundations','foundations',2,'How to Read a Forex Quote',10),
('forex-foundations-3','forex-foundations','foundations',3,'Setting Up Your First Trading Account',14),
('market-structure-0','market-structure','foundations',0,'Highs, Lows & Trend Direction',13),
('market-structure-1','market-structure','foundations',1,'Identifying Swing Points',16),
('market-structure-2','market-structure','foundations',2,'Break of Structure vs Change of Character',18),
('market-structure-3','market-structure','foundations',3,'Trading With the Trend',12),
('support-resistance-0','support-resistance','active',0,'Drawing Horizontal S/R Zones',14),
('support-resistance-1','support-resistance','active',1,'Supply & Demand Basics',17),
('support-resistance-2','support-resistance','active',2,'Confluence: Stacking Your Levels',15),
('support-resistance-3','support-resistance','active',3,'Common S/R Mistakes to Avoid',11),
('candlestick-confirmation-0','candlestick-confirmation','active',0,'Anatomy of a Candlestick',9),
('candlestick-confirmation-1','candlestick-confirmation','active',1,'Engulfing & Pin Bar Patterns',16),
('candlestick-confirmation-2','candlestick-confirmation','active',2,'Confirmation Entries at Key Levels',18),
('candlestick-confirmation-3','candlestick-confirmation','active',3,'Reading Candles in Context',13),
('risk-management-0','risk-management','active',0,'Position Sizing Fundamentals',15),
('risk-management-1','risk-management','active',1,'Stop Loss Placement Strategies',17),
('risk-management-2','risk-management','active',2,'Risk-Reward Ratios That Work',12),
('risk-management-3','risk-management','active',3,'Protecting Your Account: The 1% Rule',10),
('xauusd-mastery-0','xauusd-mastery','elite',0,'Why Gold Trades Differently',14),
('xauusd-mastery-1','xauusd-mastery','elite',1,'Key Sessions & Gold Volatility',16),
('xauusd-mastery-2','xauusd-mastery','elite',2,'Building a XAUUSD Playbook',20),
('xauusd-mastery-3','xauusd-mastery','elite',3,'Case Study: Trading a Gold Breakout',19),
('trading-psychology-0','trading-psychology','elite',0,'Mastering Emotional Discipline',14),
('trading-psychology-1','trading-psychology','elite',1,'Overcoming Fear & FOMO',15),
('trading-psychology-2','trading-psychology','elite',2,'Building a Winning Routine',13),
('trading-psychology-3','trading-psychology','elite',3,'Journaling for Long-Term Growth',12)
on conflict (id) do nothing;
