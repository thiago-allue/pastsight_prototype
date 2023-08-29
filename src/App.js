import React from "react";
import { RoutesComponent } from "./routes.js";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <RoutesComponent />
    </div>
  );
}

export default App;