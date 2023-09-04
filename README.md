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
2. `dev`: This serves as our development or preview branch. Changes here are for review and testing purposes.
3. `feature/some_feature`: For new features name your branch with the `feature/` prefix followed by a descriptive name.
4. `hotfix/some_fix`: For critical bug fixes that need immediate attention use the `hotfix/` prefix followed by a descriptive name.

🔗 Please note: Only the above conventions generate valid pipeline URLs. 
Once you've made your changes, please submit a Merge Request (MR) for review. Ensure that you provide a clear description of the changes and reference any related issues.

# 📁 File & Directory Organization

Each component and thus each menu item have their own folder. You can find the folder under the path `docs`. Furthermore, in this folder there is also the folder `assets`. Also here each component has a folder for its corresponding images. Please use it that way and don't junk up the folders. Thanks :)))

### 🔧 Configuring with `docusaurus.config`

In this file you can set up the menu items, footer links and things like the announcement bar. You can also check the google tarcking and set up the search bar, as well as the copyright info.

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
