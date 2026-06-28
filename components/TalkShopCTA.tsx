import { ButtonLink } from "./ButtonLink";

const linkedInUrl = "https://www.linkedin.com/in/braxton-mckee-mba-b1a4a9228/";

export function TalkShopCTA() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
      <div className="bg-[var(--wash)] px-6 py-9 text-white sm:px-9 sm:py-10 lg:grid lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
        <div>
          <h2 className="font-serif text-4xl leading-tight">Want to talk shop?</h2>
        </div>
        <div className="mt-7 lg:mt-0">
          <p className="text-lg leading-8 text-white/90">
            If you work in car washing, think about car washing, build for car washing, or are
            just trying to make sense of where the industry is going, message me on LinkedIn.
          </p>
          <p className="mt-5 text-lg leading-8 text-white/90">
            I’m always up for a good conversation about operators, customers, memberships, churn,
            technology, and what actually works at the wash.
          </p>
          <div className="mt-8">
            <ButtonLink href={linkedInUrl} variant="blue" external>
              Message me on LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
