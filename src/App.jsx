import React from "react";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";

import "./app.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
    </div>
  );
};

export default App;
