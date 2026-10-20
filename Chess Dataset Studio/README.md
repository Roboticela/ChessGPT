# Chess Dataset Studio

Technical Specification · Proposal v0.1 · October 2026

Chess Dataset Studio is a proposed open-source application for designing, generating, validating, inspecting, and exporting chess datasets through a visual interface. Its first major use case will be generating training data for ChessGPT, while remaining useful to other chess researchers and developers.

The initial configuration is:

## Custom Chess Dataset

Proposed generation profile

Not implemented

Dataset type

Custom

Piece configuration

Custom

Target size

100,000 examples

Export format

JSONL

Required label

All legal moves for each generated position

A crucial distinction: this is a specification for the dataset-generation software, not a claim that the generator exists or that ChessGPT has learned chess. The software may use established chess libraries to generate and validate training data even if the eventual ChessGPT model is intended to learn chess representations and move legality through neural training.

## 1. Goals and scope

### Primary goals

1. Let users construct custom chess datasets without writing code.
2. Generate up to a configured target number of position examples.
3. Support customizable piece combinations and position constraints.
4. associate each accepted position with its complete legal-move set.
5. Export reproducible datasets in JSONL.
6. Validate, inspect, and summarize generated data before export.
7. Keep the core generation engine reusable independently of the UI.

### Non-goals for the first version

- Training a chess-playing neural network.
- Guaranteeing strong move selection or GM-level play.
- Automatically producing objectively best moves without a specified evaluation method.
- Exhaustively enumerating every possible legal chess position.
- Requiring cloud infrastructure or paid accounts.

The first release should generate a clearly defined dataset reliably before trying to become a universal chess research laboratory.

## 2. Proposed system architecture

The application should use a modular architecture: one generation engine, several supporting modules, and a UI that communicates with the engine through a defined interface.

User interface

Dataset builder · Board inspector · Progress · Export

Dataset orchestration layer

Configuration · Job queue · Checkpoints · Cancellation

Position generator

Sampling and composition

Validation engine

Position checks and legal moves

Dataset writer

JSONL and metadata

Statistics

Counts, duplicates, distributions

JSONL dataset + manifest

Exported locally, with generation settings and validation report

### Module responsibilities

| Module                  | Responsibility                                           |
| ----------------------- | -------------------------------------------------------- |
| UI                      | Collect settings and display results                     |
| Configuration           | Validate user options before starting                    |
| Position generator      | Produce candidate positions matching the selected rules  |
| Chess rules adapter     | Obtain legal moves and check chess-specific conditions   |
| Dataset validator       | Reject invalid records and detect duplicates             |
| Writer/exporter         | Write records incrementally to JSONL                     |
| Job manager             | Track progress, pause where supported, resume, or cancel |
| Manifest and statistics | Record reproducibility details and summarize the dataset |

Important architecture decision: keep the chess rules implementation behind an adapter interface. The initial version can use a reliable chess library, while other implementations could be added later. That way, the UI and dataset format do not depend on a particular library.

## 3. Custom dataset configuration

The custom configuration should be a collection of explicit settings, not an opaque “advanced mode” where every checkbox mysteriously changes three other things.

### 3.1 Generation settings

| Setting                    | Proposed default                        |
| -------------------------- | --------------------------------------- |
| Target examples            | 100,000                                 |
| Dataset type               | Custom position dataset                 |
| Piece setup                | Custom                                  |
| Required labels            | All legal moves                         |
| Export                     | JSONL                                   |
| Position uniqueness        | Unique positions                        |
| Random seed                | User-defined or automatically generated |
| Output                     | Local file or directory                 |
| Duplicate handling         | Reject duplicates                       |
| Invalid candidate handling | Reject and count                        |
| Generation limit           | Configurable candidate or time limit    |

The uniqueness definition must be configurable. Two records may represent the same board layout but differ in side to move, castling rights, or en-passant availability. Those differences can change the legal moves, so the default identity should include the complete position state, not just the visible pieces.

### 3.2 Custom piece configuration

The UI should let users configure pieces by color and type.

### Example configuration editor

Illustrative only. No generation is performed here.

| Piece  | White | Black |
| ------ | ----- | ----- |
| King   | 1     | 1     |
| Queen  | 0–1   | 0–1   |
| Rook   | 0–2   | 0–2   |
| Bishop | 0–2   | 0–2   |
| Knight | 0–2   | 0–2   |
| Pawn   | 0–8   | 0–8   |

The ranges are example limits, not universal rules. Custom variants or promoted-piece compositions may require different limits.

Users should be able to select:

- Exact piece counts or allowed ranges.
- Whether both kings are mandatory.
- Whether pawns may occupy their starting ranks.
- Whether promoted-piece configurations are permitted.
- Whether positions must be reachable from a legal game.
- Whether positions in check, checkmate, or stalemate are included.
- Side to move and optional castling or en-passant conditions.
- Maximum total pieces and other user-defined constraints.

### 3.3 Two different position-generation modes

This distinction is fundamental.

Mode A: Reachable positions

Start from a legal chess position and apply legal moves. Every generated position comes from a valid move sequence. Piece-composition constraints can filter the resulting positions.

Mode B: Custom compositions

Place pieces according to a custom configuration, then validate the resulting position against the selected rules. Some arrangements may satisfy basic board constraints without being reachable in an ordinary game.

The application must label these modes honestly. A position that passes basic validity checks is not automatically a position that could have arisen through legal play.

For ChessGPT research, both modes can be useful, but they answer different questions.

## 4. Dataset schema

JSONL is a sensible first export format because each line is an independent JSON object. It can be streamed, processed in chunks, and used without loading the whole dataset into memory.

### 4.1 Position record

Proposed schema version: `1.0`.

```
{
  "schema_version": "1.0",
  "example_id": "pos_000001",
  "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  "labels": {
    "legal_moves": [
      "a2a3",
      "a2a4",
      "b2b3",
      "b2b4"
    ]
  }
}
```

This is an abbreviated illustration, not a complete record of all legal moves from the starting position. Actual records must include the entire legal-move list generated for that position.

Recommended field definitions:

| Field                | Type             | Meaning                                            |
| -------------------- | ---------------- | -------------------------------------------------- |
| `schema_version`     | String           | Dataset record schema version                      |
| `example_id`         | String           | Stable ID within the dataset                       |
| `fen`                | String           | Complete FEN position                              |
| `labels.legal_moves` | Array of strings | Every legal move for the position, in UCI notation |

Use complete FEN, including side to move, castling rights, en-passant target, halfmove clock, and fullmove number. Even when a particular task doesn't use every field, retaining them prevents unnecessary loss of information.

### 4.2 Move notation

Use UCI-style move strings as the default because they are compact and widely supported.

Examples:

- Ordinary move: `e2e4`
- Promotion: `e7e8q`
- Castling: represented by the king's source and destination squares, according to the selected chess rules implementation.

If the project later supports chess variants, each variant must define its own move representation and validation rules. Don't silently apply standard chess assumptions to a variant.

### 4.3 Dataset manifest

Alongside the JSONL file, export a manifest describing how it was generated.

```
{
  "dataset_name": "custom_legal_moves",
  "schema_version": "1.0",
  "generator_version": "0.1.0",
  "target_examples": 100000,
  "actual_examples": 100000,
  "export_format": "jsonl",
  "labels": ["legal_moves"],
  "position_mode": "reachable",
  "unique_positions": true,
  "random_seed": 42,
  "validation_status": "passed"
}
```

These values illustrate the proposed format. `actual_examples`, version numbers, and validation status must be filled from the real generation run, never hard-coded to make the report look successful.

The manifest should also record the chess library and version, generation constraints, rejected candidate counts, duplicate counts, and relevant licensing information.

## 5. Generation algorithms

The generator should support multiple strategies behind one interface. Customization should change configuration, not require users to edit source code.

### Strategy 1: Legal-game sampling

1. Start from the standard initial position.
2. Choose a legal move using the configured sampling policy.
3. Apply the move and inspect the resulting position.
4. Check whether it satisfies the user's piece and position constraints.
5. If accepted, compute all legal moves and create the dataset record.
6. Continue until the target number of unique examples is reached or a configured limit is hit.

This is the most straightforward first strategy for positions reachable from a standard game. However, random legal moves don't automatically produce a representative dataset. Naive random play can overproduce certain kinds of positions and underproduce others.

Possible sampling policies include uniform random legal moves, random game trajectories, targeted sampling by material or game phase, and weighted sampling with documented weights.

### Strategy 2: Custom position construction

1. Build a candidate board from the user's piece-count and placement constraints.
2. Assign side to move and applicable position-state fields.
3. Validate piece counts, king safety, pawn restrictions, and other configured rules.
4. Apply reachability checks if the user selected reachable positions.
5. Calculate the complete legal-move list for accepted positions.
6. Deduplicate and serialize the resulting record.

Arbitrary placement can generate many invalid positions, so rejection sampling may become inefficient for restrictive configurations. The implementation should track acceptance rates and warn users when their constraints make the target impractical.

A future optimized generator could construct positions under constraints instead of repeatedly generating candidates that will be rejected.

### Strategy 3: Specialized position sampling

Later versions could offer targeted datasets for:

- Check and check-evasion positions.
- Endgames and low-material positions.
- Positions containing selected piece combinations.
- Promotion opportunities.
- Castling-rights scenarios.
- Positions with many or few legal moves.
- Positions generated from user-supplied FEN files.

Each strategy should report its sampling method. A dataset of 100,000 examples is not necessarily a balanced or representative dataset simply because it contains 100,000 rows.

### 5.1 Proposed generation pipeline

1. Load configuration

Validate settings and compatibility

2. Generate candidate

Use the selected sampling strategy

3. Validate position

Apply the selected chess rules

4. Deduplicate

Check canonical position identity

5. Generate labels

Calculate every legal move

6. Write record

Append valid JSONL record

7. Finalize dataset

Verify counts and create manifest

### 5.2 Handling the target of 100,000 examples

The system should distinguish three values:

- Target: how many examples the user requested.
- Accepted: how many valid, unique examples have been written.
- Attempted: how many candidate positions were examined.

The generator should stop when the accepted count reaches the target, or report an incomplete dataset when the attempt or time limit is reached. It must never silently duplicate records to fill the target.

Generation should be incremental, with periodic checkpoints. A crash shouldn't force the user to discard hours of work or regenerate everything from scratch.

## 6. Validation and quality assurance

Validation should occur at several levels rather than treating “the JSON parses” as proof that the dataset is correct.

| Level             | Checks                                                                 |
| ----------------- | ---------------------------------------------------------------------- |
| Configuration     | Valid counts, compatible settings, valid output path                   |
| Position          | Valid board representation, king constraints, pawn rules, side to move |
| Reachability      | Legal move history when reachable positions are required               |
| Labels            | Every listed move is legal; no legal moves are missing                 |
| Uniqueness        | No duplicate canonical position identities                             |
| Serialization     | Every line is valid JSON matching the schema                           |
| Dataset integrity | Correct counts, complete output, consistent manifest                   |

### Critical checks

Legal-move completeness: The label generator must produce the complete set of legal moves, not merely a list of moves that happen to be legal. Validation should independently compare the generated label set against the chess rules adapter's legal-move set.

Terminal positions: Checkmate and stalemate positions have zero legal moves. They can be valid examples with an empty `legal_moves` array, but the user should be able to include or exclude them explicitly.

Draw rules: Positions associated with repetition or move-count draws require care because some draw conditions depend on game history. A FEN alone does not preserve the full repetition history. The UI should distinguish board-state validity from game-history-dependent rules.

Determinism: Given the same generator version, compatible dependencies, configuration, and random seed, the generator should reproduce the same dataset where the algorithm promises deterministic output.

No silent repair: If a position is invalid, the default behavior should reject it and record why. Automatically altering a position to make it valid can change the intended data distribution.

### Test suite

The project should include:

- Unit tests for configuration and schema validation.
- Known-position tests for legal moves, castling, en passant, and promotion.
- Tests for checkmate and stalemate.
- Duplicate-detection tests.
- Round-trip tests for JSONL export and import.
- Reproducibility tests using fixed seeds.
- Stress tests for large generation jobs.
- Property-based tests comparing generated legal moves against a trusted implementation.

A successful export should mean the dataset passed its configured checks, not merely that a file was created.

## 7. UI and user experience

The application should feel like a visual research tool, not a configuration file wearing a nice coat.

### 7.1 Main application layout

## Chess Dataset Studio

Local workspace · Draft configuration

### Create dataset

Dataset type

Custom positions

Piece setup

Custom composition

Target size

100,000 examples

Export format

JSONL

Required labels

1 selected

All legal moves

Complete move set for each position

Ready to configure

Define piece constraints and position-generation rules before starting a job.

Static interface mockup for the proposed design. No generation controls are connected to a real engine.

### 7.2 Main screens

[Download | En Croissant](https://images.openai.com/static-rsc-4/HzI1uheQfpkiEf7CTly111ctTzLK-GHb14CLOli3tu3reXlZUABQdLNxCqNVSjS4EN91buDA_8xKsABStvJ9VhseLiO_OcF2t0X2W6u4hXg7EDQmqT08XQBxFJbw8OXgQcxa5dzBi3sdSpxArrtQklRkaJRAJEsLxE7Xdh6yfRk?purpose=inline)

A. Dataset builder

A guided configuration flow for dataset type, piece constraints, position mode, labels, sampling, and export. Show incompatible settings immediately.

[Chess Analysis Tool for Chess.com | Chess VIP](https://images.openai.com/static-rsc-4/D22TkzkBPFCk_3a7yNDFO_MvqBSyjzCdEaYAUmVv7x7RblHr172ihhHytYYavKSUru7LsgrAXLt3pYDe4uYVDf_8RrJTrS-6vBMx8OIvqlzRRIIzSYLTaX8xPkI11yTmc9RZv3g_BhZzNGxSRKiG7pXPCFct_qUE4ETE2J5Mn2U?purpose=inline)

B. Position inspector

Display the board, FEN, side to move, legal moves, and validation results. Selecting a move should highlight its source and destination squares.

[Tonic.ai: Synthetic Test Data Generation for Software and AI Engineers](https://images.openai.com/static-rsc-4/habw7TX5xpyLJMXCqrCqc04O5N7ijiZ_eJ9CGdCg7eSArkR-cXQAt6T-RGmLJJvg7HAc78lELA7KUXdI6-BSNmGE9hRjngl1KdUMeWDRFzsH08LmOy8841ZUpv0N5Ho4CNMeraib4_CXkwzGwWKZbwlPZntaS_bz6d1hLcIgj4Y?purpose=inline)

C. Generation monitor

Show accepted examples, attempts, duplicates, rejection reasons, elapsed time, and estimated completion where a meaningful estimate is available.

[GitHub - openstatusHQ/data-table-filters: Faceted filters, sorting & infinite scroll for React data tables - shadcn/ui + TanStack Table · GitHub](https://images.openai.com/static-rsc-4/MyvdmXWyqfV8V1SHL_m2GGtW2wP6qMcITWE84f2Pw2fn-mmk46XP1FOa-aJjydqI-yLrY7L6BDyJQXpiwkIsFaAISuPOswFMA8Zq6BVlUGhTsJw0qs6sUbnDCS8mMwyWgb3zbrh-ca-bBir4ZAHVu9y75VaKpbN722xUAwNMSEk?purpose=inline)

D. Dataset explorer

Browse records, filter by piece counts or position properties, inspect individual labels, and preview a sample of the exported data.

These images are visual references for the proposed interface, not screenshots of a working application.

### 7.3 User workflow

The normal workflow should be:

1. Click Create dataset.
2. Choose a dataset template or custom configuration.
3. Configure pieces and position-generation rules.
4. Select labels and output format.
5. Review a configuration summary and estimated resource requirements.
6. Start generation.
7. Inspect progress and sample positions.
8. Run final validation.
9. Export the dataset and its manifest.

Advanced users should also be able to save, duplicate, import, and share configuration profiles.

## 8. Performance, storage, and reliability

The 100,000-example target is a reasonable initial benchmark, but actual runtime depends heavily on generation strategy, uniqueness constraints, and the complexity of validation.

Recommended requirements:

- Stream records to disk instead of holding the complete dataset in RAM.
- Use bounded batches for processing and validation.
- Provide a configurable output directory.
- Check available disk space before starting when possible.
- Write to a temporary output and finalize it after validation.
- Checkpoint accepted counts and random-generator state where supported.
- Resume interrupted jobs without silently duplicating records.
- Keep generation logs separate from the dataset itself.
- Allow cancellation without corrupting previously completed exports.

For the first release, a local application is sufficient. Cloud execution, multi-user collaboration, and distributed generation can wait until real users demonstrate a need for them.

## 9. Technology recommendations

Given your current TypeScript and JavaScript learning path, I would consider this stack:

| Layer                               | Proposed technology                                                       |
| ----------------------------------- | ------------------------------------------------------------------------- |
| UI                                  | React + TypeScript                                                        |
| Desktop option                      | Tauri, if native desktop packaging becomes worthwhile                     |
| Chessboard UI                       | A reusable chessboard component                                           |
| Generation engine                   | A separately testable module, potentially using a dedicated chess library |
| Configuration and schema validation | TypeScript types plus a runtime schema validator                          |
| Job persistence                     | JSON configuration and checkpoint files initially                         |
| Dataset output                      | Streaming JSONL writer                                                    |
| Automated tests                     | A TypeScript-compatible testing framework                                 |
| Version control                     | Git and GitHub                                                            |

This is a proposed stack, not a mandatory choice. The key requirement is that the generation engine remains independent of the visual interface. A future CLI, desktop app, or programmatic API should be able to reuse it.

## 10. Repository structure

A starting repository could look like this:

```
chess-dataset-studio/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── docs/
│   ├── architecture.md
│   ├── dataset-formats.md
│   ├── validation.md
│   └── sampling-methods.md
├── apps/
│   └── studio/
├── packages/
│   ├── dataset-engine/
│   ├── chess-adapter/
│   ├── validators/
│   ├── exporters/
│   └── schemas/
├── tests/
├── examples/
│   ├── configurations/
│   └── sample-datasets/
└── .gitignore
```

Keep generated datasets out of the repository by default. Commit small sample files, example configurations, and test fixtures instead. Large generated datasets can be distributed separately with their own manifests and licenses.

For the license, choose one deliberately based on whether you want commercial reuse, redistribution, or derivative works to be permitted. Also document the licenses and attribution requirements of any external libraries or source datasets.

## 11. Development roadmap

Phase 1: Define the contract

Foundation

Finalize configuration rules, position identity, JSONL schema, and validation semantics. Create representative test cases before building the interface.

Phase 2: Build the generation engine

Generate and validate positions, calculate complete legal-move labels, deduplicate records, and export a small test dataset.

Phase 3: Build the visual studio

Implement the custom configuration editor, interactive board, generation monitor, dataset preview, and JSONL export workflow.

Phase 4: Benchmark 100,000 examples

Measure runtime, memory, disk usage, acceptance rate, duplicate handling, and validation accuracy. Fix bottlenecks based on measurements.

Phase 5: Public release

Publish documentation, example configurations, reproducible test runs, contribution guidelines, and the selected license.

## 12. Acceptance criteria for the first usable release

The first release should not be considered complete until it can:

- Configure custom piece combinations without editing source code.
- Generate 100,000 accepted, unique examples when the chosen configuration permits it.
- Produce the complete legal-move set for every accepted position.
- Correctly handle promotions, castling, en passant, checkmate, and stalemate.
- Export valid JSONL and a truthful dataset manifest.
- Detect and report invalid candidates, duplicates, and incomplete generation.
- Resume supported interrupted jobs without corrupting the output.
- Preview records and inspect positions through a visual interface.
- Reproduce a deterministic test run with a fixed seed.
- Document the generation strategy and known limitations.

## Final recommendation

Build Chess Dataset Studio as a standalone, local-first open-source tool, with a reusable engine underneath the UI. Make custom position generation and legal-move labels the first fully supported workflow, and treat the 100,000-example run as a benchmark to measure rather than a performance promise.

The most important early decision is to define what counts as a valid position, what makes two positions duplicates, and whether positions must be reachable through legal play. Those choices shape the generator, the labels, the validation system, and the scientific meaning of the resulting dataset.

If you get those foundations right, the polished UI becomes a way for people to access a genuinely useful research tool, rather than a very attractive button that produces questionable data.