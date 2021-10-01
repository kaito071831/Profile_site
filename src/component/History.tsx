import React from "react";
import hist from '../json/history.json';
import { Container } from '@mui/material';
import styled from "styled-components";

const Topic = styled.h3`
  text-align: center;
`;

export const History: React.FC = () => {
  return(
    <>
      <Container maxWidth="md">
        <Topic>Educational background</Topic>
        <ul>
          {hist.school.map((data) => (
            <li>{data.history}</li>
          ))}
        </ul>
        <Topic>Internship</Topic>
        <ul>
          {hist.intern.map((inte) => (
            <li>{inte.history}</li>
          ))}
        </ul>
      </Container>
    </>
  )
}