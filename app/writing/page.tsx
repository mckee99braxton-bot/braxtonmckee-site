import { PageShell } from "@/components/PageShell";
import { WritingPlaceholder } from "@/components/WritingPlaceholder";

export default function WritingPage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-[780px] px-5 py-20 sm:px-8 md:py-28">
        <h1 className="font-serif text-5xl leading-tight">Insights</h1>
        <div className="mt-12">
          <WritingPlaceholder showLinkedIn />
        </div>
      </section>
    </PageShell>
  );
}
