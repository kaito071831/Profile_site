import React from "react";
import styled from "styled-components";

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
        <p>{name}</p>
      </LCardStyle>
    </>
  )
}

export default LangCard;