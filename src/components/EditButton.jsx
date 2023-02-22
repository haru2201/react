import { useContext } from "react";

import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

// export const EditButton = props => {
  // console.log("EditButton: " + props);
  // const { isAdmin } = props;
export const EditButton = () => {
  // ContextのisAdminを取得
  const { isAdmin } = useContext(AdminFlagContext);
  
  // useContextの引数にContextを指定
  // const contextValue = useContext(AdminFlagContext);
  // console.log("EditButton -> ContextValue: " + contextValue);
  
  // isAdminがfalseの時に非活性にする
  return (
    // disabled に設定する時は反転させる
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  )
  
}

