# Basic tier — study notes for Claude 101

These notes cover every lesson of Anthropic Academy's **[Claude 101](https://academy.claude.com/courses/claude-101)** course, in the same order. Study them, then take the practice exam. When you can score 90% on the practice exam two runs in a row without looking back, you are ready for the real course quiz on Academy.

---

## 1. What is Claude?

- Claude is an AI assistant made by Anthropic, trained to be a thinking partner for life and work. It is not a search engine.
- Claude's training follows **Constitutional AI**: a set of rules meant to keep Claude safe, honest, and refuse to help with illegal or harmful things.
- Claude is **steerable**: you can set its tone, personality, and style, and it will follow your direction more than most AI assistants.
- Claude is available to every plan — Free, Pro, Max, Ultra, Team, Enterprise — on **web, desktop and mobile apps**. Chats, projects, memory and preferences sync across all your devices when you sign in.
- Where to meet Claude:
  - **Claude.ai** (web, desktop, mobile) — the main app for most people.
  - **Claude Code** — agentic coding tool for developers that works on files and runs commands.
  - **Claude Tag** — Claude inside Slack, replying when you @mention it.
  - **Claude Design** — build interactive prototypes from a description, sketch or screenshot.
  - **Claude for Microsoft 365** — a sidebar inside Excel, PowerPoint, Word and Outlook.
- Claude's **context window** is about 200,000 tokens (about 500 pages) by default, and goes up to about 1 million tokens on paid plans with the right models.

## 2. Your first conversation with Claude

- A good prompt has three parts:
  1. **Set the stage** — who you are, what you are trying to do, any background Claude needs.
  2. **Define the task** — what you want Claude to actually do (write, analyse, build, decide).
  3. **Specify the rules** — tone, length, format, examples.
- Attach files as context. Claude can read **PDF, DOCX, CSV, TXT, PNG, JPEG** and more. Charts, graphs and images inside a PDF are read, not just the text.
- Models change over time, and you can switch model in the middle of a chat. Rule of thumb:
  - **Opus** — your hardest and longest-running work.
  - **Sonnet** — the default day-to-day model.
  - **Haiku** — the fastest and cheapest, for simple tasks.
- **Effort / Extended thinking** — the newer models always think; the setting is how much effort to use. Lower effort for a faster answer.
- To change tone or length, tell Claude plainly: "Make this half as long", "More formal", "Use bullet points under short headings".
- To edit one of your past prompts, click the **pencil** on your message, change it, and resubmit — Claude replies again from the edited prompt.

## 3. Getting better results

- The five most common problems and the fix for each:
  1. **Too generic** → add who it is for and what you are trying to achieve.
  2. **Too long or too short** → say the length out loud ("two paragraphs", "under 100 words", "full report").
  3. **Wrong format** → show an example or spell the structure out ("H2 headings, bullet lists").
  4. **Confident but wrong** → verify important facts yourself, or ask Claude to cite sources and use web search.
  5. **Tone not right** → ask for the tone you want, or paste an example.
- Keep the **iteration mindset**: your first prompt is a starting point, not a one-shot. Give specific feedback ("cut paragraph 1", "stronger conclusion"), and start a new chat when a chat has drifted too far.
- **AI Fluency** is the 4D Framework: **Delegation, Description, Discernment, Diligence**. The prompt frame in lesson 2 is the Description bit.
- **Evals** are small tests you run to check whether Claude is good enough at a job you want to delegate: pick 5–10 past examples you have already done; prompt Claude; compare; refine.

## 4. How you work with Claude on your desktop

- Three shapes of work:
  1. **Turn by turn** — thinking together. You ask, Claude answers, you steer. (Chat.)
  2. **Hand off** — you describe an outcome, Claude plans and does it. (Cowork.)
  3. **Build software** — Claude edits files, runs commands, makes commits. (Code tab / Claude Code.)
- In the **newer** Claude experience there is no separate Chat / Cowork switch; both kinds of work happen in any conversation. In the older layout they are two tabs.
- **Cowork** needs a paid plan. Scheduled tasks and subagents are part of it. Cowork can read **local folders** on your computer; plain Chat cannot — Chat reads what you upload, Cowork reads what is on disk.
- Reach for turn-by-turn when the next question depends on the last answer. Reach for hand-off when the task has several steps, needs files saved somewhere, spans several tools, or runs on a schedule.
- Mac-only in the desktop app today: double-tap **Option** for a quick entry window, share a window with Claude, and dictate instead of type.

## 5. Projects

- A **Project** is a workspace for a piece of ongoing work with its own:
  - **chats**, grouped together;
  - **instructions** — rules that apply to every chat in that Project (tone, style, process);
  - **knowledge base** — uploaded files Claude references in every chat (PDF, DOCX, CSV, TXT, HTML, and Google Drive files when Drive is connected, in private Projects only);
  - **memory** built from chats inside the Project.
- Use a Project when you keep re-uploading the same files or re-explaining the same rules. One-off questions do not need one.
- When the knowledge base is too big to fit in the context window, Claude switches to **Retrieval-Augmented Generation (RAG)**: it searches your files and brings in only the relevant parts. This raises the effective capacity about 10×.
- **Sharing (Team and Enterprise only)** — three permission levels:
  - **Can view** — read-only plus chat.
  - **Can edit** — change instructions, files, and members.
  - **Owner** — everything, plus who sees the Project.
- Content you add during a chat but not to the knowledge base stays in that chat only.
- Good Project practice: focused scope; descriptive file names ("Q4-2026-Brand-Guidelines.pdf"); clear instructions; review and prune old files.

## 6. Creating with artifacts

- An **artifact** is a finished output — a document, deck, design, chart, interactive page, piece of code — that opens in a dedicated window beside your chat and is saved in the **Artifacts tab**, separate from the chat.
- Three built-in kinds on every plan (on Team and Enterprise an admin can turn them off):
  - **Claude Design** — landing pages, one-pagers, mockups, prototypes. Edit on canvas: drag, resize, align.
  - **Claude Slides** — presentations. You can edit any slide, add your own images, present inside Claude, or export to .pptx / Google Slides / PDF.
  - **Claude Docs** — living, rich-text documents you and your teammates can edit at the same time. Export to Google Docs or .docx.
- Other artifacts — charts, flowcharts, interactive explainers, working code — are built in-chat on every plan.
- Artifacts differ from **file creation**: an artifact opens in Claude and is shared by link; a file is downloaded and opened in another app (Word, Excel, PowerPoint, PDF).
- Three ways to change an artifact:
  1. Edit it directly (type, drag, resize).
  2. Leave a **comment** on the exact piece you want changed; @-mention Claude and it replies.
  3. Ask in the chat ("make the conclusion stronger").
- Artifacts are **private by default**. You can share by email or by link; recipients need a Claude account to open it. On Team and Enterprise, external sharing is off unless the Owner turns it on in Organization settings.
- Charts and diagrams inside a Doc are a **snapshot** at the moment they were drawn, not a live feed. Ask Claude to refresh them when you need the latest numbers.

## 7. Working with skills

- A **Skill** is a folder of instructions that Claude loads automatically when a task fits. Think of it as an expertise pack for a specific kind of work.
- Two kinds:
  - **Anthropic skills** — built in (Excel, PowerPoint, Word, PDF). Claude uses them automatically; nothing to turn on beyond file creation being enabled.
  - **Custom skills** — your own or your organisation's. They can cover any recurring workflow: quarterly review, brand voice check, a review process.
- Skills need **Create and edit files** (sometimes called **Code execution and file creation**) turned on in Settings → Capabilities. On Team and Enterprise it is an organisation setting, not a personal one.
- The easiest way to make a custom skill is to **talk to Claude** about the task you want to repeat. Claude interviews you, structures it, and gives you a file you save as a skill.
- Install only from trusted sources: a skill can contain executable code.
- **Skills vs Projects:** projects hold knowledge Claude should reference; skills hold the process Claude should run. A skill can reference a project.

## 8. Connecting your tools

- A **connector** gives Claude access to a service you already use: Gmail, Google Drive, Slack, Notion, Asana, Linear, Jira / Confluence (one Atlassian connector), Stripe, HubSpot, and many more. Once connected, Claude can search it, read from it and — where the connector allows — take actions in it.
- The standard underneath connectors is **MCP** — Model Context Protocol. It is an open protocol, so anyone can build a connector against it; the lesson's analogy is "USB-C for AI".
- Two kinds of connectors:
  - **Web connectors** — for cloud services. You sign in through the service's login and approve the permissions.
  - **Desktop extensions** — run locally through the Claude desktop app. For local files and native apps.
- Claude **never sees more than you see**. Connecting your work email does not give Claude your boss's inbox — only yours.
- Permissions are **scoped** and **revocable**. You can disconnect any time from the connectors page or from the service's own security settings.
- Connectors do not make Claude go hunting on its own. A connector only gives a request somewhere to point — Claude still responds to what you asked, not what it finds.
- One connector entry can cover several related apps (Atlassian covers Jira and Confluence). If a tool is not listed, check if it falls under another entry, or add a custom connector.

## 9. Enterprise search (Team and Enterprise only)

- A single place inside Claude that reaches everything your organisation has connected — Drive, Slack, Notion, SharePoint, your intranet — and searches across all of them at once.
- Different from a single connector: it is purpose-built for knowledge queries across many sources, using prompts tuned to your company's context.
- An Owner enables it at the organisation level; individual users then use it in any chat.
- The point is: ask one question and get an answer that was pulled from every tool your team puts its work in.

## 10. Research mode

- **Research** is a paid-plan feature where Claude works for five to forty-five minutes, breaks a big question into sub-questions, explores hundreds of sources and returns a cited report.
- Reach for Research when the answer needs several sources and real citations — market scans, policy comparisons, literature reviews.
- Do not use it for a quick fact or a short write-up.
- Only on paid plans (Pro, Max, Ultra, Team, Enterprise).

## 11. Claude in action — use cases by role

- Marketing: brand voice guidelines in a Project; write campaigns consistent with past voice; translate posts into multiple languages.
- Sales: query the CRM through a Stripe or HubSpot connector; draft follow-ups; summarise call transcripts.
- Finance: ingest large PDFs (annual reports, S-1s); run comparison tables; draft board summaries.
- Operations: standardise meeting notes with a skill; keep a "standard replies" project for support questions.
- Research: upload research corpus to a Project; ask Claude to find patterns across all of it.
- Point: find the task you do most often, build it as a Project + a skill, and let Claude run it with you.

## 12. Other ways to work with Claude

- **Claude Code** — the coding tool, deeper later in the Advanced tier.
- **Claude Tag** — Claude inside Slack, with memory of the channel.
- **Claude Design** — build interactive prototypes without opening another tool.
- **Claude for Microsoft 365** — a Claude sidebar in Excel, PowerPoint, Word and Outlook.
- **Claude in Chrome** — a Chrome extension that drives your real Chrome browser with your sign-ins, so Claude can act on live websites.

## 13. What is next

- The two paths from here are **Claude Platform 101** (API / developer) and **Claude Code 101** (agentic coding, more advanced). Both have their own quiz and certificate.
- Keep practising: the biggest gain between Day 1 and Day 30 is that you learn **what to delegate**, not how to prompt.

---

## Quick traps students fall into (read this before the real quiz)

- A **Project memory** is not shared across projects. Each Project has its own.
- A **connector** does not let Claude browse on its own. It still answers your prompt; the connector only gives it a place to look.
- **Skills** execute code; they need file creation turned on.
- **Research mode** is paid-only.
- **Memory** has an on/off switch in Settings. It is not the same as a Project knowledge base.
- A **Project file** is read every time Claude needs it; it does not fall out of memory after one chat.
- **Opus** is for the hardest work, **Sonnet** is the default, **Haiku** is the fastest/cheapest. Changing model mid-chat is allowed.
