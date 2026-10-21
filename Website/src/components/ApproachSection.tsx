export default function ApproachSection() {
  const pipeline = [
    { title: "Chess position", desc: "A board state, written for example in FEN." },
    { title: "Model input", desc: "The position encoded so a network can read it." },
    { title: "Learned representation", desc: "What the network builds internally during training." },
    { title: "Move prediction", desc: "The model's proposed move for the position." },
    { title: "Evaluation", desc: "Tests of legality, generalization and strength." },
  ];

  const concepts = [
    {
      term: "Neural networks",
      def: "Models that learn patterns from examples instead of following hand-written rules.",
    },
    {
      term: "Machine learning",
      def: "The study of improving a system's predictions by training it on data.",
    },
    {
      term: "Position representation",
      def: "How a board, its pieces and the rules around it are turned into numbers a model can use.",
    },
    {
      term: "FEN",
      def: "A compact text notation that records where every piece stands, whose turn it is, and special rights such as castling.",
    },
    {
      term: "Training datasets",
      def: "Collections of positions with move-related labels the model can learn from.",
    },
    {
      term: "Move prediction",
      def: "Given a position, predicting a move, and checking whether it is legal.",
    },
    {
      term: "Experimental evaluation",
      def: "Repeatable tests that separate real generalization from memorizing the training data.",
    },
    {
      term: "Role of existing tools",
      def: "Chess libraries and engines may help generate data and check results. The central question is what the model itself learns.",
    },
  ];

  return (
    <section className="py-20 md:py-24 border-t border-[#273134]" id="approach" aria-labelledby="a-h">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[760px]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#46d3c2] mb-4 block">
            Technical direction
          </span>
          <h2
            id="a-h"
            className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#e8ebe9] leading-tight"
          >
            From a position on the board to a move prediction
          </h2>
          <p className="mt-5 text-[#9eabaa] text-base sm:text-lg leading-relaxed">
            The model, data and training method are all still open decisions. This is the general shape
            of the questions being explored.
          </p>
        </div>

        {/* 5-step Pipeline Flow */}
        <div
          className="grid grid-cols-1 md:grid-cols-5 mt-14 border border-[#273134] rounded-lg bg-[#151b1e] divide-y md:divide-y-0 md:divide-x divide-[#273134] overflow-hidden"
          role="list"
        >
          {pipeline.map((step, idx) => (
            <div key={idx} className="relative p-6 sm:p-7 flex flex-col justify-between" role="listitem">
              <div>
                <b className="font-serif font-medium text-lg text-[#e8ebe9] block mb-2">
                  {step.title}
                </b>
                <span className="text-sm text-[#9eabaa] block leading-relaxed">{step.desc}</span>
              </div>
              <span className="font-mono text-xs text-[#2b8f84] mt-5 block">Step 0{idx + 1}</span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-[#9eabaa] mt-4 max-w-[50em] leading-relaxed">
          A conceptual illustration of the research direction. It is not a description of a finalized
          architecture. No specific model type, size or training pipeline has been chosen.
        </p>

        {/* Concepts Definition List */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0 mt-14">
          {concepts.map((concept, idx) => (
            <div key={idx} className="py-5 border-t border-[#273134]">
              <dt className="font-serif text-xl text-[#e8ebe9] mb-1 font-medium">{concept.term}</dt>
              <dd className="m-0 text-[#9eabaa] text-sm sm:text-base leading-relaxed">
                {concept.def}
              </dd>
            </div>
          ))}
        </dl>

        {/* Example FEN Callout */}
        <div className="mt-10 p-5 sm:p-6 bg-[#151b1e] border border-[#273134] rounded-lg">
          <span className="font-mono text-xs text-[#46d3c2] uppercase tracking-wider block mb-2 font-medium">
            Example of the notation
          </span>
          <code className="font-mono text-sm text-[#e8ebe9] block break-all py-1">
            rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
          </code>
          <p className="text-xs sm:text-sm text-[#9eabaa] mt-2">
            This FEN describes the standard starting position of a game. It is shown only to explain
            the format.
          </p>
        </div>
      </div>
    </section>
  );
}
