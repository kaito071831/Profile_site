// Hooksに必要な関数をインポート
import React, { useState, useEffect, createContext } from "react";
import { StageA } from '../component/Experiment/StageA';

// コンテクストの作成
export const CountContext = createContext(0);

const Experiment: React.FC = () => {
  const initialState = 0;

  // useStateを定義(stateであるcountとcountの値を変える関数setCountを定義)
  const [count, setCount] = useState(initialState);

  // useEffectを定義(countの値が変化したときレンダリングする)
  useEffect(() => {
    document.title = `${count}`
  },[count]);
  
  return(
    <>
      <h1>実験ページテスト</h1>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(initialState)}>リセット</button>
      </div>

      {/* <CountContext.Provider value={count}>で挟んだタグの中にコンテクストである値countを送る */}
      <div>
        <CountContext.Provider value={count}>
          <StageA />
        </CountContext.Provider>
      </div>
    </>
  )
}

export default Experiment;