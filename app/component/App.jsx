import React from "react";

import Hero from "./Hero";
import Badge from "./Badge";

const App = () => {
  return (
    <>
      <Hero />
      <Badge title={"WOW"} bubble={55} /> <br />
      <Badge title={"WOW2"} bubble={535} /> <br />
      <Badge title={"WOW3"} bubble={515} /> <br />
    </>
  );
};

export default App;
