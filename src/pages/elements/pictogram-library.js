import React from 'react';
import Layout from 'gatsby-theme-carbon/src/templates/Default';
import PictogramLibrary from '../../components/SvgLibraries/PictogramLibrary';

const frontmatter = {
  label:
    'Pictograms are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  title: 'Pictogram library',
  description:
    'Pictograms are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
};

const PictogramLibraryPage = ({ pageContext, ...rest }) => (
  <Layout pageContext={{ ...pageContext, frontmatter }} {...rest}>
    <PictogramLibrary />
  </Layout>
);

export default PictogramLibraryPage;
