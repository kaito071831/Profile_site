import React from 'react';
import Image from '../image/ProfileImg.png';
import styled from "styled-components";
import { Container, Grid } from '@mui/material';
import { ICStyle } from './IntroCard';
import MyProf from '../json/profile.json';

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
                {MyProf.profile.map((content, index) => (
                  <tr key={index}>
                    <td><GTitle>{content.title}</GTitle></td>
                    <td>{content.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}