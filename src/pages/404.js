import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/philosophy/pov', text: 'Philosophy' },
  { href: '/gallery', text: 'Gallery' },
  { href: '/updates/whats-new', text: 'What’s new' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
