export const EVENT_KINDS = [
  "shit",
  "piss",
  "fart",
  "shart",
  "mixed",
] as const;

export type EventKind = (typeof EVENT_KINDS)[number];

export const BRISTOL_TYPES = [1, 2, 3, 4, 5, 6, 7] as const;
export type BristolType = (typeof BRISTOL_TYPES)[number];

export const EFFORT_LEVELS = [1, 2, 3, 4, 5] as const;
export type EffortLevel = (typeof EFFORT_LEVELS)[number];

export type Vulgarity = "clinical" | "filthy";

export type SessionPhase =
  | "idle"
  | "settle"
  | "breathe"
  | "unclench"
  | "release"
  | "recover";

export type ToiletProfile = {
  id: string;
  name: string;
  vibe: string;
  rating: number;
};

export type Session = {
  id: string;
  kind: EventKind;
  startedAt: number;
  endedAt: number;
  durationSec: number;
  bristol?: BristolType;
  effort: EffortLevel;
  satisfaction: EffortLevel;
  notes?: string;
  strained: boolean;
};

export type ActiveSession = {
  kind: EventKind;
  startedAt: number;
  phase: SessionPhase;
};

export type DailyUsage = {
  date: string;
  messages: number;
};

export type CoachAction =
  | { name: "startSession"; kind: EventKind }
  | { name: "endSession" }
  | { name: "logBristol"; bristol: BristolType }
  | { name: "logHydration"; ml: number }
  | { name: "startBreathing" }
  | { name: "startPushProtocol" }
  | { name: "analyzeFart"; verdict: string; diplomatic: string }
  | { name: "runShartProtocol" }
  | { name: "scorePeeFlow"; score: number; note: string }
  | { name: "setReminder"; text: string }
  | { name: "unlockPro" };

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  createdAt: number;
  actions?: CoachAction[];
  suggestions?: string[];
};

export type AppState = {
  onboardingComplete: boolean;
  name: string;
  isPro: boolean;
  vulgarity: Vulgarity;
  useCloudCoach: boolean;
  hydrationMl: number;
  hydrationGoal: number;
  fiberServings: number;
  streak: number;
  lastDropAt?: number;
  sessions: Session[];
  toilets: ToiletProfile[];
  activeSession?: ActiveSession;
  dailyUsage: DailyUsage;
  reminders: string[];
  ritual: string;
  codeBrownContacts: string[];
};

export const FREE_DAILY_MESSAGES = 8;

export const KIND_LABEL: Record<EventKind, string> = {
  shit: "Evacuation",
  piss: "Void",
  fart: "Flatus",
  shart: "Code Brown",
  mixed: "Combo",
};

export const KIND_SLANG: Record<EventKind, string> = {
  shit: "shit",
  piss: "piss",
  fart: "fart",
  shart: "shart",
  mixed: "mixed disaster",
};

export const BRISTOL_COPY: Record<BristolType, { title: string; hint: string }> = {
  1: { title: "Rabbit pellets", hint: "Hard, separate lumps. Hydrate or perish." },
  2: { title: "Lumpy log", hint: "Sausage, but lumpy. Fiber is not a personality, but try it." },
  3: { title: "Cracked sausage", hint: "Almost there. A pear wouldn't kill you." },
  4: { title: "Ideal snake", hint: "Smooth, soft, legendary. Frame this." },
  5: { title: "Soft blobs", hint: "Clear cut edges. Maybe ease up on the cold brew." },
  6: { title: "Fluffy mush", hint: "Ragged edges. Your colon is speedrunning." },
  7: { title: "Liquid chaos", hint: "Entirely liquid. Stay near porcelain." },
};

export function createId(prefix = "id"): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
}

export function todayKey(now = Date.now()): string {
  return new Date(now).toISOString().slice(0, 10);
}

export function initialState(): AppState {
  return {
    onboardingComplete: false,
    name: "",
    isPro: false,
    vulgarity: "filthy",
    useCloudCoach: false,
    hydrationMl: 0,
    hydrationGoal: 2500,
    fiberServings: 0,
    streak: 0,
    sessions: [],
    toilets: [
      {
        id: "home-throne",
        name: "Home Throne",
        vibe: "Reliable. Knows your secrets.",
        rating: 5,
      },
    ],
    dailyUsage: { date: todayKey(), messages: 0 },
    reminders: [],
    ritual: "Phone down. Feet up. Jaw unclenched. No straining.",
    codeBrownContacts: [],
  };
}
