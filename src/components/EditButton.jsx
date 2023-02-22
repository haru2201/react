const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = props => {
  console.log("EditButton: " + props);
  const { isAdmin } = props;
  
  // isAdminがfalseの時に非活性にする
  return (
    // disabled に設定する時は反転させる
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  )
  
}

