import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Animation from './Animation';
import { fadeUp, fade, scale } from '../helpers/animations';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: none;

  ${(props) => props.isVisible && css`
    pointer-events: initial;
  `}
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;

  top: 0;
  left: 0;

  background: ${transparentize(0.5, 'black')};
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 5px;

  max-width: 95%;

  position: relative;
  z-index: 1;

  img {
    width: 100%;
  }
`;

class PopupImage extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current);
    // window.EXIF.getData(this.imageRef.current, function () {
    //   console.log(EXIF.getTag('Make'));
    // });
  }

  render() {
    const {
      imageSrc,
      handleHidePopup,
      popupVisible,
    } = this.props;
  
    return (
      <Container
        onClick={handleHidePopup}
        isVisible={popupVisible}
      >
        <Animation
          isVisible={popupVisible}
          animIn={scale.in}
          animOut={scale.out}
        >
          <FlexContainer>
            <ImageContainer>
              <img ref={this.imageRef} alt="Selfie log" src={imageSrc} />
            </ImageContainer>
          </FlexContainer>
        </Animation>
        <Animation
          isVisible={popupVisible}
          animIn={fade.in}
          animOut={fade.out}
        >
          <Background />
        </Animation>
      </Container>
    );
  }
}

PopupImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  handleHidePopup: PropTypes.func.isRequired,
};

export default PopupImage;
