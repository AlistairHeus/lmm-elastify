import "./styles.css";
import Section from "./Section";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import { Typography } from "./Typography";
import { TypographyAlt } from "./TypographyAlt";
import { Outlet, Route, Routes } from "react-router-dom";
import PixelPage from "./PixelPage";
import REMPage from "./REMPage";
import ElastifyPage from "./ElastifyPage";
import Home from "./Home";

export default function App() {
  const exampleDomVariant = "p";
  const exampleStyleVariant = "h6";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pixel" element={<PixelPage />} />
        <Route path="/rems" element={<REMPage />} />
        <Route path="/lmm" element={<ElastifyPage />} />
      </Routes>
    </div>
  );
}
