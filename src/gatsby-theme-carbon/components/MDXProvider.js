import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';
import { WebsiteCodeSnippet } from '@carbon/addons-website';
import {
  P,
  H1,
  H2,
  H3,
  H4,
  H5,
  Ul,
  Ol,
} from 'gatsby-theme-carbon/src/components/markdown';
import PageTable from 'gatsby-theme-carbon/src/components/PageTable';
import {
  AnchorLinks,
  AnchorLink,
  PageDescription,
  Video,
  ResourceCard,
  Row,
  Column,
  Aside,
} from 'gatsby-theme-carbon';

const components = {
  wrapper: function Wrapper({ children, ...props }) {
    return <div {...props}>{children}</div>;
  },
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: P,
  ol: Ol,
  ul: Ul,
  pre: WebsiteCodeSnippet,
  table: PageTable,
  PageDescription,
  AnchorLinks,
  AnchorLink,
  Video,
  Row,
  Column,
  ResourceCard,
  Aside,
};

const MDXProvider = ({ children }) => (
  <Provider components={components}>{children}</Provider>
);

export default MDXProvider;
