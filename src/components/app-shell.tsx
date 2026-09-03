"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Crown,
  Home,
  MessageCircle,
  NotebookPen,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/coach", label: "Coach", icon: MessageCircle },
  { href: "/session", label: "Sit", icon: Timer },
  { href: "/log", label: "Log", icon: NotebookPen },
  { href: "/pro", label: "Pro", icon: Crown },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-grain min-h-dvh px-0 py-0 md:flex md:items-center md:justify-center md:px-6 md:py-8">
      <div className="mx-auto flex h-dvh w-full max-w-[430px] flex-col overflow-hidden bg-background md:h-[844px] md:max-h-[844px] md:rounded-[2rem] md:phone-bezel">
        <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-medium tracking-wide text-muted-foreground">
          <span>9:41</span>
          <span className="h-5 w-24 rounded-full bg-ink/90" />
          <span>TC</span>
        </div>
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>
        <nav className="safe-bottom grid grid-cols-5 border-t border-border/80 bg-card/90 px-1 pt-2 backdrop-blur">
          {TABS.map((tab) => {
            const active = pathname === tab.href || pathname.startsWith(`${tab.href}/`);
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-2xl py-2 text-[11px] font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Icon className={cn("size-5", active && "fill-primary/12")} />
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export function Screen({
  title,
  eyebrow,
  action,
  children,
}: {
  title: string;
  eyebrow?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex items-start justify-between gap-3 px-5 pb-3 pt-4">
        <div>
          {eyebrow ? (
            <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-heading text-[28px] leading-tight text-ink">{title}</h1>
        </div>
        {action}
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-6">{children}</div>
    </div>
  );
}
