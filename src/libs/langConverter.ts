export default function langConverter(lang: string): string {
  switch (lang) {
    case "JavaScript" || "javascript":
      return "js";
    case "React" || "react":
      return "react";
    case "TypeScript" || "typescript":
      return "ts";
    default:
      return "";
  }
}
