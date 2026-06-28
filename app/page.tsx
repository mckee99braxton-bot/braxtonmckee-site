import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <StorySection />
    </PageShell>
  );
}
