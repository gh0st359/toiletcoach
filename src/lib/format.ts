import { type EventKind, KIND_LABEL, KIND_SLANG, type Vulgarity } from "@/lib/types";

export function kindTitle(kind: EventKind, vulgarity: Vulgarity): string {
  return vulgarity === "filthy" ? KIND_SLANG[kind] : KIND_LABEL[kind];
}

export function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function formatClock(timestamp: number): string {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(timestamp);
}

export function formatDay(timestamp: number): string {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(timestamp);
}

export function relativeTime(timestamp?: number): string {
  if (!timestamp) return "No official events yet";
  const delta = Date.now() - timestamp;
  const minutes = Math.round(delta / 60_000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

export function greeting(name: string): string {
  const hour = new Date().getHours();
  const who = name.trim() || "athlete";
  if (hour < 12) return `Good morning, ${who}`;
  if (hour < 17) return `Good afternoon, ${who}`;
  return `Good evening, ${who}`;
}
