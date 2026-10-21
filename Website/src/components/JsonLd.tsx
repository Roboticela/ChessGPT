export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://chesslab.roboticela.com/models/chessgpt#website",
        "url": "https://chesslab.roboticela.com/models/chessgpt",
        "name": "ChessGPT: Teaching AI to Understand Chess",
        "description":
          "ChessGPT is an independent, experimental research project exploring whether a neural network can learn chess positions, predict legal moves, and develop chess-playing ability through learned representations.",
        "inLanguage": "en-US",
        "publisher": {
          "@type": "Organization",
          "name": "Roboticela",
          "url": "https://roboticela.com",
          "sameAs": [
            "https://github.com/roboticela",
            "https://github.com/Roboticela/ChessGPT"
          ]
        }
      },
      {
        "@type": "ResearchProject",
        "@id": "https://chesslab.roboticela.com/models/chessgpt#project",
        "name": "ChessGPT",
        "headline": "Teaching AI to Understand Chess",
        "description":
          "An independent, experimental research project investigating how artificial neural networks can learn chess positions, predict legal moves, and develop chess-playing ability through learned representations.",
        "url": "https://chesslab.roboticela.com/models/chessgpt",
        "funder": {
          "@type": "Organization",
          "name": "Roboticela",
          "url": "https://roboticela.com"
        },
        "creator": {
          "@type": "Person",
          "name": "Adeel Alam",
          "email": "adeel@roboticela.com"
        },
        "keywords": [
          "Chess AI",
          "ChessGPT",
          "Neural Networks",
          "Machine Learning Chess",
          "FEN",
          "Position Representation",
          "Roboticela",
          "Adeel Alam"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
