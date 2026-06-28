import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { TalkShopCTA } from "@/components/TalkShopCTA";

export const metadata: Metadata = {
  title: "My Journey | Braxton McKee",
  description:
    "A personal story about a career built inside car washing, from one local wash in Kentucky to operator reality, customer strategy, technology, and what comes next.",
  robots: {
    index: false,
    follow: false,
  },
};

const story = [
  "I did not set out to build a career in the car wash industry.",
  "I was 18, in school, and mostly looking for a better job than the one I had. Two weeks after leaving my first job, I was standing in the parking lot of a local car wash in Kentucky that I had never actually visited before. They had just started offering memberships, and I was one of the first people there trying to sell them.",
  "At the time, I thought I was learning how to sell a wash plan.",
  "Pretty quickly, I realized I was learning something bigger.",
  "Car washing looked simple from the outside. A car comes in dirty, leaves clean, and everybody moves on. But the more time I spent there, the more I saw a real business hiding in plain sight. It was customer behavior, operations, local marketing, pricing, trust, habit-building, and people all happening at once.",
  "That was the part that hooked me.",
  "Everything was immediate. You could stand near the pay station and hear the offer land or miss. You could watch a customer decide whether the membership made sense. You could see how small changes in language, signage, staffing, weather, speed, or trust changed the outcome.",
  "The tunnel told the truth fast.",
  "If something did not work on site, with real customers and real employees, it did not matter how good it sounded in a meeting.",
  "Since then, I have been fortunate to see the industry from a perspective I never could have planned. I started at one local wash in my small hometown in Kentucky. Over time, that path led me into marketing, membership growth, retention, CRM, customer strategy, product feedback, and conversations with some of the largest and most sophisticated operators in car washing.",
  "That range changed how I see the business.",
  "The site matters. The customer matters. The operator matters. The technology matters. The strategy matters. None of it works if those pieces do not connect in the real world.",
  "That is the thread that has followed me from the wash bay to the work I do now.",
  "Today, I work as Industry & Customer Strategy Lead at Rinsed, where I spend a lot of my time helping connect operator reality to customer strategy, technology, retention, product feedback, and the question I keep coming back to:",
  "Does this actually make sense at the wash?",
  "That question has become more important the longer I have been in the industry.",
  "Car washing has no shortage of ideas. New technology, new playbooks, new marketing strategies, new customer experiences, new reporting, new “best practices.” Some of that is good. The industry needs ambition. It needs fresh thinking. It needs people willing to question what has always been done.",
  "But a good idea still has to become a good car wash idea.",
  "It has to work in weather. It has to work with labor. It has to work with chemistry, equipment, POS limitations, customer expectations, and the people on site who have to run it.",
  "That last part matters more than most people realize.",
  "A general manager in this industry wears more hats than almost any role I have seen. They are expected to lead the team, protect the customer experience, manage throughput, handle complaints, watch chemistry, coach membership selling, troubleshoot equipment, understand the POS, keep labor in line, respond to weather, and still hit the number.",
  "So when a new idea, tool, campaign, or strategy gets added to the business, the question cannot just be, “Is this a good idea?”",
  "The better question is:",
  "Can this actually work inside the reality of the wash, with the people who have to run it?",
  "That is where I think a lot of time and money gets wasted. Not because people are not trying. Most of the time, they are. But too many ideas get parachuted into the industry without enough connection to how car washes actually operate.",
  "That connection is the work I keep coming back to.",
  "A campaign has to connect with the customer. A tool has to connect with the people expected to use it. A membership strategy has to connect with real habits. A product decision has to connect with operator reality. A growth plan has to connect with the site.",
  "That is what I mean when I say I wash cars.",
  "Mostly by making what’s next make sense.",
];

const emphasizedLines = new Set([
  "I did not set out to build a career in the car wash industry.",
  "Pretty quickly, I realized I was learning something bigger.",
  "That was the part that hooked me.",
  "The tunnel told the truth fast.",
  "Does this actually make sense at the wash?",
  "But a good idea still has to become a good car wash idea.",
  "Can this actually work inside the reality of the wash, with the people who have to run it?",
  "That is what I mean when I say I wash cars.",
  "Mostly by making what’s next make sense.",
]);

export default function JourneyPage() {
  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[1120px] px-5 pb-8 pt-16 sm:px-8 md:pt-24">
        <article className="max-w-[780px]">
          <h1 className="font-serif text-5xl leading-tight text-ink sm:text-6xl">
            My Journey
          </h1>

          <div className="story-copy mt-10 text-lg leading-8 text-ink">
            {story.slice(0, 5).map((paragraph) => (
              <p
                className={
                  emphasizedLines.has(paragraph)
                    ? "my-8 font-serif text-2xl leading-tight text-ink"
                    : undefined
                }
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}

            <figure className="my-10 max-w-sm">
              {/* Image 5: first day working at a car wash in 2017. */}
              <img
                src="/images/image-5-first-day-car-wash-2017.jpg?v=2"
                alt="Braxton McKee on his first day working at a car wash in 2017."
                className="w-full border border-[var(--line)] object-cover"
              />
              <figcaption className="mt-3 text-sm leading-6 text-[var(--muted)]">
                First day at the wash, 2017.
              </figcaption>
            </figure>

            {story.slice(5).map((paragraph) => (
              <p
                className={
                  emphasizedLines.has(paragraph)
                    ? "my-8 font-serif text-2xl leading-tight text-ink"
                    : undefined
                }
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
      <TalkShopCTA />
    </PageShell>
  );
}
