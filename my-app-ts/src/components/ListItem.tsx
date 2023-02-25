import type { FC } from "react";
import type { User } from "../types/user";

// export const ListItem = (props: User) => {
export const ListItem: FC<User> = props => {
  // const { id, name, email, personalColor } = props;
  // const { id, name, email, personalColor = "gray" } = props;
  // console.log(props);
  const { id, name, email, personalColor, company } = props;
  // console.log(company);
  return (
    <p style={{ color: personalColor }}>
      {/* {id}:{name}({email}) {company?.join(" / ")} */}
      {/* {id}:{name}({email}) {company} */}
      {id}:{name}({email})
    </p>
  );
};

ListItem.defaultProps = {
  personalColor: "red"
};
