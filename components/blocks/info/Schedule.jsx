import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import { transparentize } from 'polished';
import Block from '../../Block';
import colors from '../../../helpers/colors';
import { desktopMin } from '../../../helpers/breakpoints';

import {
  H2, H3, P,
} from '../../../styles/typography';

import {
  Column,
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

const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;

  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Text = styled(H3)`
  margin: 0;
`;

const LightText = styled.span`
  color: ${transparentize(0.2, colors.grey)};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const events = [
  { time: '6:00pm', text: 'Ceremony', description: 'We\'ll be having a relatively short "ceremony" on the patio where we\'ll read our vows, exchange rings, and probably cry.' },
  { time: '6:30pm', text: 'Cocktail hour', description: 'Loosen up, enjoy some drinks, mingle, and play games (oh yes—there will be games).' },
  { time: '7:30pm', text: 'Dinner', description: 'Enjoy a variety of vegetarian cuisines courtesy of our beloved li\'l sister and emeritus director of Slow Food Madison.' },
  { time: '8:30pm', text: 'Dancing / Partying', description: 'Feel free to dance, continue gaming, mingling, drinking, etc. We just want to hang out with y\'all!' },
  { time: '11:00pm', text: 'Lakes and Legends Brewery', description: 'For the night owls out there, we\'ll be heading over to another brewery for a more chilled out night cap.' },
];

const eventsComponents = events.map((event) => (
  <ItemContainer key={event.time}>
    <FlexContainer>
      <Text>{event.time}</Text>
      <Text><LightText>&nbsp;-&nbsp;</LightText></Text>
    </FlexContainer>
    <div>
      <Text>{event.text}</Text>
      <P>{event.description}</P>
    </div>

  </ItemContainer>
));

function Schedule() {
  return (
    <Block>
      <Container>
        <StyledColumn>
          <Header>
            <Icon icon={['fad', 'clipboard-list']} />
            Schedule
          </Header>
          <StyledP>The approximate schedule of events. Don&apos;t be alarmed if there&apos;re slight deviations from the plan.</StyledP>
          {eventsComponents}
        </StyledColumn>
      </Container>
    </Block>
  );
}

Schedule.propTypes = {

};

export default Schedule;
