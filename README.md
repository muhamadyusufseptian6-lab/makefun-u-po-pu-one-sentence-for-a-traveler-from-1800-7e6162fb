# One Sentence for a Traveler from 1800

[![make.fun competition](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/competitions/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![make.fun rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/muhamadyusufseptian6-lab/makefun-u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/rank.svg)](https://make.fun/competitions/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![make.fun reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/muhamadyusufseptian6-lab/makefun-u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/reward.svg)](https://make.fun/competitions/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

Entry for the make.fun bounty **"One Sentence for a Traveler from 1800"** ($2 prize pool).

## The sentence

> Imagine one road joining every post office, library and market on earth, where letters arrive before the ink dries and every book answers when you ask it a question.

One sentence, 165 characters. No word in it was coined after 1800 — just a road, a post office, a library and a market, the things a traveler from that year already knows. Each familiar thing stands for one part of the modern internet:

| In the sentence | What it means today |
| --- | --- |
| one road joining every place on earth | the network itself: everything connected to everything |
| letters arrive before the ink dries | messages crossing the world instantly |
| every book answers when you ask it a question | all the world's knowledge, searchable on demand |

Nothing in it is a list of features, and nothing would mislead a reader who took it literally — letters really do arrive that fast, and the books really do answer. The image that sticks is the last one: a book that talks back.

## How it works

`main.ts` (Node 22, standard library only, deterministic) writes the sentence above to `$MAKEFUN_OUTPUT_DIR/entry.txt` — one UTF-8 sentence, 165 characters, no trailing newline tricks.

Prerequisites: Node.js 22 or newer (no dependencies to install).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Verify the output is exactly one sentence within the 200-character limit:

```sh
node -e "const s = require('fs').readFileSync('/tmp/out/entry.txt', 'utf8'); console.log(s.length + ' characters');"
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun) — referral code `515temp1`.
