import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from "styled-components";
import { Container } from '@mui/material';

const FooterArea = styled.div<{position:string}>`
  display: inline-block;
  vertical-align: middle;
  width: 33%;
  text-align: ${(props) => (props.position)};
`;

const IconMove = styled.a`
  color: gray;
  cursor: pointer;
  :hover{
    color: black;
  };
`;

export const Footer: React.FC = () => {
  return(
    <>
      <Container>
        <FooterArea position="left"/>
        
        {/* 製作者表示 */}
        <FooterArea position="center">
          <a>©Kaito Sakao 2021</a>
        </FooterArea>

        {/* アイコンエリア */}
        <FooterArea position="right">
          <IconMove onClick={twitterMove}>
            <TwitterIcon
            fontSize = "large"
            />
          </IconMove>
          <IconMove onClick={githubMove}>
            <GitHubIcon
              fontSize = "large"
            />
          </IconMove>
        </FooterArea>
      </Container>
    </>
  )
}

const twitterMove = () => {
  window.open("https://twitter.com/kaito071831", '_blank');
}

const githubMove = () => {
  window.open("https://github.com/kaito071831", '_blank');
}
