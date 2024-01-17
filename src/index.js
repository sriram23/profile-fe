import { StrictMode } from "react";
import {createRoot} from "react-dom/client";

import App from "./App";
import * as dotenv from 'dotenv';
dotenv.config()

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
