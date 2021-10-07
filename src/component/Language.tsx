import React from "react";
import LangCard from "./LangCard";
import styled from "styled-components";
import { Container } from '@mui/material';
import {sp, tab, pc} from '../media';

// 画像パス
import HTML from "../image/html5.png";
import CSS from "../image/CSS.png";
import Java from "../image/Java.png";
import JavaScript from "../image/JavaScript.png";
import Python from "../image/Python.png";
import PHP from "../image/PHP.png";
import Ruby from "../image/Ruby.png";


export const LangStyle = styled.div<{scope:string}>`
  display: inline-block;
  width: ${(props) => (props.scope)};
  ${sp`
    display: block;
    width: 100%;
  `}
  ${tab`
    display: inline-block;
    width: 50%;
  `}
  ${pc`
    display: inline-block;
  `}
`;

export const Language: React.FC = () => {
  return(
    <>
      <Container maxWidth="md">
        <div>
          <LangStyle scope="25%">
            <LangCard 
              name = 'HTML'
              image = {HTML}
            />
          </LangStyle>
          <LangStyle scope="25%">
            <LangCard 
              name = 'CSS'
              image = {CSS}
            />
          </LangStyle>
          <LangStyle scope="25%">
            <LangCard
              name = 'Java'
              image = {Java}
            />
          </LangStyle>
          <LangStyle scope="25%">
            <LangCard
              name = 'JavaScript'
              image = {JavaScript}
            />
          </LangStyle>
        </div>
        <div>
          <LangStyle scope="33%">
            <LangCard
              name = 'Python'
              image = {Python}
            />
          </LangStyle>
          <LangStyle scope="33%">
            <LangCard
              name = 'PHP'
              image = {PHP}
            />
          </LangStyle>
          <LangStyle scope="33%">
            <LangCard
              name = 'Ruby'
              image = {Ruby}
            />
          </LangStyle>
        </div>
      </Container>
    </>
  )
}