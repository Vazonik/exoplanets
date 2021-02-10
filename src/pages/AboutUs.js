import React from "react";

import RegularHeader from "../components/RegularHeader/RegularHeader";
import { MainPageCanvas } from "../components/MainPageCanvas/MainPageCanvas";
import MadeBy from "../components/MadeBy/MadeBy";

function AboutUs() {
  return (
    <>
      <RegularHeader />
      <MainPageCanvas>
        <MadeBy />
      </MainPageCanvas>
    </>
  );
}

export default AboutUs;
