const PALETTES = [
  { cardBg: "#F5FAEC", iconBg: "#d1f5a0", iconColor: "#4a7c14" }, // green
  { cardBg: "#EFF6FF", iconBg: "#bfdbfe", iconColor: "#1d4ed8" }, // blue
  { cardBg: "#FFF7ED", iconBg: "#fed7aa", iconColor: "#c2410c" }, // orange
];

export function getPalette(index: number) {
  return PALETTES[index % PALETTES.length];
}
