import styled from 'styled-components';
import { darken } from 'polished';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Block from '../components/Block';
import ImagesBlock from '../components/blocks/pics/Images';

import colors from '../helpers/colors';

import { Wrapper, Content } from '../styles/page';
import { H1, P } from '../styles/typography';

const StyledH1 = styled(H1)`
  margin-bottom: 1.5rem;
`;

const StyledP = styled(P)`
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 40rem;

  padding: 5rem;
`;

function Pics() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Block
          background={darken(0.1, colors.themeOrange)}
        >
          <FlexWrapper>
            <Container>
              <StyledH1 inverted>Selfie Log</StyledH1>
              <StyledP inverted>For the past 6 years, we&apos;ve kept a &quot;selfie log&quot; of all our adventures. Here are a few for your enjoyment!</StyledP>
              <StyledP inverted>Ten points for Gryffindor if you can name what state (and/or country) we&apos;re in in each photo!</StyledP>
            </Container>
          </FlexWrapper>
        </Block>
        <ImagesBlock />
        <Footer />
      </Content>
    </Wrapper>
  );
}

export default Pics;
