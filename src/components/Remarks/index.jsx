import React from "react";

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
          {next !== undefined ? <NextButton page={next} /> : null}
        </div>
      </div>
    </>
  );
};

export default Remarks;
