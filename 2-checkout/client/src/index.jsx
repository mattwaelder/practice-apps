import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx"

render(
  <div>
    <App cookie={JSON.stringify(document.cookie, undefined, "\t")}/>
    {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
  </div>,
  document.getElementById("root")
);
