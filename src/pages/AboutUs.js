import React from "react";

// components
import RegularHeader from "../components/RegularHeader/RegularHeader";
import { StarCanvas } from "../components/StarCanvas/StarCanvas";
import FlexPaper from "../components/FlexPaper/FlexPaper";
import Authors from "../components/Authors/Authors";
import MadeByForm from "../components/ContactForm/ContactForm";
import AboutProjectDiv from "../components/AboutProjectDiv/AboutProjectDiv";

function AboutUs() {
  return (
    <>
      <RegularHeader />
      <StarCanvas topOffset={{regular: 70, sm: 60}}>
        <FlexPaper>
          <AboutProjectDiv>
            <p>
              Nasz projekt jest po to, by ułatwić entuzjastom astronomii research egzoplanet, czyli planet okrążających inne gwiazdy.
              Odkrywcą pierwszych planet pozasłonecznych był polski astronom Aleksander Wolszczan, a obecnie astronomowie znają ich już bardzo dużo.
              Najczęściej pozasłoneczne układy planetarne znacznie różnią się od Układu Słonecznego, co po części może być efektem niedoskonałości
              metod ich wykrywania.
            </p>
            <Authors />
          </AboutProjectDiv>
          <MadeByForm />
        </FlexPaper>
      </StarCanvas>
    </>
  );
}

export default AboutUs;
