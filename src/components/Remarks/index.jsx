import React, { useState } from "react";

import "../Remarks/index.css";
import { Header } from "../Header/Header";
import BackButton from "../BackButton";
import NextButton from "../NextButton";

const Remarks = ({
  pageId,
  generatePdf,
  captureCanvas,
  uploadData,
  heading,
  back,
  currentPage,
  next,
  showListMenu,
}) => {
  const captureAndGeneratePdf = async (isGen) => {
    // if (!hasCaptured) { // Check if we have already captured
    await captureCanvas(pageId, currentPage); // Capture canvas for contact page
    // setHasCaptured(true); // Set the flag to true after capturing
    // }
    if (isGen) generatePdf();
  };
  return (
    <>
      <div className="container" id={pageId}>
        <Header />
        <div className="cust-header">
          <h3>{heading}</h3>
        </div>

        <textarea className="textarea" />
        <div className="d-flex">
          {back !== undefined ? <BackButton page={back} /> : null}
          {next !== undefined ? (
            <NextButton page={next} />
          ) : (
            pageId === "remarks" && (
              <button
                onClick={() => captureAndGeneratePdf(true)}
                className="download"
              >
                Download PDF
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Remarks;
