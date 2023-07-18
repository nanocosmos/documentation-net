# Hey dear colleagues

The [Docusaurus documentation](https://docusaurus.io/docs/category/guides) offers a certain number of features that can be used to keep the documentation descriptive.
Please don't hesistate to use it!

**Please make sure that you follow legible and visually appealing practices while writing the doc.** That means, e.g.: use the Info, Caution, Danger and Tip boxes so that they fit. (You can read more about this [here](https://docusaurus.io/docs/markdown-features/admonitions)).

If you expand the **FAQ section**, make sure you create a table of contents at the top of the page or expand it. If you don't know what that means, check out other FAQs that are already out there.

# Most importantly, please, please write the way you would like to find a developer documentation.

Below I have some tips that may help you. Alternatively, you can read everything in the [documentation of Docusaurus](https://docusaurus.io/docs/category/guides).

## Organization

Each component and thus each menu item have their own folder. You can find the folder under the path `docs`. Furthermore, in this folder there is also the folder `assets`. Also here each component has a folder for its corresponding images. Please use it that way and don't junk up the folders. Thanks :)))

## docusaurus.config

In this file you can set up the menu items, footer links and things like the announcement bar. You can also check the google tarcking and set up the search bar, as well as the copyright info.

### Menu

To add a new Menupoint, please add it in the `docusaurus.config` file. You can read more about the nav bar and e.g. dropdown [here](https://docusaurus.io/docs/api/themes/configuration#navbar).

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

### Footer

To add new links to the Footer, please add it also in the `docusaurus.config` file. You can read more about the footer [here](https://docusaurus.io/docs/api/themes/configuration#footer-1).

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

### Announcement Bar

You can add an announcement bar also in the `themeConfig`. It is already there, but uncommented. Read more about the announcement bar [here](https://docusaurus.io/docs/api/themes/configuration#announcement-bar)

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

## sidebars.js

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

