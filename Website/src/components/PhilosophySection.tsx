export default function PhilosophySection() {
  const principles = [
    "Start small and establish measurable baselines.",
    "Test ideas rather than treating them as facts.",
    "Evaluate generalization, not just training accuracy.",
    "Document limitations and unsuccessful experiments.",
    "Expand the model and research scope when evidence justifies it.",
  ];

  return (
    <section className="py-20 md:py-24 border-t border-[#273134]" aria-labelledby="p-h">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="max-w-[540px]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#46d3c2] mb-4 block">
            Research philosophy
          </span>
          <h2
            id="p-h"
            className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#e8ebe9] leading-tight"
          >
            Built Through Experiments, Not Assumptions.
          </h2>
          <p className="mt-5 text-[#9eabaa] text-base sm:text-lg leading-relaxed max-w-[30em]">
            The project is meant to be a long, honest line of inquiry. Ideas are tested before they are
            believed, and the limits of the work are stated plainly.
          </p>
        </div>

        <ul className="list-none m-0 p-0 divide-y divide-[#273134] border-t border-b border-[#273134]">
          {principles.map((principle, idx) => (
            <li
              key={idx}
              className="grid grid-cols-[28px_1fr] gap-4 py-5 items-start text-[#e8ebe9] text-base sm:text-lg"
            >
              <svg
                viewBox="0 0 22 22"
                fill="none"
                stroke="#46d3c2"
                strokeWidth="1.8"
                className="w-5 h-5 mt-1 shrink-0"
                aria-hidden="true"
              >
                <path d="M3 11.5l5 5L19 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
