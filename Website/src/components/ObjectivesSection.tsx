export default function ObjectivesSection() {
  const objectives = [
    {
      title: "Position Understanding",
      desc: "Investigate how the model can learn to interpret chess positions and the relationships between pieces and squares.",
      icon: (
        <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0" aria-hidden="true">
          <rect fill="#222c2f" x="10" y="10" width="20" height="20" />
          <rect fill="#222c2f" x="50" y="10" width="20" height="20" />
          <rect fill="#222c2f" x="30" y="30" width="20" height="20" />
          <rect fill="#222c2f" x="10" y="50" width="20" height="20" />
          <rect fill="#222c2f" x="50" y="50" width="20" height="20" />
          <rect fill="none" stroke="#364246" strokeWidth="1" x="10" y="10" width="60" height="60" />
          <circle fill="#46d3c2" cx="40" cy="40" r="6" />
          <circle fill="none" stroke="#46d3c2" strokeWidth="1.5" cx="40" cy="40" r="12" />
        </svg>
      ),
    },
    {
      title: "Legal Move Prediction",
      desc: "Study whether the model can learn to predict legal moves directly from position data, without an outside filter quietly correcting it.",
      icon: (
        <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0" aria-hidden="true">
          <rect fill="none" stroke="#364246" strokeWidth="1" x="10" y="10" width="60" height="60" />
          <path fill="none" stroke="#364246" strokeWidth="1" d="M30 10v60M50 10v60M10 30h60M10 50h60" />
          <path fill="none" stroke="#46d3c2" strokeWidth="1.5" d="M20 60V40H40" />
          <path fill="none" stroke="#46d3c2" strokeWidth="1.5" d="M40 40V30" />
          <circle fill="#46d3c2" cx="20" cy="60" r="4" />
          <circle fill="none" stroke="#46d3c2" strokeWidth="1.5" cx="40" cy="30" r="5" />
        </svg>
      ),
    },
    {
      title: "Learned Chess Patterns",
      desc: "Explore how training can produce useful representations of tactical and positional relationships.",
      icon: (
        <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0" aria-hidden="true">
          <rect fill="none" stroke="#364246" strokeWidth="1" x="10" y="10" width="60" height="60" />
          <path fill="none" stroke="#46d3c2" strokeWidth="1.5" d="M14 66L66 14" />
          <path fill="none" stroke="#364246" strokeWidth="1" d="M14 46L46 14M34 66L66 34" />
          <circle fill="#46d3c2" cx="14" cy="66" r="3.5" />
          <circle fill="#46d3c2" cx="40" cy="40" r="3.5" />
          <circle fill="#46d3c2" cx="66" cy="14" r="3.5" />
        </svg>
      ),
    },
    {
      title: "Playing Strength",
      desc: "Measure progress through repeatable tests and actual games as the project develops, and report only what the evidence supports.",
      icon: (
        <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0" aria-hidden="true">
          <path fill="none" stroke="#364246" strokeWidth="1" d="M10 70h60" />
          <path
            fill="none"
            stroke="#46d3c2"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            d="M14 70V54h14V54M28 54V40h14M42 40V26h14M56 26V12h12"
          />
        </svg>
      ),
    },
    {
      title: "Explainable Decisions",
      desc: "Investigate whether the model can communicate useful explanations for its choices.",
      icon: (
        <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0" aria-hidden="true">
          <rect fill="none" stroke="#46d3c2" strokeWidth="1.5" x="10" y="14" width="60" height="40" rx="4" />
          <path fill="none" stroke="#46d3c2" strokeWidth="1.5" d="M24 54l-4 12 14-12" />
          <path fill="none" stroke="#364246" strokeWidth="1" d="M20 26h40M20 34h32M20 42h24" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-24 border-t border-[#273134]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[760px]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#46d3c2] mb-4 block">
            Research objectives
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#e8ebe9] leading-tight">
            What the project sets out to investigate
          </h2>
          <p className="mt-5 text-[#9eabaa] text-base sm:text-lg leading-relaxed">
            These are goals and open questions, not finished features.
          </p>
        </div>

        <div className="mt-14 border-t border-[#273134] divide-y divide-[#273134]">
          {objectives.map((item, idx) => (
            <article
              key={idx}
              className="grid grid-cols-1 md:grid-cols-[96px_minmax(0,0.9fr)_minmax(0,1.3fr)] gap-6 md:gap-8 py-8 md:py-9 items-center hover:bg-[#151b1e]/30 transition-colors px-2 md:px-4 rounded-lg"
            >
              <div className="flex items-center justify-start">{item.icon}</div>
              <h3 className="font-serif text-2xl sm:text-[1.6rem] text-[#e8ebe9] font-medium m-0">
                {item.title}
              </h3>
              <p className="text-[#9eabaa] text-sm sm:text-base leading-relaxed m-0 max-w-[34em]">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
