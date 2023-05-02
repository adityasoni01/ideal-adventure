"use client"
import React, { useState } from "react";
import AccordionUI from "../components/AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "VISA RULES",
      answer: "The below instructions and information are general in nature; however, for specific information, we urge you to visit or contact the Indian Mission / Embassy website as per your country of residence.      A passport that is valid for a minimum of six months beyond the date of intended return from India should ideally accompany your visa applications.Foreign tourists holding other nationalities other than the country where applying for visa, should submit proof of long-term permanent residence in the countr. For citizens of other countries, a reference has to be made to their country of residence for which an additional fee is chargeable and will also involve extra processing time.   Please refrain from making inquiries about the status of the application during this time." , },
    {
      id: 2,
      question: "GUIDELINES",
      answer:
        "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    },
    {
      id: 3,
      question: "MOBILE OPERATORS",
      answer:
        " a visual object or experience consciously created through an expression of skill or imagination.",
    },
  ];

  return (
    <div className=" mr-10 rounded-xl h-auto py-20 bg-custom-yellow">
      {data.map((data) => {
        return (
          <AccordionUI
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;