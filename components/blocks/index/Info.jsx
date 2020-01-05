import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components';
import { lighten, transparentize } from 'polished';
import Block from '../../Block';
import colors from '../../../helpers/colors';

import { H1, P } from '../../../styles/typography';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

const Text = styled(P)`
  font-size: 2.4rem;
  margin: 0;
`;

const Date = styled(H1)`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Location = styled(Text)`
  font-size: 1.8rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem;
`;

function Info(props) {
  return (
    <Block>
      <Container>
        <Text>We&apos;re getting married!</Text>
        <Date>July 25th, 2020</Date>
        <Location>
          <Icon icon={['fad', 'map-marker-alt']} />
          Minneapolis, MN
        </Location>
      </Container>
    </Block>
  );
}

Info.propTypes = {

};

export default Info;
