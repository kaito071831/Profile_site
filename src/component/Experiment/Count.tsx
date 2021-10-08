import React from "react";

type cnt = {
  text: string,
  countState: any
}

export const Count = React.memo<cnt>(({text, countState}) => {
  return <p>{text}:{countState}</p>
})