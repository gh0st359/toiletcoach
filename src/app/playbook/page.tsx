"use client";

import { Gate } from "@/components/gate";
import { PlaybookListScreen } from "@/components/playbook-screen";

export default function PlaybookPage() {
  return (
    <Gate>
      <PlaybookListScreen />
    </Gate>
  );
}
