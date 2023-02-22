import { createContext, useState } from "react";

// 引数にデフォルト値を設定。監理者フラグを入れるためのContext
export const AdminFlagContext = createContext({});
// console.log("AdminFlagContext: " + AdminFlagContext);

export const AdminFlagProvider = props => {
  const { children } = props;
  
  // 管理者フラグ（setIsAdminはisAdminを更新するために使用）
  const [ isAdmin, setIsAdmin ] = useState(false);
  
  // 動作確認のため
  // const sampleObj = { sampleValue: "テスト" };
  
  // Providerでchildrenを囲む
  // valueにグローバルに扱う値を設定  
  // <AdminFlagContext.Provider value={sampleObj}>
  <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
    {children}
  </AdminFlagContext.Provider>
}