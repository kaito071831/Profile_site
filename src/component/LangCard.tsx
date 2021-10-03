import React from "react";
import styled from "styled-components";
import { HFont } from "../App";

export const LCardStyle = styled.div`
  display: block;
  text-align: center;
`;

type Props = {
  name: string;
  image: string;
}

const LangCard: React.FC<Props> = ({name, image}) => {
  return(
    <>
      <LCardStyle>
        <img src={image} alt="" />
        <HFont>{name}</HFont>
      </LCardStyle>
    </>
  )
}

export default LangCard;