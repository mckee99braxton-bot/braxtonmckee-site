import Link from "next/link";

const linkedInUrl = "https://www.linkedin.com/in/braxton-mckee-mba-b1a4a9228/";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-6 px-5 py-6 text-sm text-ink sm:px-8">
      <Link href="/" className="focus-ring flex flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-3">
        <span className="font-semibold">Braxton McKee</span>
        <span className="text-xs text-[var(--muted)]">Personal Blog</span>
      </Link>
      <nav className="flex items-center gap-5 text-sm text-[var(--muted)]">
        <Link href="/writing" className="focus-ring hover:text-[var(--wash)]">
          Insights
        </Link>
        <a
          href={linkedInUrl}
          className="focus-ring hover:text-[var(--wash)]"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
