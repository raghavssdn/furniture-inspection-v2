import React, { useEffect, useState } from "react";

import "../MainUploadPages/index.css";
import UploadPhoto from "../UploadPhoto";
import NextButton from "../NextButton";
import BackButton from "../BackButton";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import DictionaryList from "../dictionaryList";

const MainUploadPages = ({
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
  const [hasCaptured, setHasCaptured] = useState(false); // State to track if capture has occurred
  const navigate = useNavigate();

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
        {showListMenu ? <DictionaryList /> : null}
        <div className="grid">
          {uploadData?.map((imageData, index) => (
            <React.Fragment key={index}>
              <UploadPhoto imageData={imageData} index={index} />
            </React.Fragment>
          ))}
        </div>
        <div className="d-flex">
          {back !== undefined ? <BackButton page={back} /> : null}
          <div onClick={() => captureAndGeneratePdf(false)}>
            {next !== undefined ? <NextButton page={next} /> : null}
          </div>
        </div>
        {pageId === "on-site-test" && (
          <button onClick={() => captureAndGeneratePdf(true)}>
            Download PDF
          </button>
        )}
      </div>
    </>
  );
};

export default MainUploadPages;
