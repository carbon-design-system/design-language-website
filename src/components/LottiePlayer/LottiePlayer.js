import React, { useState } from 'react';
import Lottie from 'react-lottie';

const LottiePlayer = props => {
  const [data, setData] = useState(null);

  props.src
    .then(module => {
      setData(module.default);
    })
    .catch(console.log);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie width="100%" height="100%" options={defaultOptions} />;
};

export default LottiePlayer;
