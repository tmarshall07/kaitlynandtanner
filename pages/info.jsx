import styled from 'styled-components';
import { lighten } from 'polished';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationBlock from '../components/blocks/info/Location';
import ScheduleBlock from '../components/blocks/info/Schedule';
import DressCodeBlock from '../components/blocks/info/DressCode';

import colors from '../helpers/colors';

import { Wrapper, Content } from '../styles/page';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  margin: 2rem;

  height: 2px;
  background: ${lighten(.45, colors.grey)};
`;

function Info() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <LocationBlock />
        <ScheduleBlock />
        <Divider />
        <DressCodeBlock />
        <Footer />
      </Content>
    </Wrapper>
  );
}

export default Info;
