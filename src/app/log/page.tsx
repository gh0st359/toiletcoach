"use client";

import { Gate } from "@/components/gate";
import { LogScreen } from "@/components/log-screen";

export default function LogPage() {
  return (
    <Gate>
      <LogScreen />
    </Gate>
  );
}
