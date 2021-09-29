import React from 'react';
import Image from '../image/ProfileImg.png';
import styled from "styled-components";
import { Container, Grid } from '@mui/material';
import { ICStyle } from './IntroCard';

const GTitle = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap');
  font-family: 'Bonheur Royale', cursive;
  margin-right: 10px;
`;

export const Profile: React.FC = () => {
  return(
    <>
      <Container maxWidth="md">
        <Grid container spacing={0}>
          <Grid item xs>
            <ICStyle>
            <img src={Image} />
            </ICStyle>
          </Grid>
          <Grid item xs>
            <table>
              <tbody>
                <tr>
                  <td><GTitle>Name</GTitle></td>
                  <td>Kaito Sakao</td>
                </tr>
                <tr>
                  <td><GTitle>Gender</GTitle></td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td><GTitle>Date of birth</GTitle></td>
                  <td>07/18/2000</td>
                </tr>
                <tr>
                  <td><GTitle>Birth place</GTitle></td>
                  <td>Kanazawa, Japan</td>
                </tr>
                <tr>
                  <td><GTitle>Contact</GTitle></td>
                  <td>kaito.contactDev@gmail.com</td>
                </tr>
              </tbody>
              
            </table>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}