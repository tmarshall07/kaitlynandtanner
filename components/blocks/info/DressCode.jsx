import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import Block from '../../Block';
import {
  H2, P,
} from '../../../styles/typography';
import { desktopMin } from '../../../helpers/breakpoints';

import {
  Image, Column,
} from '../../../styles/page';

const StyledColumn = styled(Column)`
  @media ${desktopMin} {
    max-width: 50rem;
  }
`;

const StyledP = styled(P)`
  margin-bottom: 2rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

const Header = styled(H2)`
  margin: 0;
  margin-bottom: 2.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;
`;

function DressCode() {
  return (
    <Block>
      <Container>
        <StyledColumn>
          <Header>
            <Icon icon={['fad', 'tshirt']} />
            Dress Code
          </Header>
          <StyledP>We think the company and the celebration is way more important than worrying about clothes, hair, and makeup. That said, there&apos;s no explicit dress code. Wear whatever makes you feel comfortable! Here&apos;re some suggestions:</StyledP>
          <Image>
            <img src="/images/dress-code.png" />
          </Image>
        </StyledColumn>
      </Container>
    </Block>
  );
}

DressCode.propTypes = {

};

export default DressCode;
