export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1120px] items-center gap-12 px-5 pb-14 pt-12 sm:px-8 md:grid-cols-[300px_minmax(0,1fr)] md:pb-20 md:pt-16 lg:gap-20">
      <img
        src="/speaking-bm-hero.png?v=2"
        alt="Braxton McKee speaking"
        className="max-h-[360px] w-auto max-w-full object-contain"
      />

      <div>
        <p className="text-sm text-[var(--muted)]">Braxton McKee / Personal Blog</p>
        <h1 className="mt-7 font-serif text-5xl leading-tight text-ink sm:text-6xl">
          I wash cars.
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
          Mostly by making what’s next make sense.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Practical notes on car wash growth, customer behavior, technology, and the reality
          of the wash.
        </p>
      </div>
    </section>
  );
}
