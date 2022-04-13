import React from "react";
import { Contexts } from "./src/contexts";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <Contexts>
      <Home />
    </Contexts>
  );
}
