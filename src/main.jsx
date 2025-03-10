import { createRoot } from "react-dom/client";
import "./index.css";
import { Menu } from "./components/menu";
import { Main } from "./components/Main1";

createRoot(document.getElementById("root")).render(
  <>
    <Menu />
    <Main />
  </>
);
