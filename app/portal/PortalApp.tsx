"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Icon, RingLogo } from "./icons";
import { MODULES, MEDIA, TIER_LABEL, TIER_RANK, type Tier, type Module } from "./data";

type TabId = "topics" | "progress" | "media" | "markets" | "journal" | "profile";
type Student = { id: string; name: string; tier: Tier; join_date: string; notifications: boolean };
type DbLesson = { id: string; module_id: string; idx: number; title: string; minutes: number };
type JournalEntry = {
  id: number;
  symbol: string;
  side: "long" | "short";
  outcome: "win" | "loss" | "breakeven";
  reason_first: boolean;
  reason: string;
  mentor_note: string | null;
  created_at: string;
};
type PriceData = {
  price: number;
  changePct: number;
  changeAbs: number;
  ts: number;
  changeLabel: string;
  stale: boolean;
} | null;
type NewsItem = { sym: string; h: string; impact: "high" | "medium"; when: string; ts: number };

const FALLBACK_NEWS: NewsItem[] = [
  { sym: "USD", h: "Non-Farm Payrolls", impact: "high", when: "Today · 8:30 AM EST", ts: 0 },
  { sym: "XAU", h: "US CPI Data Release", impact: "high", when: "Today · 8:30 AM EST", ts: 0 },
  { sym: "EUR", h: "ECB Interest Rate Decision", impact: "high", when: "Tomorrow · 7:45 AM EST", ts: 0 },
  { sym: "GBP", h: "BoE Governor Speech", impact: "medium", when: "Tomorrow · 10:00 AM EST", ts: 0 },
  { sym: "JPY", h: "Retail Sales m/m", impact: "medium", when: "Wed · 7:50 PM EST", ts: 0 },
];

const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: "topics", label: "Topics", icon: "gradcap" },
  { id: "progress", label: "Progress", icon: "trend" },
  { id: "media", label: "Media", icon: "playsquare" },
  { id: "markets", label: "Markets", icon: "sliders" },
  { id: "journal", label: "Journal", icon: "journal" },
  { id: "profile", label: "Profile", icon: "user" },
];

function fmtUsd(n: number, digits: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
}
function fmtRel(ts: number) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 10) return "just now";
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}
function initials(name: string) {
  return (
    (name || "S")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase() || "S"
  );
}
function fmtJoinDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function fetchJsonWithTimeout(url: string, ms: number) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { signal: ctrl.signal })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .finally(() => clearTimeout(t));
}
function fetchTextWithTimeout(url: string, ms: number) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { signal: ctrl.signal })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .finally(() => clearTimeout(t));
}
function getDayRef(sym: string, price: number) {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const raw = localStorage.getItem("bunnyPortalDayRef");
    const all = raw ? JSON.parse(raw) : {};
    let ref = all[sym];
    if (!ref || ref.date !== today) {
      ref = { date: today, price };
      all[sym] = ref;
      localStorage.setItem("bunnyPortalDayRef", JSON.stringify(all));
    }
    return ref.price as number;
  } catch {
    return price;
  }
}
function fmtNewsWhen(d: Date) {
  const now = new Date();
  const time = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  if (d.toDateString() === now.toDateString()) return `Today · ${time}`;
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  if (d.toDateString() === tomorrow.toDateString()) return `Tomorrow · ${time}`;
  return `${d.toLocaleDateString("en-US", { weekday: "short" })} · ${time}`;
}

function TVChart({ symbol }: { symbol: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML =
      '<div class="tradingview-widget-container" style="height:100%;width:100%"><div class="tradingview-widget-container__widget" style="height:100%;width:100%"></div></div>';
    const container = host.querySelector(".tradingview-widget-container");
    if (!container) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.text = JSON.stringify({
      autosize: true,
      symbol,
      interval: "60",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      backgroundColor: "rgba(10,9,8,1)",
      gridColor: "rgba(255,255,255,0.06)",
      hide_top_toolbar: true,
      hide_side_toolbar: true,
      hide_legend: false,
      allow_symbol_change: false,
      save_image: false,
      support_host: "https://www.tradingview.com",
    });
    container.appendChild(script);
    // React 19 Strict Mode double-invokes effects in dev (mount → cleanup →
    // mount) — without this, the second run wipes the container mid-init of
    // the first widget instance, leaving TradingView's script holding a
    // reference to an iframe that's already gone.
    return () => {
      host.innerHTML = "";
    };
  }, [symbol]);
  return <div className="tvhost" ref={ref} />;
}

export default function PortalApp({ userId }: { userId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState<Student | null>(null);
  const [progress, setProgress] = useState<Set<string>>(new Set());
  const [journal, setJournal] = useState<JournalEntry[]>([]);
  const [lessonsByModule, setLessonsByModule] = useState<Record<string, DbLesson[]>>({});

  const [tab, setTab] = useState<TabId>("topics");
  const [expanded, setExpanded] = useState<Set<string>>(new Set([MODULES[0].id]));
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [mediaTab, setMediaTab] = useState<"live" | "videos" | "library">("live");

  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  function showToast(msg: string) {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
  }

  const [nameDraft, setNameDraft] = useState("");

  const [journalFormOpen, setJournalFormOpen] = useState(false);
  const [jSymbol, setJSymbol] = useState("XAUUSD");
  const [jSide, setJSide] = useState<"long" | "short">("long");
  const [jOutcome, setJOutcome] = useState<"win" | "loss" | "breakeven">("win");
  const [jReasonFirst, setJReasonFirst] = useState(true);
  const [jReason, setJReason] = useState("");
  const [jMentorNote, setJMentorNote] = useState("");
  const [jSaving, setJSaving] = useState(false);

  const [btc, setBtc] = useState<PriceData>(null);
  const [xau, setXau] = useState<PriceData>(null);
  const [btcLoading, setBtcLoading] = useState(false);
  const [xauLoading, setXauLoading] = useState(false);
  const [news, setNews] = useState<{ items: NewsItem[]; ts: number; stale: boolean } | null>(null);
  const [newsLoading, setNewsLoading] = useState(false);
  const marketsLoadedRef = useRef(false);

  useEffect(() => {
    let active = true;
    async function load() {
      const [
        { data: studentRow },
        { data: progressRows },
        { data: journalRows },
        { data: lessonRows, error: lessonError },
      ] = await Promise.all([
        supabase.from("students").select("id,name,tier,join_date,notifications").eq("id", userId).single(),
        supabase.from("lesson_progress").select("lesson_id").eq("student_id", userId),
        supabase.from("journal_entries").select("*").eq("student_id", userId).order("created_at", { ascending: false }),
        // RLS on `lessons` only returns rows for modules at or below this student's
        // tier — a locked module's lesson titles never reach this browser at all.
        supabase.from("lessons").select("*").order("idx"),
      ]);
      if (lessonError) console.error("Failed to load lessons:", lessonError.message);
      if (!active) return;
      if (studentRow) {
        setStudent(studentRow as Student);
        setNameDraft((studentRow as Student).name);
      }
      setProgress(new Set(((progressRows ?? []) as { lesson_id: string }[]).map((r) => r.lesson_id)));
      setJournal((journalRows ?? []) as JournalEntry[]);
      const grouped: Record<string, DbLesson[]> = {};
      ((lessonRows ?? []) as DbLesson[]).forEach((l) => {
        (grouped[l.module_id] ??= []).push(l);
      });
      setLessonsByModule(grouped);
      setLoading(false);
    }
    load();
    return () => {
      active = false;
    };
  }, [userId]);

  function isLocked(mod: Module) {
    if (!student) return true;
    return TIER_RANK[mod.tier] > TIER_RANK[student.tier];
  }
  function moduleStats(mod: Module) {
    const lessons = lessonsByModule[mod.id] ?? [];
    const total = lessons.length || mod.lessonCount;
    let done = 0;
    let minutes = 0;
    lessons.forEach((l) => {
      if (progress.has(l.id)) {
        done++;
        minutes += l.minutes;
      }
    });
    return { total, done, minutes, pct: total ? Math.round((done / total) * 100) : 0 };
  }
  function overallStats() {
    let totalLessons = 0;
    let done = 0;
    let minutes = 0;
    let topicsDone = 0;
    MODULES.forEach((mod) => {
      const s = moduleStats(mod);
      totalLessons += s.total;
      done += s.done;
      minutes += s.minutes;
      if (s.done === s.total) topicsDone++;
    });
    return {
      totalLessons,
      done,
      minutes,
      topicsDone,
      totalTopics: MODULES.length,
      pct: totalLessons ? Math.round((done / totalLessons) * 100) : 0,
    };
  }
  function findContinue() {
    for (const mod of MODULES) {
      if (isLocked(mod)) continue;
      const lessons = lessonsByModule[mod.id] ?? [];
      for (const lesson of lessons) {
        if (!progress.has(lesson.id)) return { mod, lesson };
      }
    }
    return null;
  }

  function toggleModule(mod: Module) {
    if (isLocked(mod)) {
      showToast(`Unlocks on the ${TIER_LABEL[mod.tier]} tier`);
      return;
    }
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(mod.id)) next.delete(mod.id);
      else next.add(mod.id);
      return next;
    });
  }

  async function toggleLesson(mod: Module, lesson: DbLesson) {
    if (isLocked(mod)) {
      showToast(`Unlocks on the ${TIER_LABEL[mod.tier]} tier`);
      return;
    }
    const id = lesson.id;
    const done = progress.has(id);
    setProgress((prev) => {
      const next = new Set(prev);
      if (done) next.delete(id);
      else next.add(id);
      return next;
    });
    const { error } = done
      ? await supabase.from("lesson_progress").delete().eq("student_id", userId).eq("lesson_id", id)
      : await supabase.from("lesson_progress").insert({ student_id: userId, lesson_id: id });
    if (error) {
      showToast("Couldn't save — try again");
      setProgress((prev) => {
        const next = new Set(prev);
        if (done) next.add(id);
        else next.delete(id);
        return next;
      });
    }
  }

  function resumeLesson(modId: string, lessonId: string) {
    setTab("topics");
    setExpanded((prev) => new Set(prev).add(modId));
    setHighlightId(lessonId);
    setTimeout(() => {
      document.getElementById(`row-${lessonId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
    setTimeout(() => setHighlightId(null), 1800);
  }

  async function addJournalEntry() {
    if (!jReason.trim()) {
      showToast("Add the reason you took this trade first");
      return;
    }
    setJSaving(true);
    const { data, error } = await supabase
      .from("journal_entries")
      .insert({
        student_id: userId,
        symbol: jSymbol.trim().toUpperCase() || "XAUUSD",
        side: jSide,
        outcome: jOutcome,
        reason_first: jReasonFirst,
        reason: jReason.trim(),
        mentor_note: jMentorNote.trim() || null,
      })
      .select()
      .single();
    setJSaving(false);
    if (error || !data) {
      showToast("Couldn't save entry — try again");
      return;
    }
    setJournal((prev) => [data as JournalEntry, ...prev]);
    setJournalFormOpen(false);
    setJSymbol("XAUUSD");
    setJSide("long");
    setJOutcome("win");
    setJReasonFirst(true);
    setJReason("");
    setJMentorNote("");
    showToast("Trade logged");
  }
  async function deleteJournalEntry(id: number) {
    setJournal((prev) => prev.filter((e) => e.id !== id));
    const { error } = await supabase.from("journal_entries").delete().eq("id", id);
    if (error) showToast("Couldn't delete — refresh and try again");
  }

  async function saveName() {
    const name = nameDraft.trim() || "Student";
    setStudent((prev) => (prev ? { ...prev, name } : prev));
    await supabase.from("students").update({ name }).eq("id", userId);
  }
  async function toggleNotifications() {
    if (!student) return;
    const notifications = !student.notifications;
    setStudent({ ...student, notifications });
    await supabase.from("students").update({ notifications }).eq("id", userId);
  }
  async function signOut() {
    await supabase.auth.signOut();
    router.replace("/portal/login");
  }

  async function refreshBTC() {
    setBtcLoading(true);
    try {
      const data = await fetchJsonWithTimeout(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&price_change_percentage=24h",
        9000,
      );
      const d = data?.[0];
      if (!d || typeof d.current_price !== "number") throw new Error("bad payload");
      const price = d.current_price;
      const changePct = d.price_change_percentage_24h;
      const prevPrice = price / (1 + changePct / 100);
      setBtc({ price, changePct, changeAbs: price - prevPrice, ts: Date.now(), changeLabel: "24h", stale: false });
    } catch {
      setBtc((prev) => (prev ? { ...prev, stale: true } : null));
    }
    setBtcLoading(false);
  }
  async function refreshXAU() {
    setXauLoading(true);
    try {
      const data = await fetchJsonWithTimeout("https://api.gold-api.com/price/XAU", 9000);
      const price = typeof data?.price === "number" ? data.price : data?.rate;
      if (typeof price !== "number") throw new Error("bad payload");
      const ref = getDayRef("xau", price);
      const changeAbs = price - ref;
      setXau({
        price,
        changeAbs,
        changePct: ref ? (changeAbs / ref) * 100 : 0,
        ts: Date.now(),
        changeLabel: "Today",
        stale: false,
      });
    } catch {
      setXau((prev) => (prev ? { ...prev, stale: true } : null));
    }
    setXauLoading(false);
  }
  async function refreshNewsLive(showLoading: boolean) {
    if (showLoading && !news) setNewsLoading(true);
    try {
      const proxied = "https://r.jina.ai/https://nfs.faireconomy.media/ff_calendar_thisweek.json";
      const raw = await fetchTextWithTimeout(proxied, 9000);
      const start = raw.indexOf("[");
      const end = raw.lastIndexOf("]");
      if (start === -1 || end === -1) throw new Error("bad payload");
      const data = JSON.parse(raw.slice(start, end + 1));
      const items: NewsItem[] = data
        .map((it: { impact?: string; date?: string; country?: string; title?: string }) => {
          const impact = (it.impact || "").toLowerCase();
          if (impact !== "high" && impact !== "medium") return null;
          const d = new Date(it.date || "");
          if (isNaN(d.getTime())) return null;
          return { sym: it.country || "", h: it.title || "Event", impact, when: fmtNewsWhen(d), ts: d.getTime() } as NewsItem;
        })
        .filter((x: NewsItem | null): x is NewsItem => x !== null)
        .filter((it: NewsItem) => it.ts >= Date.now() - 3 * 3600 * 1000)
        .sort((a: NewsItem, b: NewsItem) => a.ts - b.ts)
        .slice(0, 8);
      setNews({ items, ts: Date.now(), stale: false });
    } catch {
      setNews((prev) => (prev ? { ...prev, stale: true } : null));
    }
    setNewsLoading(false);
  }

  useEffect(() => {
    if (tab !== "markets") return;
    if (!marketsLoadedRef.current) {
      marketsLoadedRef.current = true;
      refreshBTC();
      refreshXAU();
      refreshNewsLive(true);
    }
    const priceInterval = setInterval(() => {
      if (document.visibilityState === "visible") {
        refreshBTC();
        refreshXAU();
      }
    }, 45000);
    const newsInterval = setInterval(() => {
      if (document.visibilityState === "visible") refreshNewsLive(false);
    }, 300000);
    function onVis() {
      if (document.visibilityState === "visible") {
        refreshBTC();
        refreshXAU();
        refreshNewsLive(false);
      }
    }
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(priceInterval);
      clearInterval(newsInterval);
      document.removeEventListener("visibilitychange", onVis);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  if (loading || !student) {
    return (
      <div className="loadingscreen">
        <RingLogo size="sm" /> &nbsp; Loading your account…
      </div>
    );
  }

  const stats = overallStats();
  const cont = findContinue();

  return (
    <div className="app">
      <header className="topbar">
        <RingLogo size="sm" />
        <div className="wordmark">Bunny Trading</div>
        <div className="topbar-spacer" />
        <div className="topbar-tag">Education Hub</div>
      </header>

      <main className="view-area">
        {tab === "topics" && (
          <div className="view">
            <div className="hero">
              <div className="heroline">
                <span className="hr" />
                <RingLogo size="lg" />
                <span className="hr" />
              </div>
              <h1 className="herotitle">Education Topics</h1>
              <p className="herosub">{MODULES.length} modules — work through them in order or jump around.</p>
            </div>
            <div className="modlist">
              {MODULES.map((mod, mi) => {
                const s = moduleStats(mod);
                const open = expanded.has(mod.id);
                const locked = isLocked(mod);
                return (
                  <div key={mod.id} className={`modcard ${open ? "open" : ""} ${locked ? "locked" : ""}`}>
                    <button className="modhead" onClick={() => toggleModule(mod)}>
                      <div className="modiconwrap">
                        <div className={`iconbadge sm ${locked ? "locked" : ""}`}>
                          <Icon name={locked ? "lock" : mod.icon} size={16} />
                        </div>
                        <div className="numbadge">{mi + 1}</div>
                      </div>
                      <div className="modinfo">
                        <div className="modtitle">
                          {mod.title} <span className={`pill tier-${mod.tier}`}>{TIER_LABEL[mod.tier]}</span>
                        </div>
                        <div className="modsub">{mod.sub}</div>
                        {!locked && (
                          <>
                            <div className="bar" style={{ marginTop: 6 }}>
                              <i style={{ width: `${s.pct}%` }} />
                            </div>
                            <div className="modcaption">
                              {s.done}/{s.total} lessons complete
                            </div>
                          </>
                        )}
                      </div>
                      {!locked && (
                        <div className="modchev">
                          <Icon name="chevron" size={17} />
                        </div>
                      )}
                    </button>
                    {locked ? (
                      <div className="lockedmsg">
                        <Icon name="lock" size={14} />
                        <span>
                          Unlocks on the {TIER_LABEL[mod.tier]} tier —{" "}
                          <a href="/pricing" style={{ color: "var(--p-gold)" }}>
                            see pricing
                          </a>
                        </span>
                      </div>
                    ) : (
                      <div className="lessons" style={{ maxHeight: open ? (lessonsByModule[mod.id]?.length ?? 0) * 56 + 24 : 0 }}>
                        <div className="lessonlist">
                          {(lessonsByModule[mod.id] ?? []).map((l) => {
                            const done = progress.has(l.id);
                            return (
                              <div
                                key={l.id}
                                id={`row-${l.id}`}
                                className="lessonrow"
                                style={highlightId === l.id ? { background: "var(--p-goldwash)" } : undefined}
                              >
                                <button
                                  className={`checkbtn ${done ? "done" : ""}`}
                                  onClick={() => toggleLesson(mod, l)}
                                  aria-label="Toggle lesson complete"
                                >
                                  <Icon name="check" size={13} />
                                </button>
                                <div className="lessoninfo">
                                  <div className="n" style={done ? { textDecoration: "line-through", color: "var(--p-inkmute)" } : undefined}>
                                    {l.title}
                                  </div>
                                </div>
                                <div className="lessontime">{l.minutes}m</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "progress" && (
          <div className="view">
            <div className="hero">
              <div className="heroline">
                <span className="hr" />
                <RingLogo size="lg" />
                <span className="hr" />
              </div>
              <h1 className="herotitle">My Progress</h1>
              <p className="herosub">Overall learning progress, lessons completed and minutes studied.</p>
            </div>
            <div className="card">
              <div className="sectionlabel">Overall Progress</div>
              <div className="progressrow">
                <div className="progressnum">{stats.pct}%</div>
                <div className="progressmeta">
                  <span>
                    {stats.done}/{stats.totalLessons} lessons
                  </span>
                  <span>{stats.minutes} min studied</span>
                </div>
              </div>
              <div className="bar" style={{ marginTop: 14 }}>
                <i style={{ width: `${stats.pct}%` }} />
              </div>
            </div>
            <div className="statgrid">
              <div className="statcard">
                <Icon name="checkcircle" size={22} />
                <div className="v">{stats.done}</div>
                <div className="s">Completed</div>
              </div>
              <div className="statcard">
                <Icon name="flame" size={22} />
                <div className="v">
                  {stats.topicsDone}/{stats.totalTopics}
                </div>
                <div className="s">Topics Done</div>
              </div>
              <div className="statcard">
                <Icon name="clock" size={22} />
                <div className="v">{stats.minutes}</div>
                <div className="s">Minutes</div>
              </div>
            </div>
            {cont ? (
              <div className="card glow">
                <div className="sectionlabel gold">Continue Learning</div>
                <div className="contname">{cont.lesson.title}</div>
                <div className="contmod">{cont.mod.title}</div>
                <button className="btn solid block" onClick={() => resumeLesson(cont.mod.id, cont.lesson.id)}>
                  Resume Lesson
                </button>
              </div>
            ) : (
              <div className="card glow empty">
                <div className="iconbadge">
                  <Icon name="checkcircle" size={22} />
                </div>
                <h3>All Lessons Complete</h3>
                <p>You&rsquo;ve finished every module available on your tier.</p>
              </div>
            )}
            <div className="card">
              <div className="sectionlabel" style={{ marginBottom: 10 }}>
                Topic Progress
              </div>
              {MODULES.map((mod) => {
                const locked = isLocked(mod);
                const s = moduleStats(mod);
                return (
                  <div className="topicrow" key={mod.id}>
                    <div className={`iconbadge sm ${locked ? "locked" : ""}`}>
                      <Icon name={locked ? "lock" : mod.icon} size={16} />
                    </div>
                    <div className="info">
                      <div className="top">
                        <span>{mod.title}</span>
                        <span className={locked ? "dim" : "gold"}>{locked ? "Locked" : `${s.pct}%`}</span>
                      </div>
                      <div className="bar">
                        <i style={{ width: `${locked ? 0 : s.pct}%` }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "media" && (
          <div className="view">
            <div className="hero">
              <div className="heroline">
                <span className="hr" />
                <RingLogo size="lg" />
                <span className="hr" />
              </div>
              <h1 className="herotitle">Media Hub</h1>
              <p className="herosub">Live sessions, recorded breakdowns and the resource library.</p>
            </div>
            <div className="subtabs">
              <button className={mediaTab === "live" ? "on" : ""} onClick={() => setMediaTab("live")}>
                Livestreams
              </button>
              <button className={mediaTab === "videos" ? "on" : ""} onClick={() => setMediaTab("videos")}>
                Videos
              </button>
              <button className={mediaTab === "library" ? "on" : ""} onClick={() => setMediaTab("library")}>
                Library
              </button>
            </div>
            <div className="medialist">
              {mediaTab === "live" &&
                MEDIA.live.map((s, i) => (
                  <div className="card streamcard" key={i}>
                    <div className="streampreview">
                      <div className="streamtags">
                        {s.status === "live" ? (
                          <span className="pill live">
                            <span className="dot" />
                            Live
                          </span>
                        ) : (
                          <span className="pill scheduled">
                            <Icon name="calendar" size={12} /> Scheduled
                          </span>
                        )}
                        {s.status === "live" ? (
                          <span className="pill viewers">
                            <Icon name="eye" size={12} /> {s.viewers}
                          </span>
                        ) : (
                          <span />
                        )}
                      </div>
                      <div className="streamicon">
                        <Icon name="radio" size={30} />
                      </div>
                    </div>
                    <div className="title">{s.title}</div>
                    <div className="desc">{s.desc}</div>
                    <div className="foot">
                      <span className="meta">
                        {s.status === "live" ? (
                          <span>Live now</span>
                        ) : (
                          <span>
                            <Icon name="clock" size={12} /> {s.when}
                          </span>
                        )}
                      </span>
                      <button
                        className="btn solid sm"
                        onClick={() => showToast("Livestream links will be added once available")}
                      >
                        Watch Now
                      </button>
                    </div>
                  </div>
                ))}
              {mediaTab === "videos" &&
                MEDIA.videos.map((v, i) => (
                  <div
                    className="card videocard"
                    key={i}
                    onClick={() => showToast("Video links will be added once available")}
                  >
                    <div className="thumb">
                      <Icon name="play" size={20} />
                      <span className="dur">{v.d}</span>
                    </div>
                    <div className="videoinfo">
                      <div className="t">{v.t}</div>
                      <div className="s">Recorded lesson breakdown</div>
                    </div>
                  </div>
                ))}
              {mediaTab === "library" &&
                MEDIA.library.map((f, i) => (
                  <div
                    className="card libitem"
                    key={i}
                    onClick={() => showToast("Resource files will be added once available")}
                  >
                    <div className="iconbadge sm">
                      <Icon name="file" size={16} />
                    </div>
                    <div className="info" style={{ flex: 1 }}>
                      <div className="t">{f.t}</div>
                      <div className="s">{f.s}</div>
                    </div>
                    <button className="btn icon-only plain" aria-label="Download">
                      <Icon name="download" size={16} />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}

        {tab === "markets" && (
          <div className="view">
            <div className="hero">
              <div className="heroline">
                <span className="hr" />
                <RingLogo size="lg" />
                <span className="hr" />
              </div>
              <h1 className="herotitle">Markets</h1>
              <p className="herosub">Live BTC &amp; XAU updates and high-impact forex events.</p>
            </div>

            <PriceCard
              label="Bitcoin"
              sublabel="BTC / USD"
              data={btc}
              loading={btcLoading}
              digits={0}
              onRefresh={refreshBTC}
              tvUrl="https://www.tradingview.com/symbols/BTCUSD/"
            />
            <div className="card flush chartcard">
              <div className="sectionlabel chartlabel">Live Chart · BTC/USD</div>
              <TVChart symbol="COINBASE:BTCUSD" />
            </div>

            <PriceCard
              label="Gold"
              sublabel="XAU / USD"
              data={xau}
              loading={xauLoading}
              digits={2}
              onRefresh={refreshXAU}
              tvUrl="https://www.tradingview.com/symbols/XAUUSD/"
            />
            <div className="card flush chartcard">
              <div className="sectionlabel chartlabel">Live Chart · XAU/USD</div>
              <TVChart symbol="OANDA:XAUUSD" />
            </div>

            <div className="card">
              <div className="cardhead">
                <div className="sectionlabel">Forex News</div>
                <div className="legend">
                  <span>
                    <span className="dot high" />
                    High
                  </span>
                  <span>
                    <span className="dot medium" />
                    Medium
                  </span>
                </div>
                <button className="btn outline sm" onClick={() => refreshNewsLive(true)}>
                  <Icon name="refresh" size={13} /> Refresh
                </button>
              </div>
              {newsLoading && !news ? (
                <>
                  <div className="skel" style={{ height: 44, marginBottom: 10 }} />
                  <div className="skel" style={{ height: 44, marginBottom: 10 }} />
                  <div className="skel" style={{ height: 44 }} />
                </>
              ) : (
                <>
                  {(news?.items?.length ? news.items : FALLBACK_NEWS).map((n, i) => (
                    <div className="newsrow" key={i}>
                      <span className={`dot ${n.impact}`} />
                      <div className="info">
                        <div className="h">{n.h}</div>
                        <div className="m">
                          {n.sym} · {n.when}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className={`updated ${news?.stale ? "stale" : ""}`}>
                    {news?.items?.length
                      ? `${news.stale ? "Cached · " : "Live · Forex Factory · "}Updated ${fmtRel(news.ts)}`
                      : "Live calendar unavailable — showing sample events"}
                  </div>
                </>
              )}
            </div>
            <div className="disclaimer">
              Market data and headlines are provided for education only. Not financial advice.
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div className="view">
            <div className="hero">
              <div className="heroline">
                <span className="hr" />
                <RingLogo size="lg" />
                <span className="hr" />
              </div>
              <h1 className="herotitle">Trading Journal</h1>
              <p className="herosub">Reason first, review after — log every trade against the same rule.</p>
            </div>
            <div className="statgrid">
              <div className="statcard">
                <Icon name="bars" size={22} />
                <div className="v">{journal.length}</div>
                <div className="s">Total Trades</div>
              </div>
              <div className="statcard">
                <Icon name="checkcircle" size={22} />
                <div className="v">
                  {journal.length ? Math.round((journal.filter((e) => e.outcome === "win").length / journal.length) * 100) : 0}%
                </div>
                <div className="s">Win Rate</div>
              </div>
              <div className="statcard">
                <Icon name="shield" size={22} />
                <div className="v">
                  {journal.length ? Math.round((journal.filter((e) => e.reason_first).length / journal.length) * 100) : 0}%
                </div>
                <div className="s">Reason First</div>
              </div>
            </div>
            <button className={`btn ${journalFormOpen ? "plain" : "solid"} block`} onClick={() => setJournalFormOpen((o) => !o)}>
              {journalFormOpen ? "Cancel" : (
                <>
                  <Icon name="journal" size={14} /> Log New Trade
                </>
              )}
            </button>
            {journalFormOpen && (
              <div className="card glow">
                <div className="sectionlabel gold" style={{ marginBottom: 12 }}>
                  New Entry
                </div>
                <div className="stack">
                  <div className="f">
                    <span>Symbol</span>
                    <input
                      type="text"
                      className="portal-input"
                      value={jSymbol}
                      onChange={(e) => setJSymbol(e.target.value)}
                      maxLength={12}
                    />
                  </div>
                  <div className="f">
                    <span>Direction</span>
                    <div className="tierseg">
                      <button type="button" className={jSide === "long" ? "on" : ""} onClick={() => setJSide("long")}>
                        Long
                      </button>
                      <button type="button" className={jSide === "short" ? "on" : ""} onClick={() => setJSide("short")}>
                        Short
                      </button>
                    </div>
                  </div>
                  <div className="f">
                    <span>Outcome</span>
                    <div className="tierseg">
                      <button type="button" className={jOutcome === "win" ? "on" : ""} onClick={() => setJOutcome("win")}>
                        Win
                      </button>
                      <button type="button" className={jOutcome === "loss" ? "on" : ""} onClick={() => setJOutcome("loss")}>
                        Loss
                      </button>
                      <button
                        type="button"
                        className={jOutcome === "breakeven" ? "on" : ""}
                        onClick={() => setJOutcome("breakeven")}
                      >
                        B/E
                      </button>
                    </div>
                  </div>
                  <div className="f">
                    <div className="switchrow">
                      <span>Reason sent before entry?</span>
                      <button type="button" className={`switch ${jReasonFirst ? "on" : ""}`} onClick={() => setJReasonFirst((v) => !v)}>
                        <i />
                      </button>
                    </div>
                  </div>
                  <div className="f">
                    <span>Reason / setup</span>
                    <textarea
                      className="portal-input"
                      value={jReason}
                      onChange={(e) => setJReason(e.target.value)}
                      placeholder="The level, the structure, the stop — write it like you'd send it before entry."
                    />
                  </div>
                  <div className="f">
                    <span>Mentor note (optional)</span>
                    <textarea
                      className="portal-input"
                      value={jMentorNote}
                      onChange={(e) => setJMentorNote(e.target.value)}
                      placeholder="Feedback from your review, if you've had one yet."
                    />
                  </div>
                  <button className="btn solid block" onClick={addJournalEntry} disabled={jSaving}>
                    {jSaving ? "Saving…" : "Save Entry"}
                  </button>
                </div>
              </div>
            )}
            <div className="stack">
              {journal.length === 0 ? (
                <div className="card empty">
                  <div className="iconbadge">
                    <Icon name="journal" size={22} />
                  </div>
                  <h3>No Trades Logged Yet</h3>
                  <p>Log your first trade above — reason first, result after.</p>
                </div>
              ) : (
                journal.map((e) => (
                  <div className="card journalentry" key={e.id}>
                    <div className="top">
                      <div className="sidegroup">
                        <span className={`pill side-${e.side}`}>{e.side === "long" ? "Long" : "Short"}</span>
                        <span className="jsym">{e.symbol}</span>
                      </div>
                      <span className={`pill outcome-${e.outcome}`}>
                        {e.outcome === "win" ? "Win" : e.outcome === "loss" ? "Loss" : "Breakeven"}
                      </span>
                    </div>
                    <div className="reasonlbl">
                      {e.reason_first && <Icon name="check" size={11} />}
                      {e.reason_first ? "Reason sent before entry" : "No reason logged before entry"}
                    </div>
                    <div className="reasontext">{e.reason}</div>
                    {e.mentor_note && <div className="mentornote">&ldquo;{e.mentor_note}&rdquo;</div>}
                    <div className="foot">
                      <span className="meta">
                        {new Date(e.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <button className="btn icon-only plain" onClick={() => deleteJournalEntry(e.id)} aria-label="Delete entry">
                        <Icon name="trash" size={15} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {tab === "profile" && (
          <div className="view">
            <div className="hero">
              <div className="heroline">
                <span className="hr" />
                <RingLogo size="lg" />
                <span className="hr" />
              </div>
              <h1 className="herotitle">My Profile</h1>
              <p className="herosub">Account details and mentorship preferences.</p>
            </div>
            <div className="card profilehead">
              <div className="avatar">{initials(student.name)}</div>
              <input
                className="nameinput"
                value={nameDraft}
                onChange={(e) => setNameDraft(e.target.value)}
                onBlur={saveName}
                maxLength={24}
                aria-label="Your name"
              />
              <span className={`pill tier-${student.tier}`}>{TIER_LABEL[student.tier]} Tier</span>
              <div className="joindate">
                <Icon name="calendar" size={13} /> Joined {fmtJoinDate(student.join_date)}
              </div>
            </div>
            <div className="card">
              <div className="sectionlabel" style={{ marginBottom: 4 }}>
                Settings
              </div>
              <div className="settingrow">
                <div className="iconbadge sm">
                  <Icon name="bell" size={16} />
                </div>
                <div className="info">
                  <div className="t">Notifications</div>
                  <div className="s">Lesson reminders &amp; livestream alerts</div>
                </div>
                <button className={`switch ${student.notifications ? "on" : ""}`} onClick={toggleNotifications} aria-label="Toggle notifications">
                  <i />
                </button>
              </div>
              <div className="settingrow">
                <div className="iconbadge sm clay">
                  <Icon name="logout" size={16} />
                </div>
                <div className="info">
                  <div className="t">Sign Out</div>
                  <div className="s">End your session on this device</div>
                </div>
                <button className="btn sm plain" onClick={signOut}>
                  Sign Out
                </button>
              </div>
            </div>
            <p className="portal-note">
              Want a different tier?{" "}
              <a href="/contact" style={{ color: "var(--p-gold)" }}>
                DM Bunny →
              </a>
            </p>
          </div>
        )}
      </main>

      <nav className="bottomnav">
        <div className="wrap">
          {TABS.map((t) => (
            <button key={t.id} className={tab === t.id ? "on" : ""} onClick={() => setTab(t.id)}>
              <Icon name={t.icon} size={18} />
              <span className="lbl">{t.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </div>
  );
}

function PriceCard({
  label,
  sublabel,
  data,
  loading,
  digits,
  onRefresh,
  tvUrl,
}: {
  label: string;
  sublabel: string;
  data: PriceData;
  loading: boolean;
  digits: number;
  onRefresh: () => void;
  tvUrl: string;
}) {
  if (loading && !data) {
    return (
      <div className="card">
        <div className="pricetop">
          <div className="sectionlabel">{label}</div>
          <div className="pricetime">{sublabel}</div>
        </div>
        <div className="skel" style={{ height: 36, width: "60%", marginTop: 12 }} />
        <div className="skel" style={{ height: 14, width: "40%", marginTop: 10 }} />
      </div>
    );
  }
  if (!data) {
    return (
      <div className="card">
        <div className="pricetop">
          <div className="sectionlabel">{label}</div>
          <div className="pricetime">{sublabel}</div>
        </div>
        <p className="mute" style={{ fontSize: 14, marginTop: 10 }}>
          Couldn&rsquo;t load a price right now.
        </p>
        <button className="btn outline block" style={{ marginTop: 14 }} onClick={onRefresh}>
          <Icon name="refresh" size={14} /> Try Again
        </button>
      </div>
    );
  }
  const up = data.changePct >= 0;
  return (
    <div className={`card ${data.stale ? "" : "glow"}`}>
      <div className="pricetop">
        <div className="sectionlabel">{label}</div>
        <button className="btn icon-only plain" style={{ width: 30, height: 30, padding: 6 }} onClick={onRefresh} aria-label={`Refresh ${label}`} disabled={loading}>
          <Icon name="refresh" size={14} />
        </button>
      </div>
      <div className="pricebig">{fmtUsd(data.price, digits)}</div>
      <div className={`pricechange ${up ? "up" : "down"}`}>
        <Icon name={up ? "arrowUp" : "arrowDown"} size={15} />
        {up ? "+" : "-"}
        {Math.abs(data.changePct).toFixed(2)}% ({up ? "+" : "-"}
        {fmtUsd(Math.abs(data.changeAbs), digits)}) · {data.changeLabel}
      </div>
      <a className="btn outline block" href={tvUrl} target="_blank" rel="noopener">
        <Icon name="external" size={14} /> Open Full Chart in TradingView
      </a>
      <div className={`updated ${data.stale ? "stale" : ""}`}>
        {data.stale ? "Cached · " : ""}Updated {fmtRel(data.ts)}
      </div>
    </div>
  );
}
