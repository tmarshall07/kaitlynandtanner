import React from 'react';

import styled from 'styled-components';

import Block from '../../Block';
import elevations from '../../../helpers/elevations';

import {
  Image,
} from '../../../styles/page';

const StyledImage = styled(Image)`
  height: 20rem;
  border-radius: 5px;
  overflow: hidden;

  margin: 1.5rem;

  transition: all .1s ease-in-out;

  cursor: pointer;
  img {
    width: unset;
    height: 100%;
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

const numPhotos = 73;
const images = [];
for (let i = 0; i < numPhotos; i += 1) {
  images.push(`https://kaitlynandtanner.s3.us-east-2.amazonaws.com/pics/thumbs/${i}.jpg`);
}

const thumbails = images.map((image) => (
  <StyledImage>
    <img alt="Selfie" src={image} />
  </StyledImage>
));

function Images() {
  return (
    <Block>
      <Container>
        {thumbails}
      </Container>
    </Block>
  );
}

Images.propTypes = {

};

export default Images;
