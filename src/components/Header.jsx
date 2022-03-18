import React from "react";
import { useEffect, useRef } from "react";

import "./Header.css";
import heroImage from "../images/illus-1.svg";
import Particles from "react-tsparticles";
import Typed from "typed.js";

const Header = () => {
  const titleTexts = useRef(null);

  useEffect(() => {
    const typed = new Typed(titleTexts.current, {
      strings: [
        "HELLO, I AM HABEEB AWOYEMI",
        "A FRONTEND DEVELOPER",
        "TECHNICAL WRITER",
        "YOUTUBER",
        "FRONTEND DEVELOPER, DESIGNER",
        // "FRONTEND DEVELOPER, DESIGNER",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="header container">
      {/* <div className="main-info">
        <h1>Hi, my name is Habeeb. Frontend Developer from Nigeria</h1>
      </div> */}
      {/* <div className="particle-div">
        
      </div> */}
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 1803.4120608655228,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#000000",
              },
              polygon: {
                nb_sides: 4,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.4008530152163807,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 0,
              color: "#ffffff",
              opacity: 0.3687847739990702,
              width: 0.6413648243462091,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />

      <div class="row justify-content-center align-items-center h-100 header-row">
        <div class="col-lg-8 col-md-6 col-xs-12 header-info">
          <h3 className="" ref={titleTexts}></h3>
          <h1 className="primary-heading">
            I design digital crafts for clients.
          </h1>
          <button className="btn btn-main btn-lg text-white px-lg-5 py-lg-3 px-xs-4 py-xs-2">
            Explore works
          </button>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 hero-image">
          <img
            className="img-responsive w-100"
            src={heroImage}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
