import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background: ${(props) => props.background};
`;

const Container = styled.div`
  width: 120rem;
`;

function Block(props) {
  const {
    children,
    background,
  } = props;

  return (
    <Wrapper
      background={background}
    >
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}

Block.propTypes = {
  background: PropTypes.string,
};

Block.defaultProps = {
  background: 'none',
};

export default Block;
