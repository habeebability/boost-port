import React from "react";
import "./Button.css";

const Button = ({ button, filter }) => {
  return (
    <div>
      {button.map((cat, i) => {
        return (
          <button
            className="my-lg-3 my-xs-2 mr-3 port-btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              return filter(cat);
            }}
          >
            {cat}
          </button>
        );
      })}

      {/* <button type="button" onClick={() => filter("boostrap")}>
        Boostrap
      </button>

      <button type="button" onClick={() => filter("website")}>
        Website
      </button>

      <button type="button" onClick={() => filter("webapp")}>
        Webapp
      </button> */}
    </div>
  );
};

export default Button;
