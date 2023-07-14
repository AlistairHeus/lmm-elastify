import React from "react";
import { NavLink } from "react-router-dom";
const Pixel: React.FC = () => {
  return (
    <div>
      <NavLink
        className="backLink"
        to="/"
        style={{
          background: "black",
          color: "white",
          marginBlock: "32px",
          fontSize: "16px",
          padding: "16px"
        }}
      >
        Go back
      </NavLink>

      <main>
        <h1
          style={{
            background: "black",
            color: "white",
            marginBlock: "32px",
            fontSize: "32px"
          }}
        >
          Pixels
        </h1>

        <section>
          <h1 className="pixelFontSize">Im a H1 tag and 32 pixels in size</h1>
        </section>
      </main>
    </div>
  );
};

export default Pixel;
