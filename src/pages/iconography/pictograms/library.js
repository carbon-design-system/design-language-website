import React from 'react';
import Layout from 'gatsby-theme-carbon/src/templates/Default';
import PictogramLibrary from '../../../components/SVGLibraries/PictogramLibrary';

const frontmatter = {
  label:
    'Pictograms are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  title: 'Pictograms',
  description:
    'Pictograms are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  tabs: ['Library', 'Design', 'Usage', 'Contribute'],
};

const LibraryPage = ({ pageContext, ...rest }) => (
  <Layout pageContext={{ ...pageContext, frontmatter }} {...rest}>
    <PictogramLibrary site="idl" />
  </Layout>
);

export default LibraryPage;
