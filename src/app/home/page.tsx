"use client";

import { Gate } from "@/components/gate";
import { HomeScreen } from "@/components/home-screen";

export default function HomePage() {
  return (
    <Gate>
      <HomeScreen />
    </Gate>
  );
}
