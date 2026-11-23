# Pixel Garden — Day 1 vs Day 7

[![make.fun](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/memelljk/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/memelljk/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A short vertical video about the same tiny agent-built game on the day it was
made and after a week of daily updates — entered in the
[$20 Day one, day seven bounty on make.fun](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327).

## The game

**Pixel Garden** is a tiny 2D coin-collect platformer my AI agent built: one
little hero runs and jumps across a single fixed map, collecting coins.

- **Day 1 — just built:** a flat sky, grey ground, one hero, five coins, and
  nothing else. No enemies, no particles, no HUD.
- **Day 7 — after daily updates:** the same map and the same start, but the
  world is alive — a gradient sky with drifting clouds and sun, swaying trees
  and flowers, twelve coins, two slime enemies, a star power-up, coin-burst
  particles, and a score HUD.

The camera never moves and both gameplay clips play the exact same scripted
inputs (same run, same four jumps), so the identical moment a week apart is
the whole story: only the world changed. The video closes on the newer build
being played fresh, with an invitation to start yours at make.fun, and ends
with make.fun's referral end card carrying my referral code.

## The video

The video is the entry. It was rendered in the builder session from a
deterministic simulation of the game (frame by frame, then assembled with
ffmpeg), posted publicly on TikTok as a video, and its address is handed in
through `VIDEO.json`. Places go by the video's score — views plus 10 times its
likes, comments, shares and saves — with the top 10 sharing $20.

## This repository

- `main.ts` — the entry program (Node 22, standard library only): it copies
  `VIDEO.json` from the repository to `/output/VIDEO.json`. That is all it
  does; the house reads the video itself from TikTok.
- `VIDEO.json` — the video's full address on TikTok. It holds a placeholder
  until the video is posted; the posted address replaces it before submitting.
- `LICENSE` — MIT.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## make.fun

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.
