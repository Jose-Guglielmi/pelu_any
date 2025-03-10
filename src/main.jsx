import { createRoot } from "react-dom/client";
import "./index.css";
import { Menu } from "/src/components/menu.jsx";
import { Main1 } from "/src/components/Main1.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Menu />
    <Main1 />
  </>
);
