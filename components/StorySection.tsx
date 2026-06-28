const story = [
  "I wash cars.",
  "Mostly by making what’s next make sense.",
  "I didn’t set out to build a career in the car wash industry. I was 18, in school, and mostly just trying to find a better job than the one I had. I left my first job and started looking for something better.",
  "Two weeks later, I was standing in the parking lot of a local car wash I had never actually visited before. They had just started offering memberships, and I was one of the first people there trying to sell them.",
  "Pretty quickly, I realized I was learning something bigger.",
  "Car washing looked simple from the outside. A car comes in dirty, leaves clean, and everybody moves on. But the more time I spent there, the more I saw a real business hiding in plain sight — retail, operations, hospitality, local marketing, habit-building, behavioral economics, customer experience, and early subscription strategy all happening at once.",
  "At its core, it was a people business.",
  "That's what hooked me.",
  "Everything was immediate. You could stand near the pay station and hear the offer land or miss. You could watch a customer decide if the membership made sense. You could see how small changes in language, signage, staffing, weather, speed, or trust shifted outcomes. The tunnel told the truth fast. If an idea didn’t work on site, with real customers and employees, it didn’t matter how good it sounded in a meeting.",
  "Since then, I’ve been fortunate to see the industry from a perspective I never could have planned, starting at one local wash in my small hometown in Kentucky and eventually working alongside some of the largest and most sophisticated operators in car washing. That range has shaped how I see the business. The site matters. The customer matters. The operator matters. The technology matters. The strategy matters. And none of it works if those pieces do not connect in the real world.",
  "That perspective has kept me humble.",
  "The more I’ve seen, the more I realize the biggest challenge in this industry usually is not a lack of ideas. It is connection.",
  "Car washing has no shortage of new technology, new strategies, new playbooks, new marketing concepts, and new people trying to move the industry forward. Some of that is good. The industry needs ambition. It needs fresh thinking. It needs people willing to question what has always been done.",
  "But a good idea still has to become a good car wash idea. It has to survive weather, labor, chemistry, site leadership, POS limitations, customer expectations, and the 90-second window where the entire experience either makes sense or does not.",
  "It also has to work for the people on site.",
  "That is the part that gets underestimated. A general manager in this industry wears more hats than almost any role I have seen. They are expected to lead the team, protect the customer experience, manage throughput, handle complaints, watch chemistry, coach membership selling, troubleshoot equipment, understand the POS, keep labor in line, respond to weather, and still hit the number. So when a new idea, tool, campaign, or strategy gets added to the business, the question cannot just be, “Is this a good idea?”",
  "The better question is:",
  "Can this actually work inside the reality of the wash, with the people who have to run it?",
  "That is where a lot of time and money gets wasted.",
  "I would estimate the industry loses $15M+ a year on ideas that were parachuted in with good intentions but never connected to how car washes actually operate. New tools. New campaigns. New pricing models. New customer experiences. New reporting. New “best practices.” A lot of them could have been better, cheaper, or avoided entirely if someone stopped earlier and asked one simple question:",
  "Does this actually connect with the reality of the wash?",
  "That question has become the way I look at almost everything now. The site matters. The customer matters. The operator matters. The technology matters. The strategy matters. But none of it works if those pieces do not connect in the real world.",
  "That complexity keeps me here.",
  "So does the unknown.",
  "Car washing is still an ambitious industry, figuring itself out in real time. It has grown fast, but there’s still room to define what great looks like — better memberships, experiences, technology, operations, loyalty, and ways to connect what happens on site to the business.",
  "That’s the part I can’t get away from.",
  "I started close to the customer, the tunnel, and the daily reality of running a wash. Over time, my work moved into marketing, growth, retention, CRM, customer strategy, product feedback, and helping teams understand what operators are trying to solve. But the question stayed the same:",
  "Does this actually make sense in the real world?",
  "That’s the thread behind this site.",
  "I write about the car wash industry where operator reality, customer behavior, and new ideas meet. Membership growth. Retention. Churn. Pricing. Loyalty. Technology. Customer experience. Field execution. The messy middle between what sounds good and what works.",
  "I care about the future of this industry because of the opportunity still inside it. Car washing isn’t just about cleaner cars. It’s about habits, trust, value creation, and how the next generation of tools and strategy can help the best washes get better.",
  "This site is my place to make sense of that.",
  "Part random sticky notes. Part strategy. Part industry obsession.",
  "All of this complexity, just to deliver a clean, shiny, dry car.",
];

export function StorySection() {
  return (
    <section id="story" className="mx-auto w-full max-w-[1120px] px-5 pb-16 pt-8 sm:px-8 md:pb-24 md:pt-12">
      <article className="story-copy max-w-[740px] text-lg leading-8 text-ink">
        {story.map((item) => (
          <p key={item}>
            {item}
          </p>
        ))}
      </article>
    </section>
  );
}
