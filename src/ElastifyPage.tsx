import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "./Typography";
import Section from "./Section";
import Main from "./Main";

const ElastifyPage: React.FC = () => {
  return (
    <Section className="customSection" paddingMultiplier={2}>
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

      <header>
        <Typography sizeMultiplier={1} type="h1">
          Elastify
        </Typography>
      </header>

      <Main className="customMain">
        <section>
          <Typography type="h1" sizeMultiplier={1.2}>
            H1 Tag 1.2x original Elastified
          </Typography>
          <Typography type="h1" sizeMultiplier={1}>
            H1 Tag original Elastified
          </Typography>

          <Typography type="p" sizeMultiplier={1.2}>
            Hi im a p Tag with Elastified font size of 1.2x
          </Typography>
          <Typography type="p" sizeMultiplier={1}>
            Hi im a p Tag with Elastified original size
          </Typography>
        </section>
      </Main>
    </Section>
  );
};

export default ElastifyPage;
