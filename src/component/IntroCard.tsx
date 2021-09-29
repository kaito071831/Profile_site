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

const IntroCard: React.FC<Props> = (props) => {
  const title = props.title
  const plain  = props.plain
  const id = props.id
  return(
    <>
      <article>
        <ICStyle>
          <h3><a id={id}>{title}</a></h3>
        </ICStyle>
        <div>
          {plain}
        </div>
      </article>
    </>
  )
}

export default IntroCard;