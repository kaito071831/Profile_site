// Hooksに必要な関数をインポート
import React, { useState, useEffect, createContext, useReducer } from "react";
import { StageA } from '../component/Experiment/StageA';

// コンテクストの作成
export const CountContext = createContext(0);

// counterの初期値を定義と宣言
const reduceState = {
  firstCounter: 0,
  secondCounter: 100
}

// dispatch関数を呼び出すと実際に呼び出される関数
const reducerFunction = (countState: any, action: any) => {
  switch(action.type){
    case 'increment1':
      return{
        countState, firstCounter: countState.firstCounter + action.value,
        secondCounter: countState.secondCounter
      }

    case 'decrement1':
      return{
        countState, firstCounter: countState.firstCounter - action.value,
        secondCounter: countState.secondCounter
      };

    case 'increment2':
      return{
        countState, secondCounter: countState.secondCounter + action.value,
        firstCounter: countState.firstCounter
      };

    case 'decrement2':
      return{
        countState, secondCounter: countState.secondCounter - action.value,
        firstCounter: countState.firstCounter
      };

    case 'reset1':
      return{
        countState, firstCounter: reduceState.firstCounter,
        secondCounter: reduceState.secondCounter
      };

    case 'reset2':
      return{
        countState, secondCounter: reduceState.secondCounter,
        firstCounter: reduceState.firstCounter
      };

    default:
      return countState;
  }
}

// JSXを返す関数
const Experiment: React.FC = () => {
  const initialState = 0;

  // useStateを定義(stateであるcountとcountの値を変える関数setCountを定義)
  const [count, setCount] = useState(initialState);

  // userReducer関数の返り値として変数counterと関数dispatchを返す
  const [counter, dispatch] = useReducer(reducerFunction, reduceState);

  // useEffectを定義(countの値が変化したときレンダリングする)
  useEffect(() => {
    document.title = `${count}`
    },[count]);
  return(
    <>
      <h1>実験ページテスト</h1>
      {/* useState, useEffect用 */}
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(initialState)}>リセット</button>
      </div>

      {/* useReducer用 */}
      <div>
        <p>{counter.firstCounter}</p>
        <button onClick={() => dispatch({type: 'increment1', value: 1})}>increment1</button>
        <button onClick={() => dispatch({type: 'decrement1', value: 1})}>decrement1</button>
        <button onClick={() => dispatch({type: 'reset1'})}>reset</button>
      </div>
      <div>
        <p>{counter.secondCounter}</p>
        <button onClick={() => dispatch({type: 'increment2', value: 100})}>increment2</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 100})}>decrement2</button>
        <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
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