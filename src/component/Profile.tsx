import React from 'react';
import Image from '../image/ProfileImg.png';
import styled from "styled-components";
import { Container, Grid } from '@mui/material';
import MyProf from '../json/profile.json';
import { BasicFont, CardStyle } from '../App';

const GTitle = styled.a`
  font-family: 'Anton', sans-serif;
  margin-right: 10px;
`;

export const Profile: React.FC = () => {
  return(
    <>
      <Container maxWidth="md">
        <Grid container spacing={0}>
          <Grid item xs>
            <CardStyle>
            <img src={Image} />
            </CardStyle>
          </Grid>
          <Grid item xs>
            <table>
              <tbody>
                {/* JSONファイルからプロフィールを読み出し */}
                {MyProf.profile.map((content, index) => (
                  <tr key={index}>
                    <td><GTitle>{content.title}</GTitle></td>
                    <td><BasicFont>{content.body}</BasicFont></td>
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