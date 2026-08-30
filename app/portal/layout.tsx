import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./portal.css";

const cinzel = Cinzel({
  variable: "--font-portal-disp",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-portal-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <div className={`portal-root ${cinzel.variable} ${cormorant.variable}`}>{children}</div>;
}
