import React from 'react';
import styled from "styled-components";
import { CardStyle } from '../App';

type Props = {
  title: string;
  plain: JSX.Element;
  id: string;
}

const TitleFont = styled.h2`
  font-family: 'Architects Daughter', cursive;
`;

const IntroCard: React.FC<Props> = (props) => {
  const title = props.title
  const plain  = props.plain
  const id = props.id
  return(
    <>
      <article>
        <CardStyle>
          <TitleFont id={id}>{title}</TitleFont>
        </CardStyle>
        <div>
          {plain}
        </div>
      </article>
    </>
  )
}

export default IntroCard;