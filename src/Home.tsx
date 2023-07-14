import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "./Typography";

const Home: React.FC = () => {
  return (
    <nav>
      <div>
        <NavLink className="pixelLink" to="/pixel">
          Pixel
        </NavLink>
      </div>

      <div>
        <NavLink className="remLink" to="/rems">
          Rems
        </NavLink>
      </div>

      <div className="elastifyLink">
        <NavLink to="/lmm">
          <Typography sizeMultiplier={1} type="div">
            Elastify
          </Typography>
        </NavLink>
      </div>
    </nav>
  );
};

export default Home;
