"use client";

import { Suspense } from "react";
import { CoachScreen } from "@/components/coach-screen";
import { Gate } from "@/components/gate";

export default function CoachPage() {
  return (
    <Gate>
      <Suspense fallback={<div className="p-5 text-sm text-muted-foreground">Opening the stall...</div>}>
        <CoachScreen />
      </Suspense>
    </Gate>
  );
}
