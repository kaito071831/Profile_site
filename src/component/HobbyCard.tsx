import React from "react";

// 画像パス
import Karaoke from '../image/karaoke.png';
import Anime from '../image/anime.png';
import Comic from '../image/comic.png';
import Cycling from '../image/Cycling.png';
import Beer from '../image/Beer.png';
import { HFont } from '../App';
import { CardStyle } from '../App';

type Props = {
  name: string;
}

export const HobbyCard: React.FC<Props> = ({ name }) => {
  return(
    <>
      <CardStyle>
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
        <HFont>{name}</HFont>
      </CardStyle>
    </>
  )
}