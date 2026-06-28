import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "blue";
  external?: boolean;
};

const styles = {
  dark: "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink",
  light: "border-[var(--line)] bg-transparent text-ink hover:border-ink",
  blue: "border-white/25 bg-white text-[var(--wash)] hover:bg-transparent hover:text-white",
};

export function ButtonLink({ href, children, variant = "light", external }: ButtonLinkProps) {
  const className = `focus-ring inline-flex min-h-11 items-center justify-center border px-5 py-3 text-sm font-semibold transition ${styles[variant]}`;

  if (external) {
    return (
      <a href={href} className={className} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
