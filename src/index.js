// import React from "react";

// import { render } from 'react-dom';
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import { App } from "./App";

// import { createRoot } from 'react-dom/client';

// import { Fragment } from "react";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";


// const App = () => {
//   // return null;
//   // return <h1>こんにちは！</h1>
//   return (
//     // <Fragment>
//     //   <h1>こんにちは！</h1>
//     //   <p>お元気ですか？</p>
//     // </Fragment>
//     <>
//       <h1>こんにちは！</h1>
//       <p>お元気ですか？</p>
//     </>
//   );
// };

// const container = document.getElementById('root');
// // console.log(container);
// const root = createRoot(container);
// console.log(root);
// root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
// const root = createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>
  // document.getElementById("root")
);
