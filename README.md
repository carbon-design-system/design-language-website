# IBM DESIGN LANGUAGE WEBSITE

![Deploy website to IBM Cloud](https://github.com/carbon-design-system/design-language-website/workflows/Deploy%20website%20to%20IBM%20Cloud/badge.svg)

This is the [IBM Design Language website](http://www.ibm.com/design/language) which is built using the [gatsby-theme-carbon](https://gatsby-theme-carbon.now.sh/) with GatsbyJS.

## 📂 PROJECT STRUCTURE

```
src
├── components
├── data
├── gatsby-theme-carbon
├── images
├── pages
├── styles
├── util
```

## 👩‍💻 DEVELOPMENT

- 🤝 [Contribution Guidelines](.github/CONTRIBUTING.md)
- 📚 [Content/Markdown Guidelines](https://gatsby-theme-carbon.now.sh/components/markdown)
- 🗺 [Navigation Guidelines](https://gatsby-theme-carbon.now.sh/guides/navigation/sidebar)

- `yarn install` – install dependencies
- `yarn dev` – start the development server
- `yarn dev:clean` – use this if you have cache issues
- `lint:fix` – lint your javascript files
- `format` - run prettier

If you need more detailed information on how to setup your machine to develop locally, please take a look at our [wiki](https://github.com/carbon-design-system/carbon-website-gatsby/wiki).

## 🚀 BUILD

Running the build commands generates all the files and places them in the `public` folder.

```
yarn build
```
