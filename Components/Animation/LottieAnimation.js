import React, { useEffect, useRef } from 'react';
import lottie from "lottie-web";

const LottieAnimation = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);
  return <div
    className=''
    ref={containerRef}
  />;
};

export default LottieAnimation;