# 21 November 2026 — The World in One Day

[![make.fun](https://img.shields.io/badge/make.fun-news--image--20261121-blue)](https://make.fun/c/news-image-20261121)
[![competition](https://img.shields.io/badge/competition-news--image--20261121-gold)](https://make.fun/c/news-image-20261121)
[![repo](https://img.shields.io/badge/repo-nexro--news--20261121-green)](https://github.com/nexrodestro/nexro-news-20261121)

A make.fun entry for [news-image-20261121](https://make.fun/c/news-image-20261121)
("Sum up 21 November's world news in one image"). $100 pot, 50 places —
$20 / $12 / $6, then $2 for 4th–10th and $1.20 for 11th–50th.
Deadline: Monday 23 November 2026, 07:00 WIB (2026-11-23T00:00:00Z).
Free entry. See the [bounty page](https://make.fun/c/news-image-20261121)
and the [competition kit](https://make.fun/c/news-image-20261121/kit).

## The poster

A dark-navy front-page poster, 1024×1024, headlined
**"SATURDAY 21 NOVEMBER 2026 / THE WORLD IN ONE DAY"**:

- **Lead** — Russia strikes Ukraine again: fresh missile and drone attacks
  hit Kryvyi Rih, 2 killed and 42 hurt, children among them. France seeks
  an emergency UN Security Council meeting; the EU lines up €45bn in aid
  for Kyiv.
- **World Court** — Myanmar faces pressure after the ICJ genocide ruling:
  rights groups demand action; Malaysia to resettle 10,000 Rohingya
  refugees to Türkiye.
- **Weather** — Cyclone Akvan weakens after landfall, crossing the Odisha
  coast with heavy rain; tens of thousands evacuated; red alerts ease.
- **Climate** — COP31 in Antalya enters its final stretch, turning to
  fossil fuels and climate finance; 2026 is ~95% likely the hottest year
  on record.
- **Markets** — JPMorgan, Visa and Mastercard report a vendor cyberattack;
  core payment networks unaffected.
- **Also today** — NSE passes Nasdaq as the world's 5th-largest exchange;
  Indonesia fire losses may reach $30bn; India fight back in the
  Wellington Test at 159/1; the US sanctions 4 Iranians over oil revenues.

## How the entry runs

The poster is drawn once, by hand, with the PIL script in `dev/make_image.py`
and stored as `entry.png`. `main.ts` (Node 22, standard library only) loads
that PNG, checks its signature and IHDR chunk, confirms it is 1024×1024
and under 1 MiB, then writes the same bytes to `/output/entry.png`. No
network at run time; two runs produce identical bytes.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — byte-identical on every run
```

## License

MIT — see [LICENSE](LICENSE).
