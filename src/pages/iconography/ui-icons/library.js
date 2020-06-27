import React from 'react';
import Layout from 'gatsby-theme-carbon/src/templates/Default';
import IconLibrary from '../../../components/SVGLibraries/IconLibrary';

const frontmatter = {
  label:
    'Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  title: 'UI icons',
  description:
    'Icons derive their valuable functionality from the cognitive shortcuts they provide. Find the perfect symbol in this library of IBM iconography.',
  tabs: ['Library', 'Design', 'Usage', 'Contribute'],
};

const LibraryPage = ({ pageContext, ...rest }) => (
  <Layout pageContext={{ ...pageContext, frontmatter }} {...rest}>
    <IconLibrary site="idl" />
  </Layout>
);

export default LibraryPage;
