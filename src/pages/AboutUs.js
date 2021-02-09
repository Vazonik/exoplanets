import React from "react";

import RegularHeader from "../components/RegularHeader/RegularHeader";
import PageCanvas from "../components/PageCanvas/PageCanvas";
import MadeBy from "../components/MadeBy/MadeBy";

function AboutUs() {
  return (
    <>
      <RegularHeader />
      <PageCanvas>
        <MadeBy />
      </PageCanvas>
    </>
  );
}

export default AboutUs;
