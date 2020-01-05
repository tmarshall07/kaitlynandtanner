import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import { transparentize } from 'polished';
import Block from '../../Block';
import colors from '../../../helpers/colors';
import { desktopMin } from '../../../helpers/breakpoints';

import {
  H3, P,
} from '../../../styles/typography';

import {
  Image, Column,
} from '../../../styles/page';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

const StyledImage = styled(Image)`
  max-width: 30rem;
  margin-bottom: 3rem;

  @media ${desktopMin} {
    margin-bottom: 0;
  }
`;

const Header = styled.h1`
  font-size: 2.4rem;
  color: ${transparentize(0.1, 'white')};
  margin: 0;
`;

const Main = styled.h1`
  font-size: 3.2rem;
  color: white;

  cursor: pointer;

  border-radius: 3px;

  padding: .5rem 1rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  :hover {
    background: ${transparentize(0.9, 'white')};
  }
`;

const Address = styled(H3)`
  color: ${transparentize(0.1, 'white')};
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  @media ${desktopMin} {
    flex-direction: row;
  }
`;

const Description = styled(P)`
  max-width: 40rem;
  color: ${transparentize(0.2, 'white')};

  a {
    color: ${transparentize(0.1, 'white')};
    font-weight: bold;
  }
`;

const openTab = () => {
  window.open('https://finnegans.org/taproom/');
};

function Location() {
  return (
    <Block
      background={colors.themePurple}
    >
      <Container>
        <Column>
          <Header>
            <Icon icon={['fad', 'map-marker-alt']} />
            Location
          </Header>
          <Main onClick={openTab}>Finnegans Brew Co.</Main>
          <Address>817 S 5th Ave, Minneapolis, MN 55404</Address>
          <Description>
            An amazing woman-owned brewery in downtown Minneapolis that donates&nbsp;
            <a href="https://finnegans.org/community-fund-about/" target="_blank" rel="noopener noreferrer">100% of profits back into the community</a>
            . We&apos;re incredibly grateful to have the entire first floor taproom as well as the outdoor patio to celebrate and enjoy each other&apos;s company.
          </Description>
        </Column>
        <Column>
          <StyledImage>
            <img alt="Minnesota" src="/images/minnesota.png" />
          </StyledImage>
        </Column>
      </Container>
    </Block>
  );
}

Location.propTypes = {

};

export default Location;
