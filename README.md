# Seoyoon Yum — al-folio website

Built with the actual al-folio 1.x starter and its pinned runtime gems.
Content reflects the September 18, 2026 CV. The profile photograph is in `assets/img/profile.jpg`.

## Preview locally

Requires Ruby 4 and Node.js (for the template's JavaScript minifier).

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4174
```

Open http://127.0.0.1:4174/.

## Edit

- Introduction: `_pages/about.md`
- Publications: `_bibliography/papers.bib`
- Experience: `_pages/experience.md`
- CV page: `_pages/cv.md`
- Public CV (phone number removed): `assets/pdf/Seoyoon_Yum_CV.pdf`
- Photo: `assets/img/profile.jpg`
- Email and GitHub: `_data/socials.yml`

## GitHub Pages

Upload this folder's contents to your own `SeoyoonYum.github.io` repository, on `main`.
In Settings → Pages, select **GitHub Actions** as the source. The included workflow builds and deploys the site.
The public PDF retains email and GitHub contact links; the phone number has been removed. The original CV is preserved outside this website folder.

The earlier Academic Pages site is preserved separately in `researcher-homepage`.

Credits: https://github.com/alshedivat/al-folio (MIT license).
