import React from "react";
import App from "./App";
import "./index.css";
import  ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

function Main() {
  return (
    <>
      <App />
    </>
  );
}

const root = document.getElementById("root");
const rootContainer= ReactDOM.createRoot(root);
rootContainer.render(<Main/>)

