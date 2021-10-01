import React from 'react';
import styled from "styled-components";

type Props = {
  title: string;
  plain: JSX.Element;
  id: string;
}

export const ICStyle = styled.div`
  text-align: center;
`;

const TitleFont = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
  font-family: 'Architects Daughter', cursive;
`;

const IntroCard: React.FC<Props> = (props) => {
  const title = props.title
  const plain  = props.plain
  const id = props.id
  return(
    <>
      <article>
        <ICStyle>
          <TitleFont id={id}>{title}</TitleFont>
        </ICStyle>
        <div>
          {plain}
        </div>
      </article>
    </>
  )
}

export default IntroCard;