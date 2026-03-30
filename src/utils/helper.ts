const PALETTES = [
  { cardBg: "#F5FAEC", iconBg: "#d1f5a0", iconColor: "#4a7c14" }, // green
  { cardBg: "#EFF6FF", iconBg: "#bfdbfe", iconColor: "#1d4ed8" }, // blue
  { cardBg: "#FFF7ED", iconBg: "#fed7aa", iconColor: "#c2410c" }, // orange
];

export function getPalette(index: number) {
  return PALETTES[index % PALETTES.length];
}

export const getMediaUrl = (path: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_MEDIA_URL;
  if (!baseUrl) {
    console.warn("NEXT_PUBLIC_MEDIA_URL is not defined in .env");
    return path; // fallback to path itself
  }
  // remove any leading slash from path to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  return `${baseUrl}/${cleanPath}`;
};

export function parseFaqs(
  input: string | { question: string; answer: string }[] | undefined
): { question: string; answer: string }[] {
  if (!input) return [];

  if (Array.isArray(input)) return input;

  if (typeof input === "string") {
    try {
      let cleaned = input.trim();

      // Try parsing JSON first
      if (
        (cleaned.startsWith("[") && cleaned.endsWith("]")) ||
        (cleaned.startsWith('"') && cleaned.endsWith('"'))
      ) {
        if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
          cleaned = cleaned.slice(1, -1).replace(/\\"/g, '"');
        }
        return JSON.parse(cleaned) as { question: string; answer: string }[];
      }

      // Fallback: treat the string as a single FAQ
      return [{ question: cleaned, answer: "" }];
    } catch (err) {
      console.error("Failed to parse faQs:", err);
      // If parsing fails, treat it as a single string FAQ
      return [{ question: input, answer: "" }];
    }
  }

  return [];
}

/**
 * Parses blog keywords from various formats into an array
 * Handles: JSON string, array, comma-separated string, or single string
 */
export function parseKeywords(
  keywords: string | string[] | undefined | null
): string[] {
  if (!keywords) return [];
  if (Array.isArray(keywords)) return keywords;

  if (typeof keywords === "string") {
    if (!keywords.trim()) return [];

    try {
      const parsed = JSON.parse(keywords);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);
    }
  }

  return [];
}
