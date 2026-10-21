export default function RoadmapSection() {
  const steps = [
    {
      num: "01",
      title: "Foundations",
      desc: "Study machine learning, training data, model predictions, and evaluation.",
    },
    {
      num: "02",
      title: "Position Representation",
      desc: "Explore how chess positions and FEN can be represented for a neural network.",
    },
    {
      num: "03",
      title: "Initial Training Experiments",
      desc: "Develop a small model and investigate basic position and move prediction tasks.",
    },
    {
      num: "04",
      title: "Evaluation and Improvement",
      desc: "Test legality, generalization, failure cases, and playing strength.",
    },
    {
      num: "05",
      title: "Longer-Term Research",
      desc: "Investigate stronger play, learned strategic representations, and meaningful decision explanations.",
    },
  ];

  return (
    <section className="py-20 md:py-24 border-t border-[#273134]" id="roadmap" aria-labelledby="r-h">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[760px]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#46d3c2] mb-4 block">
            Planned research
          </span>
          <h2
            id="r-h"
            className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#e8ebe9] leading-tight"
          >
            How the research may progress
          </h2>
          <p className="mt-5 text-[#9eabaa] text-base sm:text-lg leading-relaxed">
            This is a plan, not a record of finished milestones. It will change as experiments show what works.
          </p>
        </div>

        <ol className="mt-14 relative list-none m-0 p-0 before:content-[''] before:absolute before:left-5 sm:before:left-[23px] before:top-2 before:bottom-2 before:border-l before:border-dashed before:border-[#364246]">
          {steps.map((step, idx) => (
            <li
              key={idx}
              className={`relative pl-16 sm:pl-20 ${idx !== steps.length - 1 ? "pb-10 sm:pb-12" : "pb-0"}`}
            >
              <span
                className="absolute left-0 -top-1 w-10 h-10 sm:w-12 sm:h-12 border border-dashed border-[#2b8f84] rounded-full bg-[#101416] grid place-items-center font-mono text-sm sm:text-base text-[#46d3c2]"
                aria-hidden="true"
              >
                {step.num}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#e8ebe9] font-medium mb-2">
                {step.title}
              </h3>
              <p className="text-[#9eabaa] text-sm sm:text-base leading-relaxed max-w-[38em] m-0">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>

        <span className="inline-block mt-10 font-mono text-xs text-[#e8ebe9] border border-dashed border-[#2b8f84] px-3.5 py-1.5 rounded">
          Planned research. Nothing above is complete.
        </span>
      </div>
    </section>
  );
}
