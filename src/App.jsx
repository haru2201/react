// import React from "react";
import { useState} from "react";
import { Card } from "./components/Card"

export const App = () => {
  // 管理者フラグ(isAdmin: 値、setIsAdmin: 関数)
  const [isAdmin, setIsAdmin] = useState(false);
  
  // 切り替え押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);
  
  return (
    <div>
      {isAdmin ? <span>監理者です</span> : <span>監理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin}></Card>
    </div>
  )
  
}