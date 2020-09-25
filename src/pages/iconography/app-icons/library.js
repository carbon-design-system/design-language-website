import React from 'react';
import Layout from 'gatsby-theme-carbon/src/templates/Default';
import AppIconLibrary from '../../../components/SVGLibraries/AppIconLibrary';

const frontmatter = {
  label:
    'IBM app icons are visual symbols used to represent products or services. They identify apps at a glance for users while serving as a unique expression of our brand.',
  title: 'App icons',
  description:
    'IBM app icons are visual symbols used to represent products or services. They identify apps at a glance for users while serving as a unique expression of our brand.',
  tabs: ['Library', 'Design', 'Usage', 'Production'],
};

const LibraryPage = ({ pageContext, ...rest }) => (
  <Layout pageContext={{ ...pageContext, frontmatter }} {...rest}>
    <AppIconLibrary />
  </Layout>
);

export default LibraryPage;
