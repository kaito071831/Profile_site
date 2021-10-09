import React, {useState, useEffect} from "react";

const word: string[] = ["W", "e", "l", "c", "o", "m", "e", "Welcome"];

// let count: number = 0;

const Skill = () => {
  const [count, setCount] = useState<number>(0);
  const intarval = useEffect(
    () => {
      const inID = setInterval(() => setCount(count + 1), 2000);
      if(count > word.length - 1){
        setCount(0);
        clearInterval(inID);
      }
    },
    [count]
  )
  
  return(
    <>
      {
        <p>{word[count]}</p>
      }
    </>
  )
}

export default Skill;