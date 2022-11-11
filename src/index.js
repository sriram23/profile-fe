import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as dotenv from 'dotenv';
dotenv.config()

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
