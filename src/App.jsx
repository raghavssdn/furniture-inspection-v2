import React, { useState, useRef } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import { HomePage } from "./components/HomePage/HomePage";
import MainUploadPages from "./components/MainUploadPages";
import {
  uploadDropTest1,
  uploadDropTest2,
  uploadOnSiteTest,
  uploadOtherDocuments,
  uploadPackagingLabeling1,
  uploadPackagingLabeling2,
  uploadProductInspection,
  uploadProductSpecification,
  uploadWorkmanship1,
  uploadWorkmanship2,
} from "./utils/constant";
import InspectionSummary from "./components/InspectionSummary";
import { Header } from "./components/Header/Header";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { getReportNumber } from "./utils/utils";

function App() {
  const [canvasCaptured, setCanvasCaptured] = useState([]);
  const [loading, setLoading] = useState(false); // Loader state

  const canvasRefs = useRef([]);
  const captureCanvas = async (route, index) => {
    const pageElement = document.getElementById(route);

    if (!pageElement) {
      console.error(`Element for route ${route} not found!`);
      return;
    }

    try {
      const canvas = await html2canvas(pageElement, { scale: 2 });
      canvasRefs.current[index] = canvas;
      setCanvasCaptured((prevState) => {
        const newCaptured = [...prevState];
        newCaptured[index] = true;
        return newCaptured;
      });
      console.log(`Captured canvas for ${route}`);
    } catch (err) {
      console.error(`Failed to capture canvas for ${route}:`, err);
    }
  };

  const generatePdf = async () => {
    if (canvasRefs.current.length === 6) {
      setLoading(true); // Show loader

      const pdf = new jsPDF("p", "mm", "a4");
      await new Promise((resolve) => setTimeout(resolve, 500));
      canvasRefs.current.forEach((canvas, index) => {
        console.log(index);
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / (canvas.width * 1.5);

        if (index > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      });

      pdf.save("pages.pdf");
      setLoading(false); // Hide loader
    } else {
      console.log("Canvases are not fully captured yet.", canvasCaptured);
    }
  };

  return (
    <>
      {/* Show Loader */}
      {loading && (
        <div style={loaderStyle}>
          <div className="spinner"></div>
          <p>Generating PDF...</p>
        </div>
      )}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage pageId={"home"} captureCanvas={captureCanvas} />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/product-inspection`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId={"product-inspection"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadProductInspection}
                  heading={"PRODUCT OFFERED FOR INSPECTION"}
                  back={0}
                  currentPage={1}
                  next={2}
                />
              </ProtectedRoute>
            }
          />
          <Route
            pageId={"inspection-summary"}
            path={`/inspection-summary`}
            element={
              <ProtectedRoute>
                <InspectionSummary
                  pageId="product-specification"
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  heading={"II. INSPECTION SUMMARY"}
                  back={1}
                  currentPage={2}
                  next={3}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/product-specification`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId="product-specification"
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadProductSpecification}
                  heading={"A. PRODUCT SPECIFICATION"}
                  back={2}
                  currentPage={3}
                  next={4}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/workmanship-defects-1`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId="workmanship-defects-1"
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadWorkmanship1}
                  heading={"B. WORKMANSHIP / DEFECTS"}
                  back={3}
                  currentPage={4}
                  next={5}
                  showListMenu={true}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/workmanship-defects-2`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId="workmanship-defects-2"
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadWorkmanship2}
                  heading={"B. WORKMANSHIP / DEFECTS"}
                  back={4}
                  currentPage={5}
                  next={6}
                  showListMenu={true}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/on-site-test`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId="on-site-test"
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadOnSiteTest}
                  heading={"C. ON SITE TEST"}
                  back={5}
                  currentPage={6}
                  next={7}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/packaging-labelling-1`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId={"packaging-labelling-1"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadPackagingLabeling1}
                  heading={"D. PACKAGING & LABELLING"}
                  back={6}
                  currentPage={7}
                  next={8}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/packaging-labelling-2`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId={"packaging-labelling-2"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadPackagingLabeling2}
                  heading={"D. PACKAGING & LABELLING"}
                  back={7}
                  currentPage={8}
                  next={9}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/drop-test-1`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId={"drop-test-1"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadDropTest1}
                  heading={"E. DROP TEST"}
                  back={8}
                  currentPage={9}
                  next={10}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/drop-test-2`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId={"drop-test-2"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadDropTest2}
                  heading={"E. DROP TEST"}
                  back={9}
                  currentPage={10}
                  next={11}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/other-documents`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId={"other-documents"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadOtherDocuments}
                  heading={
                    "F. OTHER DOCUMENTS - PACKING LIST; PRODUCT TEST REPORT"
                  }
                  back={10}
                  currentPage={11}
                  next={12}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/remarks`}
            element={
              <ProtectedRoute>
                <MainUploadPages
                  pageId={"remarks"}
                  generatePdf={generatePdf}
                  captureCanvas={captureCanvas}
                  uploadData={uploadWorkmanship2}
                  heading={"REMARKS:"}
                  back={11}
                  currentPage={12}
                />
              </ProtectedRoute>
            }
          />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

const loaderStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  color: "#fff",
  fontSize: "18px",
};
export default App;
