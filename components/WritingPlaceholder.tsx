import { ComingSoonCard } from "./ComingSoonCard";

export function WritingPlaceholder({ showLinkedIn = false }: { showLinkedIn?: boolean }) {
  return (
    <ComingSoonCard
      body="I’ll be adding essays and notes here on car wash growth, customer behavior, memberships, retention, technology, and what actually works at the wash."
      showLinkedIn={showLinkedIn}
    />
  );
}
