import React from 'react';
import { Header } from './component/Header';
import Body from './component/Body';
import { Footer } from './component/Footer';
import { Container } from '@mui/material';
import styled from "styled-components";
import Beer from './image/Beer.png';

const HeaderStyle = styled.div`
  background-color: green;
`;

const BodyStyle = styled.div`
  background-image: url(${Beer});
  background-size: cover;
  padding: 10px 0px 10px 0px;
`;

const FooterStyle = styled.footer`
  background-color: #fddea5;
  height: auto;
  width: 100%;
  text-align: center;
`;

const App:React.FC = () => {
  return(
    <>
      {/* ヘッダー */}
      <HeaderStyle>
        <Header />
      </HeaderStyle>

      {/* ボディー */}
      <BodyStyle>
        <Container maxWidth="lg">
          <Body />
        </Container>
      </BodyStyle>

      {/* フッター */}
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </>
  )
}

export default App;