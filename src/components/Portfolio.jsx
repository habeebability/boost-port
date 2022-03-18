import React, { useEffect } from "react";
import { useState } from "react";
import items from "../components/portfolio-data";
import Button from "./Button";

import Menu from "./Menu";
import "./Portfolio.css";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];
console.log(allCategories);
const Portfolio = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div className="container portfolio">
      <h3>Portfolio</h3>
      <Button button={buttons} filter={filter} />
      <div className="menu-div my-3">
        <Menu menuItem={menuItem} />
      </div>
    </div>
  );
};

export default Portfolio;
