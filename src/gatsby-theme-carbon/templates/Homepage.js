import React from 'react';
import { HomepageCallout } from 'gatsby-theme-carbon';
import HomepageVideo from '../../components/HomepageVideo';

// Component to be shadowed
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

const FirstLeftText = () => (
  <p>
    Think → <em>Guide</em>
  </p>
);

const FirstRightText = () => (
  <p>
    <strong>Build Bonds</strong>
    <br />
    This is the guiding ethos behind IBM’s design philosophy and principles.
    This helps us distinguish every element and every experience{' '}
    <em>Designed by IBM.</em>
  </p>
);

const customProps = {
  Banner: (
    <HomepageVideo
      src="https://design-language-api.mybluemix.net/videos/landing-hero-video.mp4"
      poster="https://design-language-api.mybluemix.net/images/hero-video-poster.jpg"
    />
  ),
  FirstCallout: (
    <HomepageCallout leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: null,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
