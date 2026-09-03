"use client";

import { use } from "react";
import { Gate } from "@/components/gate";
import { PlaybookDetailScreen } from "@/components/playbook-screen";

export default function PlaybookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return (
    <Gate>
      <PlaybookDetailScreen slug={slug} />
    </Gate>
  );
}
