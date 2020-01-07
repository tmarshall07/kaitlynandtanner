import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { transparentize } from 'polished';

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  top: 0;
  left: 0;

  background: ${transparentize(0.5, 'black')};

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

const Image = styled.div`
  overflow: hidden;
  border-radius: 5px;

  max-width: 95%;

  img {
    width: 100%;
  }
`;

function PopupImage(props) {
  const {
    imageSrc,
    handleHidePopup,
  } = props;

  return (
    <Container
      onClick={handleHidePopup}
    >
      <Image>
        <img alt="Selfie log" src={imageSrc} />
      </Image>
    </Container>
  );
}

PopupImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  handleHidePopup: PropTypes.string.isRequired,
};

export default PopupImage;
