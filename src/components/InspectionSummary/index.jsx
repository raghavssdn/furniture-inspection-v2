import React from "react";

import "../InspectionSummary/index.css";
import NextButton from "../NextButton";
import BackButton from "../BackButton";
import { Header } from "../Header/Header";

const InspectionSummary = ({
  pageId,
  generatePdf,
  captureCanvas,
  uploadData,
  heading,
  back,
  currentPage,
  next,
}) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="cust-header">
          <h3>{heading}</h3>
        </div>
        <div className="d-flex">
          <BackButton page={back} />
          <NextButton page={next} />
        </div>
      </div>
    </>
  );
};

export default InspectionSummary;
