import React from "react";
import styled from "styled-components";

// 画像パス
import Karaoke from '../image/karaoke.png';
import Anime from '../image/anime.png';
import Comic from '../image/comic.png';
import Cycling from '../image/Cycling.png';
import Beer from '../image/Beer.png';

type Props = {
  name: string;
}

export const HCardStyle = styled.div`
  text-align: center;
`;

export const HobbyCard: React.FC<Props> = ({ name }) => {
  return(
    <>
      <HCardStyle>
        {(()=>{
          switch(name){
            case "Karaoke":
              return <img src={Karaoke}/>
            case "Watch anime":
              return <img src={Anime}/>
            case "Read comic":
              return <img src={Comic}/>
            case "Cycling":
              return <img src={Cycling}/>
            case "Drink beer":
              return <img src={Beer}/>
          }
        })()}
        <p>{name}</p>
      </HCardStyle>
    </>
  )
}