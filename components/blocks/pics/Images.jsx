import React, { useState } from 'react';

import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Block from '../../Block';
import elevations from '../../../helpers/elevations';
import { desktopMin } from '../../../helpers/breakpoints';

import {
  Image,
} from '../../../styles/page';
import PopupImage from '../../PopupImage';

const StyledImage = styled(Image)`
  height: auto;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;

  margin: 1.5rem;

  transition: all .1s ease-in-out;

  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }

  @media ${desktopMin} {
    height: 20rem;
    width: unset;

    img {
      width: unset;
      height: 100%;
    }
  }

  :hover {
    transform: translateY(-5px);
    box-shadow: ${elevations[4]};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  padding: 3rem;
`;

function Images() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [largeImageSrc, setLargeImageSrc] = useState('');

  const numPhotos = 142;
  const images = [];
  for (let i = 1; i <= numPhotos; i += 1) {
    images.push(`https://kaitlynandtanner.s3.us-east-2.amazonaws.com/pics/thumbs/${i}.jpg`);
  }

  const handleImageClick = (image) => {
    setLargeImageSrc(image);
    setPopupVisible(true);
  };

  const thumbails = images.map((image, i) => (
    <StyledImage
      key={image}
      // onClick={() => setLargeImageSrc(`https://kaitlynandtanner.s3.us-east-2.amazonaws.com/pics/originals/${i + 1}.jpg`)}
      onClick={() => handleImageClick(image)}
    >
      <LazyLoadImage
        alt="Selfie"
        src={image}
      />
    </StyledImage>
  ));

  return (
    <Block>
      <PopupImage
        handleHidePopup={() => setPopupVisible(false)}
        popupVisible={popupVisible}
        imageSrc={largeImageSrc}
      />
      <Container>
        {thumbails}
      </Container>
    </Block>
  );
}

Images.propTypes = {

};

export default Images;
