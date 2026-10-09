# Purdue Computational Imaging Lab

Source for [purdue-ci-lab.github.io](https://purdue-ci-lab.github.io), built with [Jekyll](https://jekyllrb.com/) and the
[al-folio](https://github.com/alshedivat/al-folio) theme. These instructions are condensed from [docs/INSTALL.md](docs/INSTALL.md), which also
covers Windows/WSL, dev containers, Netlify, and other hosting setups.

## Local development

### Docker (recommended)

Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/), then from the repo root:

```bash
docker compose pull
docker compose up
```

The first run downloads an image of about 400MB. Open `http://localhost:8080` to see the site. Changes rebuild automatically within a few seconds.
Edits to `_config.yml` make the container restart Jekyll.

Docker serves from a container-local destination (`/tmp/_site`) to avoid host bind-mount write deadlocks.

To rebuild the image (for example, after changing Ruby dependencies), run `docker compose up --build`. Add `--force-recreate` to reinstall everything
from scratch.

If the container fails to start, check the logs and rerun the entry point inside the container:

```bash
docker compose up -d
docker compose logs
docker compose exec -it jekyll /bin/bash
bundle install
./bin/entry_point.sh
```

### Ruby (without Docker)

With [Ruby](https://www.ruby-lang.org/en/downloads/) and [Bundler](https://bundler.io/) installed (and optionally Python for Jupyter notebook
rendering):

```bash
bundle install
./bin/setup-python-deps   # optional: jupyter + nbconvert for jekyll-jupyter-notebook
bundle exec jekyll serve
```

Then open `http://localhost:4000`. If `jupyter-nbconvert` is missing, the build still succeeds but notebook rendering is skipped with a warning.

This site uses al-folio v1.x, which is a thin starter: layouts, includes, and theme assets come from the `al-*` gems declared in the
[Gemfile](Gemfile) and enabled in [\_config.yml](_config.yml). Don't add local npm build steps for theme/runtime assets.

## Deployment

The site deploys to GitHub Pages automatically through GitHub Actions on every push to `main`.

Because this is an organization page, the repository must be named `purdue-ci-lab.github.io`, and `_config.yml` must keep
`url: https://purdue-ci-lab.github.io` with `baseurl` empty. Leave the `baseurl:` key in place even when it's empty.

### One-time setup

1. In the **Actions** tab, enable GitHub Actions. The workflows are already set up.
2. In **Settings → Actions → General → Workflow permissions**, grant **Read and write permissions**.
3. Push a commit to `main` to trigger the **Deploy** action. Once it finishes, the repo has a `gh-pages` branch. **Do not edit this branch.**
4. In **Settings → Pages**, set the source branch to `gh-pages` (not `main`). See
   [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source).

To redeploy manually, go to **Actions → Deploy → Run workflow**.

### Building for another host

```bash
bundle exec jekyll build
purgecss -c purgecss.config.js   # optional: strip unused CSS from _site/assets/css/
```

Copy the contents of `_site/` to the server. Set `url` and `baseurl` in `_config.yml` for that host before building.

## Maintaining dependencies

Ruby gems are managed with Bundler. To update them:

```bash
bundle update --all
docker compose up --build
```

Then check `http://localhost:8080` to confirm the site still renders correctly. See [docs/FAQ.md](docs/FAQ.md) for troubleshooting.

## Upgrading al-folio

al-folio v1.x ships an upgrade CLI for minor-version upgrades:

```bash
bundle update
bundle exec al-folio upgrade audit          # find breaking/deprecated patterns
bundle exec al-folio upgrade apply --safe   # optional deterministic codemods
bundle exec al-folio upgrade report         # writes al-folio-upgrade-report.md
```

Fix every **blocking** finding in the report before deploying. **Non-blocking** findings are deprecations to migrate over time.

This site keeps local overrides of some theme files (`_layouts/`, `_includes/`). After a `bundle update`, check whether the upstream versions changed:

```bash
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade overrides diff _layouts/default.liquid
bundle exec al-folio upgrade overrides accept _layouts/default.liquid
```

Commit `.al-folio-overrides.yml` after reviewing. See [docs/INSTALL.md](docs/INSTALL.md#upgrading-from-a-previous-version) for the full upgrade guide.

## License

The al-folio theme is available under the [MIT License](LICENSE).
