"use client";

import { Suspense } from "react";
import { SkillDetailModalContent } from "./skill-detail-modal-content";

function SkillDetailModalSkeleton() {
  return null;
}

export function SkillDetailModal() {
  return (
    <Suspense fallback={<SkillDetailModalSkeleton />}>
      <SkillDetailModalContent />
    </Suspense>
  );
}