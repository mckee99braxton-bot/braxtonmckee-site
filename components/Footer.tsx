import Link from "next/link";

const linkedInUrl = "https://www.linkedin.com/in/braxton-mckee-mba-b1a4a9228/";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1120px] border-t soft-divider px-5 py-8 sm:px-8">
      <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold">Braxton McKee</p>
          <p className="mt-1 text-[var(--muted)]">Making car washing make sense.</p>
          <p className="mt-3 text-xs text-[var(--muted)]">
            This is a personal project created entirely with AI and a little vibe coding.
          </p>
        </div>
        <nav className="flex gap-5 text-sm font-semibold text-[var(--muted)]">
          <Link className="focus-ring border-b border-transparent pb-1 hover:border-[var(--wash)] hover:text-[var(--wash)]" href="/writing">
            Insights
          </Link>
          <a
            className="focus-ring border-b border-transparent pb-1 hover:border-[var(--wash)] hover:text-[var(--wash)]"
            href={linkedInUrl}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
