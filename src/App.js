import React from "react";
import { Header } from "./components/Header";
import element from "routes.js"

function App() {
  return (
    <div>
      <Header />
      {element}
    </div>
  );
}

export default App;