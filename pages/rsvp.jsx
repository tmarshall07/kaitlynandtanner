import styled from 'styled-components';
import { darken } from 'polished';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Block from '../components/Block';
import colors from '../helpers/colors';

import { Wrapper, Content } from '../styles/page';
import { H2, P } from '../styles/typography';


const IFrameContainer = styled.div`
  padding: 3rem;
`;

const IFrame = styled.iframe`
  width: 100%;
  border: none;
`;

const BlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 3rem;
`;

const Heading = styled(H2)`
  margin-bottom: 1rem;
  text-align: center;
`;

const Text = styled(P)`
  max-width: 45rem;

  text-align: center;
`;

function RSVP() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Block
          background={colors.themeBlue}
        >
          <BlockContainer>
            <Heading inverted>
              Let us know if you&apos;re coming!
            </Heading>
            <Text inverted>
              Please fill this out for yourself and your plus one. If you don&apos;t, we&apos;ll annoy you via text, email, Facebook, etc.
            </Text>
          </BlockContainer>
        </Block>
        <IFrameContainer>
          <IFrame src="https://docs.google.com/forms/d/e/1FAIpQLSdmXRiGD1D-YtV9jUf8IkGRxb5mJi4dbdSyMdo_drNJAFXCiw/viewform?embedded=true" width="640" height="1086" frameborder="0" marginheight="0" marginwidth="0">Loading…</IFrame>
        </IFrameContainer>
        <Footer />
      </Content>
    </Wrapper>
  );
}

export default RSVP;
