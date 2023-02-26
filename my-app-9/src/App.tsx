import { useState } from "react";
import axios from "axios";

export const App = () => {
  const [userList, setUserList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => {
    setIsLoading(true);
    setIsError(false);
    
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(result => {
        console.log("result: " + result);
        const users = result.data.map(user => ({
          id: user.id,
          name: `${user.name} ${user.username}`,
          email: user.email
        }));
        // ユーザー一覧Stateを更新
        setUserList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  
  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {isLoading ? (
        <p>データ取得中です</p>
      ) : (
        userList.map(user => (
          <p key={user.id}>{`${user.id}:${user.name} (${user.email})`}</p>
        ))
      )}
    </div>
  );
};