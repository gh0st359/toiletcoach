"use client";

import { Gate } from "@/components/gate";
import { SettingsScreen } from "@/components/settings-screen";

export default function SettingsPage() {
  return (
    <Gate>
      <SettingsScreen />
    </Gate>
  );
}
