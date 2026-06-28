import { ButtonLink } from "./ButtonLink";

type ComingSoonCardProps = {
  title?: string;
  body: string;
  showLinkedIn?: boolean;
};

const linkedInUrl = "https://www.linkedin.com/in/braxton-mckee-mba-b1a4a9228/";

export function ComingSoonCard({ title = "Coming soon.", body, showLinkedIn }: ComingSoonCardProps) {
  return (
    <div className="border-t border-[var(--line)] pt-7">
      <h3 className="font-serif text-3xl leading-tight">{title}</h3>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">{body}</p>
      {showLinkedIn ? (
        <div className="mt-8">
          <ButtonLink href={linkedInUrl} external>
            Talk shop on LinkedIn
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
