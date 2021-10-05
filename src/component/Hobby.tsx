import React from "react";
import { Container } from '@mui/material';
import { HobbyCard } from './HobbyCard';
import Data from '../json/hobby.json';
import styled from "styled-components";
import {sp, tab, pc} from '../media';

const HStyle = styled.div`
  ${sp`
    display: block;
    width: 100%;
  `}
  ${tab`
    display: block;
    width: 100%;
  `}
  ${pc`
    display: inline-box;
    margin-right: 20px;
  `}
`;

export const Hobby: React.FC = () => {
  return(
    <>
      <Container maxWidth="lg">
        
        {/* JSONファイルから趣味を読み出し */}
        {Data.hobby.map((item, index) => (
          <HStyle key={index}>
            <HobbyCard name = {item.name} />
          </HStyle>
        ))}
      </Container>
    </>
  )
}
