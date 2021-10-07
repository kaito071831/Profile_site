// <CountContext.Provider value={count}>で
// 送られたコンテクストであるcountを使うための関数useContextをインポートする。
import React, {useContext} from "react";

// 使用したいコンテクストをインポート
import { CountContext } from '../../pages/Experiment';

export const StageB: React.FC = () => {
  // countにuseContext関数を用いて引数であるCountContextを代入
  const count = useContext(CountContext);
  return(
    <p>{count}</p>
  )
}