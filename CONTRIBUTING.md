# Contributing

Thank you for reading this repo carefully enough to find something that is wrong, out of date, or unclear.

## Spotted a wrong answer?

Open a GitHub issue with:

- the tier (basic / developer / advanced),
- the question id (every question has one, for example `basic-023`),
- what you think is wrong, and what you would change it to,
- the Anthropic Academy lesson that backs your correction, if you have it.

Or send a pull request with the fix.

## Writing style

- Plain English. Short sentences. Indian-English spelling is fine.
- Every question has exactly one correct answer, and every explanation names the Academy lesson it is based on.
- No tricky wording. The test is whether you understand the material, not whether you spotted a hidden comma.
- Never paraphrase Anthropic's quiz questions; write fresh questions from the lesson text.

## Question ids

The id tells future-us where the question sits in order: `basic-001`, `developer-017`, `advanced-034`. If you add a question, use the next free number for that tier.

## Updating the mirrors on the two sites

The exam pages on shoebhakim.com and ethanhakim.in load questions from `/claude-certifications/data/<tier>.json` on each site. Those files are copies of this repo's `<tier>/questions.json`. A refresh script runs on request and copies the latest version in; a PR here does not change the live sites until the mirror is refreshed.
