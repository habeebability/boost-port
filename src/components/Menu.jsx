import React from "react";
import "./Menu.css";
import { motion } from "framer-motion";

const Menu = ({ menuItem }) => {
  return (
    <motion.div layout className="portfolio-grid">
      {menuItem.map((item) => {
        return (
          <motion.div layout className="item-container" key={item.id}>
            <div className="item-card">
              <img src={item.image} alt="" />
              <h2 className="mt-3">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Menu;
