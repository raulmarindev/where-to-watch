import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface IImageLoaderProps {
  alt: string;
  className: string;
  src: string;
  srcSet: string;
}

const fadeInImg = keyframes`
  from {
    opacity: 0;
    transform: scale(1.02,1.02);
    top: -3px;
  }
  to {
    opacity: 1;
    transform: scale(1,1);
    top: 0px;
  }
`;

const ImgWithStyles = styled.img<{ loaded: boolean; }>`
opacity: 0;
width: 100%;
height: ${({ loaded }) => (loaded ? css`auto` : css``)};
position:  ${({ loaded }) => (loaded ? css`relative` : css`absolute`)};
/* animation-fill-mode: ${({ loaded }) => (loaded ? css`forwards` : css``)};
animation-duration: 0.7s;
animation-delay: 0.1s; */
animation: ${({ loaded }) => (loaded ? css`${fadeInImg} 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s forwards` : css``)}
`;

const ImageLoader: React.FC<IImageLoaderProps> = ({
  alt, className, src, srcSet,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <ImgWithStyles
      alt={alt}
      className={className}
      loaded={loaded}
      onLoad={handleLoad}
      src={src}
      srcSet={srcSet}
    />
  );
};

export default ImageLoader;
