import React from "react";
import { Container } from '@mui/material';
import { HobbyCard } from './HobbyCard';
import Data from '../json/hobby.json';
import styled from "styled-components";

const HStyle = styled.div`
  display: inline-block;
  margin-right: 20px;
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
