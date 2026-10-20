# Seoyoon Yum — al-folio website

Built with the actual al-folio 1.x starter and its pinned runtime gems.
The homepage presents a short research introduction, selected publications with contribution summaries, and four research experience entries. The profile photograph is in `assets/img/profile.jpg`.

## Preview locally

Requires Ruby 4 and Node.js (for the template's JavaScript minifier).

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4174
```

Open http://127.0.0.1:4174/.

## Edit

- Introduction: `_pages/about.md`
- Homepage structure: `_layouts/about.liquid`
- Homepage research experience: `_data/home_experience.yml` and `_includes/home_experience.liquid` (`home: false` hides an entry already covered in Publications)
- PhaseGate overview: `_pages/phasegate.md`
- Publications: `_bibliography/papers.bib` (entries with `selected={true}` appear in the homepage publication list)
- Compact publication layout: `_layouts/home-paper.liquid`
- Homepage styling: `assets/css/home-polish.css`
- Experience: `_pages/experience.md`
- CV page: `_pages/cv.md`
- Public CV (phone number removed): `assets/pdf/Seoyoon_Yum_CV.pdf`
- Photo: `assets/img/profile.jpg`
- Email, GitHub, and Google Scholar: `_data/socials.yml`

The PhaseGate throughput result is scoped to retrieval on the base-M4 Mac mini versus the best tested feasible fixed policy under the same LLM latency limits. The 60–61% decode-latency increase is the motivating contention measurement, not a PhaseGate improvement. Keep these claims distinct when editing.

The local `assets/pdf/papers/phasegate.pdf` is the public, author-named arXiv v1 PDF from https://arxiv.org/pdf/2610.04537v1, retrieved October 20, 2026. This preserves existing inbound PDF links while replacing the anonymous submission.

## GitHub Pages

Upload this folder's contents to your own `SeoyoonYum.github.io` repository, on `main`.
In Settings → Pages, select **GitHub Actions** as the source. The included workflow builds and deploys the site.
The public PDF retains email and GitHub contact links; the phone number has been removed. The original CV is preserved outside this website folder.

The earlier Academic Pages site is preserved separately in `researcher-homepage`.

Credits: https://github.com/alshedivat/al-folio (MIT license).
