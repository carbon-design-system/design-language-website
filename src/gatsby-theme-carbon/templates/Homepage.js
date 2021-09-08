import React from 'react';
import { HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import HomepageVideo from '../../components/HomepageVideo';
import { gray100 } from '@carbon/colors';

// Component to be shadowed

const FirstLeftText = () => (
  <p>
    Think → <em>Guide</em>
  </p>
);

const FirstRightText = () => (
  <p>
    Build Bonds
    <br />
    This is the guiding ethos behind IBM’s design philosophy and principles.
    This helps us distinguish every element and every experience Designed&nbsp;by&nbsp;IBM.
    <div style={{ paddingTop: "1.25rem" }}>↓</div>
  </p>
);

const customProps = {
  Banner: (
    <HomepageVideo
      src="videos/hero-video-min.mp4"
      poster="images/hero-video-poster.jpg"
    />
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor={gray100}
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: null,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
