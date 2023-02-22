import React from 'react'

// export const ColoredMessage = () => {
// export const ColoredMessage = (props) => {
export const ColoredMessage = ({ color, children }) => {
  // console.log(props);
  // const { color, children } = props;
  const contentStyle = {
    // color: props.color,
    // color: color,
    color,
    fontSize: "20px"
  };
  
  // return <p style={contentStyle}>お元気ですか？</p>
  // return <p style={contentStyle}>{props.message}</p>
  // return <p style={contentStyle}>{props.children}</p>
  return <p style={contentStyle}>{children}</p>
}
