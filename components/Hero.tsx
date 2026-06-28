export function Hero() {
  return (
    <section className="hero-surface mx-auto grid w-full max-w-[1120px] items-center gap-10 px-5 pb-14 pt-12 sm:px-8 md:grid-cols-[320px_minmax(0,1fr)] md:pb-20 md:pt-16 lg:gap-20">
      <div className="field-note absolute right-6 top-12 hidden lg:block">
        <span>Operator reality</span>
        <span>Customer behavior</span>
        <span>Technology</span>
        <span>Growth</span>
      </div>
      <div className="relative order-2 md:order-1">
        <img
          src="/speaking-bm-hero.png?v=2"
          alt="Braxton McKee speaking"
          className="relative z-10 max-h-[355px] w-auto max-w-full object-contain md:max-h-[390px]"
        />
      </div>

      <div className="order-1 md:order-2">
        <p className="text-sm font-semibold text-[var(--muted)]">Braxton McKee / Personal Blog</p>
        <h1 className="display-type mt-7 text-[4.8rem] text-ink sm:text-[6.5rem] md:text-[7.4rem]">
          I wash cars.
        </h1>
        <p className="editorial-serif mt-5 max-w-3xl text-2xl font-semibold leading-snug text-ink sm:text-3xl md:text-[2.25rem]">
          Mostly by making what’s <span className="wash-underline">next</span> make{" "}
          <span className="wash-underline">sense</span>.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Practical notes on car wash growth, customer behavior, technology, and the reality
          of the wash.
        </p>
        <p className="field-note mt-8 hidden md:block">
          <span>Does it work at the wash?</span>
        </p>
      </div>
    </section>
  );
}
