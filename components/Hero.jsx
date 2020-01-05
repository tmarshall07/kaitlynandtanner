import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${(props) => props.backgroundColor && css`
    background: ${props.backgroundColor};
  `}
`;

const ImageContainer = styled.div`
  max-width: 600px;
  padding: 5rem;
  img {
    width: 100%;
  }
`;

function Hero(props) {
  const {
    imageSrc,
    backgroundColor,
  } = props;

  return (
    <Container
      backgroundColor={backgroundColor}
    >
      <ImageContainer>
        <img
          src={imageSrc}
          alt="Kat and Tanner's Wedding"
        />
      </ImageContainer>
    </Container>
  );
}

Hero.propTypes = {
  imageSrc: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Hero.defaultProps = {
  imageSrc: '',
  backgroundColor: 'none',
};

export default Hero;
