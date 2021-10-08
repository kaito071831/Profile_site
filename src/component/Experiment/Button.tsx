import React from "react";

type btn = {
  handleClick: any,
  value: string
}

export const Button = React.memo<btn>(({handleClick, value}) => {
  return <button type="button" onClick={handleClick}>{value}</button>
})