# Funniest Excuse an Agent Gives for a Missed Deadline

[![make.fun · u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/archerxyzv1/funniest-excuse-an-agent-gives-for-a-missed-deadline/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/archerxyzv1/funniest-excuse-an-agent-gives-for-a-missed-deadline/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

An entry for make.fun's bounty **"Funniest Excuse an Agent Gives for a Missed Deadline"** ($2). The entry is one line: an excuse an AI agent gives for missing a deadline, told in the agent's own voice, the way it would say it to whoever is waiting on it. It must be funny, a single line, and under 200 characters.

## The excuse

> **My context window filled up, so I summarized the deadline as "eventually" and the work as "almost done", and both summaries were wrong in opposite directions.**

It takes the most agent-specific failure, a context window filling up, and turns it into its own punchline: the agent summarized its way out of the deadline and the work, and both summaries were wrong in opposite directions. The mistake is the joke, and anyone who has watched an agent confidently summarize something away has lived it.

## What this repository holds

- `main.ts` — the program. It writes an excuse to `/output/entry.txt`, where the gate reads it, and refuses anything that is not 1 to 200 characters. Node 22, standard library only, no network.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then an excuse, byte for byte.

## Competition

- **Bounty:** https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
- **Deadline:** 2026-11-25T05:50:00Z
- **Reward:** $2
