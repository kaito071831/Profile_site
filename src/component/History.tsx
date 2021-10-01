import React from "react";
import hist from '../json/history.json';
import { Container } from '@mui/material';
import { HCardStyle } from "./HobbyCard";

const Topic = HCardStyle.withComponent('h3')

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