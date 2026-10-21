export default function AboutSection() {
  return (
    <section className="py-20 md:py-24 border-t border-[#273134]" id="about" aria-labelledby="ab-h">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
        {/* Story & Contact */}
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#46d3c2] mb-4 block">
            About the project
          </span>
          <h2
            id="ab-h"
            className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#e8ebe9] leading-tight"
          >
            An independent project driven by curiosity
          </h2>
          <p className="mt-6 text-[#e8ebe9] text-base sm:text-lg leading-relaxed max-w-[36em]">
            ChessGPT is being developed by Adeel Alam as an independent, experimental AI research
            project, associated with the broader Roboticela ecosystem.
          </p>
          <p className="mt-4 text-[#9eabaa] text-base sm:text-lg leading-relaxed max-w-[36em]">
            It grows out of self-directed learning: studying how machine learning works, running
            experiments, and taking on a hard question about what a neural network can learn from
            chess. The name is the project's own. ChessGPT is not an OpenAI product and has no
            connection to OpenAI.
          </p>
          <p className="mt-4 text-[#9eabaa] text-base sm:text-lg leading-relaxed max-w-[36em]">
            ChessLab is the intended future home for presenting models and research like this. It is a
            proposed platform and has not been built yet.
          </p>

          {/* Contact Details */}
          <div className="mt-10 pt-8 border-t border-[#273134] max-w-[36em]" id="contact">
            <h3 className="font-serif text-2xl text-[#e8ebe9] mb-3 font-medium">Get in touch</h3>
            <p className="text-[#9eabaa] text-sm sm:text-base mb-5">
              Questions, feedback, or interest in collaborating? Email is the best way to reach the
              project.
            </p>
            <ul className="list-none m-0 p-0 divide-y divide-[#273134]">
              <li className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 py-3 items-center text-sm sm:text-base">
                <span className="font-mono text-xs text-[#9eabaa]">Email</span>
                <a
                  href="mailto:adeel@roboticela.com"
                  className="text-[#46d3c2] hover:text-[#7be6d8] transition-colors break-all"
                >
                  adeel@roboticela.com
                </a>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 py-3 items-center text-sm sm:text-base">
                <span className="font-mono text-xs text-[#9eabaa]">Project repository</span>
                <a
                  href="https://github.com/Roboticela/ChessGPT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#46d3c2] hover:text-[#7be6d8] transition-colors break-all underline-offset-4 hover:underline"
                >
                  github.com/Roboticela/ChessGPT
                </a>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 py-3 items-center text-sm sm:text-base">
                <span className="font-mono text-xs text-[#9eabaa]">Roboticela on GitHub</span>
                <a
                  href="https://github.com/roboticela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#46d3c2] hover:text-[#7be6d8] transition-colors break-all underline-offset-4 hover:underline"
                >
                  github.com/roboticela
                </a>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 py-3 items-center text-sm sm:text-base">
                <span className="font-mono text-xs text-[#9eabaa]">Roboticela</span>
                <a
                  href="https://roboticela.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#46d3c2] hover:text-[#7be6d8] transition-colors break-all underline-offset-4 hover:underline"
                >
                  roboticela.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Live Status Card */}
        <aside
          className="border border-[#364246] rounded-lg bg-[#151b1e] overflow-hidden shadow-xl"
          id="status"
          aria-labelledby="st-h"
        >
          <header className="flex justify-between items-center px-6 py-4 border-b border-[#273134] font-mono text-xs text-[#9eabaa]">
            <span id="st-h" className="uppercase tracking-wider">
              Research status
            </span>
            <span className="inline-flex items-center gap-2 text-[#46d3c2]">
              <span className="w-2 h-2 rounded-full border border-[#46d3c2] animate-pulse"></span>
              Research in progress
            </span>
          </header>
          <dl className="m-0 divide-y divide-[#273134]">
            <div className="px-6 py-5">
              <dt className="font-mono text-xs text-[#9eabaa] uppercase tracking-wider mb-1">
                Current stage
              </dt>
              <dd className="m-0 text-lg text-[#e8ebe9] font-medium">Early Research</dd>
            </div>
            <div className="px-6 py-5">
              <dt className="font-mono text-xs text-[#9eabaa] uppercase tracking-wider mb-1">
                Focus
              </dt>
              <dd className="m-0 text-base sm:text-lg text-[#e8ebe9]">
                Machine-learning foundations and initial experiment planning
              </dd>
            </div>
            <div className="px-6 py-5">
              <dt className="font-mono text-xs text-[#9eabaa] uppercase tracking-wider mb-1">
                Next direction
              </dt>
              <dd className="m-0 text-base sm:text-lg text-[#e8ebe9]">
                Develop and evaluate the first working prototype
              </dd>
            </div>
          </dl>
          <footer className="px-6 py-4 border-t border-[#273134] text-xs text-[#9eabaa] bg-[#101416]/50">
            No model is currently training, and no results or benchmarks have been published.
          </footer>
        </aside>
      </div>
    </section>
  );
}
