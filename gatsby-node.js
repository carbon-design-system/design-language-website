const fs = require('fs');
const path = require('path');

const {
  icons: iconData,
  categories: iconCategoryData,
} = require('@carbon/icons/metadata.json');

const {
  icons: pictogramData,
  categories: pictogramCategoryData,
} = require('@carbon/pictograms/metadata.json');

exports.onPreBootstrap = async ({ reporter }) => {
  // eslint-disable-next-line no-unused-vars
  const removeUnusedData = ({ output, ...metadata }) => metadata;

  const outDir = 'src/components/SVGLibraries';

  reporter.log(`Processing SVG metadata`);

  const essentialIconData = iconData.map(removeUnusedData);
  const essentialPictogramData = pictogramData
    .map(removeUnusedData)
    .filter((pictogram) => {
      if (
        pictogram.name === 'ibm--z' ||
        pictogram.name === 'ibm--z--partition'
      ) {
        return false;
      }
      return true;
    });

  fs.writeFileSync(
    path.join(outDir, 'IconLibrary/metadata.json'),
    JSON.stringify({ icons: essentialIconData, categories: iconCategoryData })
  );

  fs.writeFileSync(
    path.join(outDir, 'PictogramLibrary/metadata.json'),
    JSON.stringify({
      icons: essentialPictogramData,
      categories: pictogramCategoryData,
    })
  );
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Disable sourcemaps in production
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
