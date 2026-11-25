# 📖 Developer Documentation Guidelines

Hello Team! 🌟

The [Docusaurus documentation](https://docusaurus.io/docs/category/guides) offers a certain number of features that can be used to keep the documentation descriptive.
Please don't hesistate to use it!

💡 Aesthetics & Clarity: Let’s maintain a clean, visually appealing style. Especially consider using features like Info, Caution, Danger, and Tip boxes contextually. Read more aboutt them [here](https://docusaurus.io/docs/markdown-features/admonitions).

🙋 FAQs: If you’re diving into the FAQ section, either contribute to the existing table of contents or initiate one. Need inspiration? Glance through existing FAQs.

📓 Golden Rule: Always document in a manner you'd wish to find when you’re seeking answers. Put yourself in the reader’s shoes!

Below I have some tips that may help you. Alternatively, you can read everything in the [documentation of Docusaurus](https://docusaurus.io/docs/category/guides).

## 🚀 Getting Started with Contributions

### Branching Protocols 🌳

When contributing to the docs it's crucial to adhere to the branch naming and usage conventions to ensure the pipeline URLs are generated correctly. Here's a breakdown:

1. `main`: This is our production branch. Any changes merged here will be visible in production.
2. `v1-2026` and `main-v2`: see "Docs relaunch: branches" below.
3. `feature/some_feature`: For new features name your branch with the `feature/` prefix followed by a descriptive name.
4. `hotfix/some_fix`: For critical bug fixes that need immediate attention use the `hotfix/` prefix followed by a descriptive name.

🔗 Please note: Only the above conventions generate valid pipeline URLs. 
Once you've made your changes, please submit a Merge Request (MR) for review. Ensure that you provide a clear description of the changes and reference any related issues.

### 🔀 Docs relaunch: branches (as of 2026-11-25)

The new docs (v2, in `docs-v2/`) are being prepared to replace the current docs (v1, in `docs/`).

| Branch | Content | Live? |
|---|---|---|
| `main` | Current docs (v1) **until the switch**. After the switch: the new docs (v2). | Yes: every push to `main` goes live (see "Production" below) |
| `v1-2026` | Current docs (v1), branched off `main` on 2026-11-25. Keeps the v1 content after the switch. | No |
| `main-v2` | The new docs (v2): v2 content, old-URL handling (SEO alternatives A + B, see `SEO-URLS.md`) and all of `main`. Becomes `main` at the switch. | No (review build, noindex) |

**Until the switch** (`main` is still v1):

- Changes to the current docs (`docs/`): MR to `main` as before, so they go live. After the merge, also merge `main` into `v1-2026` (fast-forward) and into `main-v2`.
- If the change matters for the new docs too, add the same content to the matching page in `docs-v2/` with an MR to `main-v2`. `docs-v2/help/docs-changes.mdx` lists which new page replaces which old one.
- Changes to the new docs: MR to `main-v2`.

**At the switch:** `main-v2` is merged into `main`, which puts v2 live on docs.nanocosmos.net and docs.nanocosmos.de. Before that: the open questions (`/docs-review/open-questions` on review builds), the redirect check (`/docs-review/redirect-check`) and the staging/canary decision below.

**After the switch:** fixes to the old docs go to `v1-2026` (MR target `v1-2026`); new content goes to `main` in `docs-v2/`. `v1-2026` is not deployed anywhere unless someone sets that up.

**Production:** git.nanocosmos.de push-mirrors its protected branches (incl. `main`) to the GitHub repos `nanocosmos/documentation` (docs.nanocosmos.de) and `nanocosmos/documentation-net` (docs.nanocosmos.net). Their `.github/workflows/deploy.yml` builds and publishes every push to `main` to GitHub Pages within minutes.

# 📁 File & Directory Organization

Each component and thus each menu item have their own folder. You can find the folder under the path `docs`. Furthermore, in this folder there is also the folder `assets`. Also here each component has a folder for its corresponding images. Please use it that way and don't junk up the folders. Thanks :)))

### 🔧 Configuring with `docusaurus.config`

In this file, you can set up the menu items, footer links and the announcement bar. You can also check the Google tracking, set up the search bar and update the copyright information.

- **Menu**: To add a new Menupoint, please add it in the `docusaurus.config` file. You can read more about the nav bar and e.g. dropdown [here](https://docusaurus.io/docs/api/themes/configuration#navbar).

```javascript
themeConfig: {
  ...themeConfig,
  navbar: {
    ...themeConfig.navbar,
    // Navigation Items
    items: [
      // HERE
    ]
  }
}
```
- **Footer**: To add new links to the Footer, please add it also in the `docusaurus.config` file. You can read more about the footer [here](https://docusaurus.io/docs/api/themes/configuration#footer-1).

```javascript
themeConfig: {
  ...themeConfig,
  footer: {
    ...themeConfig.footer,
    // Footer Items Items
    links: [
      // HERE
    ]
  }
}
```

- **Announcement Bar**: You can add an announcement bar also in the `themeConfig`. It is already there, but uncommented. Read more about the announcement bar [here](https://docusaurus.io/docs/api/themes/configuration#announcement-bar)

```javascript
// Announcement Bar
announcementBar: {
  id: 'announcement_bar',
  content:
  'Hey, this is a test announcement',
  //  backgroundColor: '#fafbfc',
  textColor: '#091E42',
  isCloseable: false,
}
```

## 📑 Don’t Forget `sidebars.js`

Creating a sidebar enables you to:

- create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

Learn more about sidebars [here](https://docusaurus.io/docs/sidebar/items).

### Installation

```other
$ npm install
```

### Local Development

```other
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```other
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

# 🚢 CI/CD & deployment

The repository lives on two GitLab servers, and both run `.gitlab-ci.yml` (Auto-DevOps):

| Remote | Project | Image build |
|---|---|---|
| git.nanocosmos.de | `doc/nano-docs` | Auto-DevOps `build` job (docker-in-docker) |
| gitlab.nanocosmos.cloud | `web/nano-docs` | `build_kaniko` job. The runners there have no Docker daemon, so the docker-in-docker build fails with *Cannot connect to the Docker daemon at tcp://localhost:2375* |

The image is tagged `$CI_REGISTRY_IMAGE/<branch-slug>:<commit-sha>` on both, which is what the deploy jobs expect.
Feature branches get a manual `review` job (deploy to a review environment).

## ⚠️ Open decision: staging & canary deploys (as of 2026-11-17)

`.gitlab-ci.yml` sets `STAGING_ENABLED: "false"` and `CANARY_ENABLED: "false"`. Auto-DevOps only checks
whether these variables are *set*, not their value, so `"false"` turns staging and canary **on**.

What this did: the first successful `main` pipeline on gitlab.nanocosmos.cloud (pipeline 29510, commit `e2715ff`)
deployed automatically to **staging**:

- Kubernetes namespace `nano-docs-1086` (created by the job)
- http://web-nano-docs-staging.autodevops-prod.nanostream.cloud/
- `canary` and `production_manual` are then offered as manual jobs. Nothing was deployed to production.

The same applies on git.nanocosmos.de whenever a cluster is connected there. Before the kaniko fix, the build
failed on gitlab.nanocosmos.cloud, so the deploy step was never reached.

To decide:

1. **Keep or remove the staging deployment on gitlab.nanocosmos.cloud?** Removing it means stopping the `staging`
   environment in GitLab (deletes the deployment); the namespace stays unless someone removes it on the cluster.
2. **Fix the variables?** Deleting the two lines turns staging and canary off for real, on both servers; merges to
   `main` then only offer the manual production deploy. If the staging step on git.nanocosmos.de is wanted, limit
   the change to gitlab.nanocosmos.cloud with a `$CI_SERVER_HOST` rule, like `build_kaniko`.

Until decided, every merge to `main` on gitlab.nanocosmos.cloud redeploys staging.
