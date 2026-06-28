type TopicCardProps = {
  title: string;
  description: string;
};

export function TopicCard({ title, description }: TopicCardProps) {
  return (
    <article className="border-t border-[var(--line)] py-6 md:grid md:grid-cols-[0.34fr_0.66fr] md:gap-10">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-lg leading-8 text-[var(--muted)] md:mt-0">{description}</p>
    </article>
  );
}
