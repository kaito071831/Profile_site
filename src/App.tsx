import React from 'react';
import { Header } from './component/Header';
import Body from './component/Body';
import { Footer } from './component/Footer';
import { Container } from '@mui/material';
import styled from "styled-components";
import Beer from './image/Beer.png';

const HeaderStyle = styled.div`
  background-color: black;
`;

const BodyStyle = styled.div`
  background-image: url(${Beer});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 10px 0px 10px 0px;
`;

const FooterStyle = styled.footer`
  background-color: #fddea5;
  height: auto;
  width: 100%;
  text-align: center;
`;

export const BasicFont = styled.a`
  font-family: 'Roboto', sans-serif;
`;

export const HFont = BasicFont.withComponent('p');

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