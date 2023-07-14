import React from "react";
import { NavLink } from "react-router-dom";

const REMPage: React.FC = () => {
  // const customProvidedSize = 2;
  // const fontUnit = rems

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
          Rems
        </h1>

        <section>
          <h1 className="remFontSize">Im a H1 tag and im 2 rems in size.</h1>
        </section>
      </main>
    </div>
  );
};

export default REMPage;
