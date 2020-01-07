import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faClipboardList, faTshirt } from '@fortawesome/pro-duotone-svg-icons';

import styled from 'styled-components';
import { transparentize, lighten, darken } from 'polished';
import ActiveLink from './ActiveLink';

import colors from '../helpers/colors';

library.add(faMapMarkerAlt, faClipboardList, faTshirt);

const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 1rem 0;

  /* background: ${colors.teal}; */
`;

const LinkContainer = styled.div`
  padding: 1rem 1.5rem;
  cursor: pointer;
  border-radius: 3px;

  color: ${colors.grey};

  :not(:last-child) {
    margin-right: 1rem;
  }

  transition: 50ms all ease-in-out;

  :hover { background: ${transparentize(0.95, 'black')}; }
  :active { background: ${transparentize(0.9, 'black')}; }

  &.active {
    background: ${lighten(0.4, colors.themeBlue)};
    color: ${darken(.05, colors.themeBlue)};

    &.purple {
      background: ${lighten(0.5, colors.themePurple)};
      color: ${colors.themePurple};
    }
    
    &.orange {
      background: ${lighten(0.34, colors.themeOrange)};
      color: ${darken(0.15, colors.themeOrange)};
    }
  }
`;

const LinkText = styled.p`
  margin: 0;

  font-size: 2rem;
  font-weight: bold;
`;

function Header() {
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500,700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/ef00d42d41.js" crossOrigin="anonymous" />
      </Head>
      <style jsx global>
        {`
        html {
          font-size: 62.5%;
          font-family: Quicksand;
        }
        body {
          margin: 0;
        }
        p { font-size: 1.6rem; }
        h1 { font-size: 3.2rem; }
        h2 { font-size: 2.4rem; }
        h3 { font-size: 1.8rem; }
        h4 { font-size: 1.6rem; }
        h5 { font-size: 1.6rem; }
        img { display: block }
      `}
      </style>
      <ActiveLink activeClassName="active blue" href="/">
        <LinkContainer>
          <LinkText>Home</LinkText>
        </LinkContainer>
      </ActiveLink>
      <ActiveLink activeClassName="active purple" href="/info">
        <LinkContainer>
          <LinkText>Info</LinkText>
        </LinkContainer>
      </ActiveLink>
      <ActiveLink activeClassName="active orange" href="/pics">
        <LinkContainer>
          <LinkText>Pics</LinkText>
        </LinkContainer>
      </ActiveLink>
      <ActiveLink activeClassName="active blue" href="/rsvp">
        <LinkContainer>
          <LinkText>RSVP</LinkText>
        </LinkContainer>
      </ActiveLink>
    </Container>
  );
}

export default Header;
