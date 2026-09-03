"use client";

import { Gate } from "@/components/gate";
import { SessionScreen } from "@/components/session-screen";

export default function SessionPage() {
  return (
    <Gate>
      <SessionScreen />
    </Gate>
  );
}
