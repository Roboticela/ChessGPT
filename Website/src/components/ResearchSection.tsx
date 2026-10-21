export default function ResearchSection() {
  return (
    <section className="py-20 md:py-24 border-t border-[#273134]" id="research" aria-labelledby="q-h">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[760px]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#46d3c2] mb-4 block">
            The research question
          </span>
          <h2
            id="q-h"
            className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#e8ebe9] leading-tight"
          >
            Can AI Learn Chess Rather Than Just Calculate It?
          </h2>
          <p className="mt-5 text-[#9eabaa] text-base sm:text-lg leading-relaxed max-w-[40em]">
            Many traditional chess engines lean on explicit chess knowledge: hand-written evaluation,
            and search that looks ahead through many possible lines. ChessGPT asks a different question.
            How much understanding of positions, and how much of the skill of choosing a move, can a
            neural network pick up through training alone?
          </p>
          <p className="mt-4 text-[#9eabaa] text-base sm:text-lg leading-relaxed max-w-[40em]">
            Chess makes this hard. Moves must be legal, some rules are special, and good play needs
            long-term planning. That is part of what makes it worth studying.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 border border-[#273134] rounded-lg overflow-hidden shadow-xl">
          {/* Engine-based approaches */}
          <div className="p-8 md:p-9 bg-[#101416]">
            <span className="font-mono text-xs text-[#9eabaa] uppercase tracking-wider">
              Engine-based approaches
            </span>
            <h3 className="font-serif text-2xl text-[#e8ebe9] mt-4 mb-3 font-medium">
              Explicit algorithms
            </h3>
            <div className="my-6">
              <svg
                viewBox="0 0 320 150"
                className="w-full max-w-[340px] h-auto block"
                role="img"
                aria-label="A branching search tree: one position expands into several candidate lines, each scored by an evaluation."
              >
                <line stroke="#364246" strokeWidth="1" x1="160" y1="16" x2="60" y2="66" />
                <line stroke="#364246" strokeWidth="1" x1="60" y1="66" x2="30" y2="126" />
                <line stroke="#364246" strokeWidth="1" x1="60" y1="66" x2="90" y2="126" />
                <line stroke="#364246" strokeWidth="1" x1="160" y1="16" x2="160" y2="66" />
                <line stroke="#364246" strokeWidth="1" x1="160" y1="66" x2="130" y2="126" />
                <line stroke="#364246" strokeWidth="1" x1="160" y1="66" x2="190" y2="126" />
                <line stroke="#364246" strokeWidth="1" x1="160" y1="16" x2="260" y2="66" />
                <line stroke="#364246" strokeWidth="1" x1="260" y1="66" x2="230" y2="126" />
                <line stroke="#364246" strokeWidth="1" x1="260" y1="66" x2="290" y2="126" />
                <circle fill="#9eabaa" cx="160" cy="16" r="6" />
                <circle fill="#9eabaa" cx="60" cy="66" r="5" />
                <circle fill="#9eabaa" cx="160" cy="66" r="5" />
                <circle fill="#9eabaa" cx="260" cy="66" r="5" />
                <rect fill="none" stroke="#9eabaa" strokeWidth="1.2" x="24" y="120" width="12" height="12" rx="1.5" />
                <rect fill="none" stroke="#9eabaa" strokeWidth="1.2" x="84" y="120" width="12" height="12" rx="1.5" />
                <rect fill="none" stroke="#9eabaa" strokeWidth="1.2" x="124" y="120" width="12" height="12" rx="1.5" />
                <rect fill="none" stroke="#9eabaa" strokeWidth="1.2" x="184" y="120" width="12" height="12" rx="1.5" />
                <rect fill="none" stroke="#9eabaa" strokeWidth="1.2" x="224" y="120" width="12" height="12" rx="1.5" />
                <rect fill="none" stroke="#9eabaa" strokeWidth="1.2" x="284" y="120" width="12" height="12" rx="1.5" />
              </svg>
            </div>
            <p className="text-[#9eabaa] text-sm sm:text-base leading-relaxed">
              Written rules, search through possible lines, and evaluation functions guide the choice of move.
            </p>
          </div>

          {/* ChessGPT research direction */}
          <div className="p-8 md:p-9 bg-[#151b1e] border-t md:border-t-0 md:border-l border-[#273134]">
            <span className="font-mono text-xs text-[#46d3c2] uppercase tracking-wider">
              ChessGPT research direction
            </span>
            <h3 className="font-serif text-2xl text-[#e8ebe9] mt-4 mb-3 font-medium">
              Learned representations
            </h3>
            <div className="my-6">
              <svg
                viewBox="0 0 320 150"
                className="w-full max-w-[340px] h-auto block"
                role="img"
                aria-label="A layered neural network: inputs on the left, hidden layers in the middle, outputs on the right."
              >
                {/* Layer 1 to 2 connections */}
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="20.0" x2="120" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="20.0" x2="120" y2="47.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="20.0" x2="120" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="20.0" x2="120" y2="102.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="20.0" x2="120" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="56.7" x2="120" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="56.7" x2="120" y2="47.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="56.7" x2="120" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="56.7" x2="120" y2="102.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="56.7" x2="120" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="93.3" x2="120" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="93.3" x2="120" y2="47.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="93.3" x2="120" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="93.3" x2="120" y2="102.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="93.3" x2="120" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="130.0" x2="120" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="130.0" x2="120" y2="47.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="130.0" x2="120" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="130.0" x2="120" y2="102.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="40" y1="130.0" x2="120" y2="130.0" />

                {/* Layer 2 to 3 connections */}
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="20.0" x2="200" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="20.0" x2="200" y2="47.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="20.0" x2="200" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="20.0" x2="200" y2="102.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="20.0" x2="200" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="47.5" x2="200" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="47.5" x2="200" y2="47.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="47.5" x2="200" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="47.5" x2="200" y2="102.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="47.5" x2="200" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="75.0" x2="200" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="75.0" x2="200" y2="47.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="75.0" x2="200" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="75.0" x2="200" y2="102.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="75.0" x2="200" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="102.5" x2="200" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="102.5" x2="200" y2="47.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="102.5" x2="200" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="102.5" x2="200" y2="102.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="102.5" x2="200" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="130.0" x2="200" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="130.0" x2="200" y2="47.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="130.0" x2="200" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="130.0" x2="200" y2="102.5" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="120" y1="130.0" x2="200" y2="130.0" />

                {/* Layer 3 to output connections */}
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="20.0" x2="280" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="20.0" x2="280" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="20.0" x2="280" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="47.5" x2="280" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="47.5" x2="280" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="47.5" x2="280" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="75.0" x2="280" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="75.0" x2="280" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="75.0" x2="280" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="102.5" x2="280" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="102.5" x2="280" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="102.5" x2="280" y2="130.0" />

                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="130.0" x2="280" y2="20.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="130.0" x2="280" y2="75.0" />
                <line stroke="rgba(70,211,194,0.28)" strokeWidth="1" x1="200" y1="130.0" x2="280" y2="130.0" />

                {/* Nodes */}
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="40" cy="20.0" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="40" cy="56.7" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="40" cy="93.3" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="40" cy="130.0" r="5" />

                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="120" cy="20.0" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="120" cy="47.5" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="120" cy="75.0" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="120" cy="102.5" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="120" cy="130.0" r="5" />

                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="200" cy="20.0" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="200" cy="47.5" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="200" cy="75.0" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="200" cy="102.5" r="5" />
                <circle fill="#151b1e" stroke="#46d3c2" strokeWidth="1.2" cx="200" cy="130.0" r="5" />

                <circle fill="#46d3c2" cx="280" cy="20.0" r="5" />
                <circle fill="#46d3c2" cx="280" cy="75.0" r="5" />
                <circle fill="#46d3c2" cx="280" cy="130.0" r="5" />
              </svg>
            </div>
            <p className="text-[#9eabaa] text-sm sm:text-base leading-relaxed">
              Training data and a neural network's predictions are the focus. The aim is to see what the model learns by itself.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-[#9eabaa] border-l-2 border-[#364246] pl-4 max-w-[46em]">
          A simplified conceptual comparison. Many modern engines also use neural networks, and not
          every engine works this way. Nothing here suggests a neural network will outperform a
          conventional engine.
        </p>
      </div>
    </section>
  );
}
