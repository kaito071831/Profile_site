import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Container } from '@mui/material';
import styled from "styled-components";
import Background from './image/background.jpg';

//トップページ
import Top from './pages/Top';

//実験用ページ
import Experiment from './pages/Experiment';
import Skill from './pages/Skill';

const HeaderStyle = styled.div`
  background-color: black;
`;

const BodyStyle = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 25px 0px 10px 0px;
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

const Pages = (Component: React.FC) => {
  return(
    <>
      {/* ヘッダー */}
      <HeaderStyle>
        <Header />
      </HeaderStyle>

      {/* ボディー */}
      <BodyStyle>
        <Container maxWidth="lg">
          <Component />
        </Container>
      </BodyStyle>

      {/* フッター */}
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </>
  )
}

// 通常のルーティング用App関数
const App: React.FC = () => {
  return(
    <>
      <BrowserRouter>
        <Router>
          <Switch>
            <Route path="/skill">{Pages(Skill)}</Route>
            <Route path="/practice">{Pages(Experiment)}</Route>
            <Route exact path="/">{Pages(Top)}</Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </>
  )
}

// GitHub Pages用App関数
// const App: React.FC = () => {
//   return(
//     <>
//       <BrowserRouter>
//         <Router>
//           <Switch>
//             <Route exact path={process.env.PUBLIC_URL + '/'}>{Pages(Top)}</Route>
//           </Switch>
//         </Router>
//       </BrowserRouter>
//     </>
//   )
// }

export default App;