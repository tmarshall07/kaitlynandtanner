import styled from 'styled-components';
import { darken } from 'polished';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import colors from '../helpers/colors';

import { Wrapper, Content } from '../styles/page';
import InfoBlock from '../components/blocks/index/Info';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home(props) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Hero
          imageSrc="/images/home-hero.png"
          backgroundColor={colors.themeBlue}
        />
        <InfoBlock />
        <Footer />
      </Content>
    </Wrapper>
  );
}

export default Home;
