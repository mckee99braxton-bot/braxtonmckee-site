import { ButtonLink } from "./ButtonLink";

type ComingSoonCardProps = {
  title?: string;
  body: string;
  showLinkedIn?: boolean;
};

const linkedInUrl = "https://www.linkedin.com/in/braxton-mckee-mba-b1a4a9228/";

export function ComingSoonCard({ title = "Coming soon.", body, showLinkedIn }: ComingSoonCardProps) {
  return (
    <div className="border-t soft-divider pt-7">
      <h3 className="editorial-serif text-3xl font-semibold leading-tight text-ink">{title}</h3>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">{body}</p>
      {showLinkedIn ? (
        <div className="mt-8">
          <ButtonLink href={linkedInUrl} variant="blue" external>
            Talk shop on LinkedIn
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
