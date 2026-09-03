"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Onboarding } from "@/components/onboarding";
import { useStore } from "@/lib/store";

export function Gate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { state, ready } = useStore();

  useEffect(() => {
    if (!ready) return;
    if (!state.onboardingComplete && pathname !== "/") {
      router.replace("/");
    }
    if (state.onboardingComplete && pathname === "/") {
      router.replace("/home");
    }
  }, [pathname, ready, router, state.onboardingComplete]);

  if (!ready) {
    return (
      <div className="app-grain flex min-h-dvh items-center justify-center">
        <p className="font-heading text-2xl text-ink">ToiletCoach</p>
      </div>
    );
  }

  if (!state.onboardingComplete) {
    return <Onboarding />;
  }

  return <AppShell>{children}</AppShell>;
}
