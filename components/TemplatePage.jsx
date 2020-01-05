import Header from '../components/Header';
import Footer from '../components/Footer';
import Block from '../components/Block';

import colors from '../helpers/colors';

import { Wrapper, Content } from '../styles/page';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Page() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Block>
          <Container>

          </Container>
        </Block>
        <Footer />
      </Content>
    </Wrapper>
  );
}

export default Page;
