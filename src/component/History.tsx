import React from "react";
import hist from '../json/history.json';
import { Container } from '@mui/material';
import { HCardStyle } from "./HobbyCard";
import { BasicFont } from "../App";

const Topic = HCardStyle.withComponent('h3')

export const History: React.FC = () => {
  return(
    <>
      <Container maxWidth="md">
        <Topic>Educational background</Topic>
        <ul>
          {hist.school.map((data, index) => (
            <li key={index}><BasicFont>{data.history}</BasicFont></li>
          ))}
        </ul>
        <Topic>Internship</Topic>
        <ul>
          {hist.intern.map((inte, index) => (
            <li key={index}><BasicFont>{inte.history}</BasicFont></li>
          ))}
        </ul>
      </Container>
    </>
  )
}