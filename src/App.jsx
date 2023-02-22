// import React from "react";
import { useContext } from "react";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
// import { useState} from "react";
import { Card } from "./components/Card"

import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

export const App = () => {
  // 管理者フラグ(isAdmin: 値、setIsAdmin: 関数)
  // const [isAdmin, setIsAdmin] = useState(false);
  // Context内のisAdminと更新関数を取得
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  
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