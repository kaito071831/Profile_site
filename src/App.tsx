import React from 'react';
import { Header } from './component/Header';
import Body from './component/Body';
import { Footer } from './component/Footer';
import { Container } from '@mui/material';
import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: black;
`;

const BodyStyle = styled.div`
  /* 背景画像決まったら削除 */
  background-color: #b0c4de;
  padding: 25px 0px 10px 0px;

  /* 背景画像決まったらコメント解除
  background-image: url();
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 25px 0px 10px 0px; */
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

export const CardStyle = styled.div`
  text-align: center;
`;

export const Topic = styled(CardStyle.withComponent('h3'))`
  font-family: 'Anton', sans-serif;
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