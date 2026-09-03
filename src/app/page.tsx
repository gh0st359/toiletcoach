"use client";

import { Gate } from "@/components/gate";
import { HomeScreen } from "@/components/home-screen";

export default function Page() {
  return (
    <Gate>
      <HomeScreen />
    </Gate>
  );
}
