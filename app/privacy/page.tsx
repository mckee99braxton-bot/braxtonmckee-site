import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy | Braxton McKee",
  description:
    "A short privacy note about analytics and contact for Braxton McKee's personal blog.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-[780px] px-5 py-20 sm:px-8 md:py-28">
        <h1 className="display-type text-6xl leading-none text-ink sm:text-7xl">
          Privacy
        </h1>

        <div className="story-copy mt-10 text-lg leading-8 text-ink">
          <p>
            This site uses Google Analytics to understand site traffic and improve the
            website.
          </p>
          <p>
            Analytics may collect information like pages viewed, device or browser type,
            approximate location, referring site, and interactions.
          </p>
          <p>
            This site does not intentionally collect personal information through forms.
            Contact happens through LinkedIn.
          </p>
          <p>
            You can control cookies and tracking through your browser settings.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
