import { ButtonLink } from "./ButtonLink";

const linkedInUrl = "https://www.linkedin.com/in/braxton-mckee-mba-b1a4a9228/";

export function ArticlePlaceholder() {
  return (
    <section className="mx-auto w-full max-w-[760px] px-5 py-20 sm:px-8 md:py-28">
      <h1 className="font-serif text-5xl leading-tight">Coming soon.</h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        Essays and notes will live here soon.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/writing" variant="dark">
          Back to Insights
        </ButtonLink>
        <ButtonLink href={linkedInUrl} external>
          Talk shop on LinkedIn
        </ButtonLink>
      </div>
    </section>
  );
}
