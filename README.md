# Claude Certification Study

Open study notes and practice exams for Anthropic's Claude 101, Claude Platform 101 and Claude Code 101 courses — the three "101" courses on Anthropic Academy. Each course ends with its own quiz and certificate of completion on Anthropic's site; this repo is independent preparation material, not a replacement.

> **Not affiliated with, sponsored by or endorsed by Anthropic.** "Claude" is a trademark of Anthropic, PBC. Every practice question here is written from scratch, cites the Academy lesson it is based on, and is for study use only. For the real courses and certificates, visit [academy.claude.com](https://academy.claude.com/).

## The three tiers

| Tier | For | Prepares you for |
|---|---|---|
| **Basic** — [`basic/`](basic/) | Daily Claude user — chat, Projects, artifacts, skills, connectors | [Claude 101](https://academy.claude.com/courses/claude-101) |
| **Developer** — [`developer/`](developer/) | API builder — Messages API, tools, evals, MCP, agents | [Claude Platform 101](https://academy.claude.com/courses/claude-platform-101) |
| **Advanced** — [`advanced/`](advanced/) | Agentic coding — Claude Code, subagents, Skills, MCP in depth | [Claude Code 101](https://academy.claude.com/courses/claude-code-101) |

Each tier has three files:

- `notes.md` — study notes, one section per Academy lesson, written in plain English with the questions a student usually asks.
- `questions.json` — around 40 multiple-choice practice questions with an explanation for every answer.
- `cheat-sheet.md` — one page you can print.

## Practice exam

The practice exam itself is a single static page in [`exam/`](exam/) — `index.html`, `exam.css`, `exam.js`. It:

- Loads one tier's `questions.json`.
- Shuffles the questions, and the choices inside every question.
- Shows one question at a time with a count-up timer.
- Reveals the right answer and the explanation as soon as you pick one.
- Ends with your score, how long you took, and a full review.

No sign-in, no database, no tracking.

## Where this runs

The exam is embedded on two sites so anyone can take it in the browser:

- shoebhakim.com — [Certifications door](https://shoebhakim.com/claude-certifications/)
- ethanhakim.in — [Certifications section](https://ethanhakim.in/claude-certifications/)

The two sites load the questions.json files from this repo, mirrored into each site under `/claude-certifications/data/`.

## Found a wrong answer?

Open an issue or a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

- **Notes and questions** (`basic/`, `developer/`, `advanced/`, every `.md` and `.json` file): CC BY 4.0. Use them for your own study, teach from them, translate them; just link back.
- **Exam page code** (`exam/`): MIT.

Full licence texts in [LICENSE](LICENSE).

## Author

Written by [Adv Shoeb Hakim](https://shoebhakim.com) — advocate, long-time trainer of law enforcement, AML and digital-evidence professionals. Uses Claude every day; built these notes while studying for the three 101 certificates himself.
