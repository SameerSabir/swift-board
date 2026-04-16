// Delay in the vertical line
export const delays = [0.7, 0.9, 1.1, 0.8, 1.0, 1.2];

//  Bar chart values for Customers card ──
export const BAR_CHART_VALUES = [40, 65, 45, 80, 55, 90, 70] as const;
export const BAR_CHART_HIGHLIGHT_INDEX = 5;

//  Sparkline SVG points for Revenue card
export const SPARKLINE_POINTS = "0,25 12,20 24,22 36,10 48,14 60,6 72,8 80,4";
export const SPARKLINE_AREA_POINTS = `${SPARKLINE_POINTS} 80,30 0,30`;

//  Active Users avatars
export interface User {
  name: string;
  initials: string;
  bg: string;
  text: string;
}

export const ACTIVE_USERS: User[] = [
  { name: "Janice", initials: "JA", bg: "#e0f2fe", text: "#0369a1" },
  { name: "Edward", initials: "EA", bg: "#fce7f3", text: "#9d174d" },
  { name: "Jesse", initials: "JE", bg: "#f0fdf4", text: "#166534" },
  { name: "Allan", initials: "AD", bg: "#fef9c3", text: "#854d0e" },
  { name: "Brenda", initials: "BR", bg: "#f3e8ff", text: "#6b21a8" },
  { name: "Joseph", initials: "JO", bg: "#fff7ed", text: "#9a3412" },
];

//  Earnings card data
export const EARNINGS_DATA = {
  initials: "KE",
  name: "Kenneth E.",
  location: "San Diego, CA",
  label: "Earnings This Month",
  amount: "$4,055.56",
  growth: "↑ 68.2% more than last month",
} as const;

//  Customers card data
export const CUSTOMERS_DATA = {
  label: "Customers",
  value: "27,564",
  badge: "↑ 7.06%",
  since: "Since last month",
} as const;

//  Revenue card data
export const REVENUE_DATA = {
  label: "Current Month",
  value: "$6,254",
  badge: "↑ 7.06%",
} as const;

//  Background blobs
export interface Blob {
  style: React.CSSProperties;
}

// After
export const BACKGROUND_BLOBS: React.CSSProperties[] = [
  {
    bottom: "4%",
    left: "2%",
    width: "320px",
    height: "200px",
    background:
      "linear-gradient(135deg,rgba(155,50,255,0.13) 0%,rgba(155,50,255,0.18) 100%)",
    borderRadius: "62% 38% 71% 29% / 44% 58% 42% 56%",
    filter: "blur(20px)",
    transform: "rotate(-12deg)",
  },
  {
    top: "7%",
    right: "3%",
    width: "260px",
    height: "175px",
    background:
      "linear-gradient(110deg,rgba(155,50,255,0.09) 0%,rgba(155,50,255,0.13) 100%)",
    borderRadius: "38% 62% 29% 71% / 58% 44% 56% 42%",
    filter: "blur(24px)",
    transform: "rotate(18deg)",
  },
  {
    top: "38%",
    right: "-2%",
    width: "200px",
    height: "280px",
    background:
      "linear-gradient(160deg,rgba(155,50,255,0.09) 0%,rgba(155,50,255,0.07) 100%)",
    borderRadius: "71% 29% 55% 45% / 38% 62% 38% 62%",
    filter: "blur(28px)",
    transform: "rotate(8deg)",
  },
  {
    top: "14%",
    left: "4%",
    width: "180px",
    height: "220px",
    background:
      "linear-gradient(200deg,rgba(155,50,255,0.08) 0%,rgba(155,50,255,0.06) 100%)",
    borderRadius: "45% 55% 38% 62% / 62% 38% 62% 38%",
    filter: "blur(22px)",
    transform: "rotate(-22deg)",
  },
  {
    bottom: "0%",
    left: "32%",
    width: "420px",
    height: "130px",
    background:
      "linear-gradient(90deg,rgba(155,50,255,0.07) 0%,rgba(155,50,255,0.12) 50%,rgba(155,50,255,0.09) 100%)",
    borderRadius: "55% 45% 0 0 / 80% 80% 0 0",
    filter: "blur(30px)",
  },
];

//  Vertical accent lines
export interface VertLine {
  left: string;
  height: string;
  top: string;
  opacity: number;
}

export const VERT_LINES: VertLine[] = [
  { left: "8%", height: "50%", top: "12%", opacity: 0.18 },
  { left: "22%", height: "38%", top: "22%", opacity: 0.12 },
  { left: "38%", height: "60%", top: "6%", opacity: 0.09 },
  { left: "62%", height: "58%", top: "8%", opacity: 0.09 },
  { left: "78%", height: "42%", top: "18%", opacity: 0.13 },
  { left: "92%", height: "48%", top: "10%", opacity: 0.17 },
];

//  Particle config
export const PARTICLE_CONFIG = {
  count: 35,
  minSpeed: 0.25,
  maxSpeed: 0.35,
  minOpacity: 0.12,
  maxOpacity: 0.3,
  minSize: 1.5,
  maxSize: 2,
  color: "155,50,255",
} as const;
