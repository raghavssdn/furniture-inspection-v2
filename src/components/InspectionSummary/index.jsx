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
  const captureAndGeneratePdf = async () => {
    console.log(pageId, currentPage);
    await captureCanvas(pageId, currentPage); // Capture canvas for contact page
  };

  return (
    <div id={pageId}>
      <Header />
      <div className="container">
        <div className="cust-header">
          <h3>{heading}</h3>
        </div>

        <table className="inspection-summary">
          <thead>
            <tr>
              <th></th>
              <th>Passed*</th>
              <th className="highlight">Failed</th>
              <th>Pending</th>
              <th>Not Applicable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="link-prnt">
                A.
                <span className="link">Product Specification</span>
              </td>
              <td>
                <input type="checkbox" name="productSpecification" />
              </td>
              <td>
                <input type="checkbox" name="productSpecification1" />
              </td>
              <td>
                <input type="checkbox" name="productSpecification2" />
              </td>
              <td>
                <input type="checkbox" name="productSpecification3" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">
                B.
                <span className="link">Workmanship & Defects</span>
              </td>
              <td>
                <input type="checkbox" name="workmanship" />
              </td>
              <td>
                <input type="checkbox" name="workmanship1" />
              </td>
              <td>
                <input type="checkbox" name="workmanship2" />
              </td>
              <td>
                <input type="checkbox" name="workmanship3" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">
                C.
                <span className="link">On-Site Tests</span>
              </td>
              <td>
                <input type="checkbox" name="onSiteTests" />
              </td>
              <td>
                <input type="checkbox" name="onSiteTests1" />
              </td>
              <td>
                <input type="checkbox" name="onSiteTests2" />
              </td>
              <td>
                <input type="checkbox" name="onSiteTests3" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">
                D.<span className="link">Packing & Labelling</span>
              </td>
              <td>
                <input type="checkbox" name="packingLabelling" />
              </td>
              <td>
                <input type="checkbox" name="packingLabelling" />
              </td>
              <td>
                <input type="checkbox" name="packingLabelling" />
              </td>
              <td>
                <input type="checkbox" name="packingLabelling" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">
                E.
                <span className="link">Drop Test</span>
              </td>
              <td>
                <input type="checkbox" name="dropTest" />
              </td>
              <td>
                <input type="checkbox" name="dropTest1" />
              </td>
              <td>
                <input type="checkbox" name="dropTest2" />
              </td>
              <td>
                <input type="checkbox" name="dropTest3" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">
                F.
                <span className="link">Test Reports</span>
              </td>
              <td>
                <input type="checkbox" name="testReports" />
              </td>
              <td>
                <input type="checkbox" name="testReports1" />
              </td>
              <td>
                <input type="checkbox" name="testReports2" />
              </td>
              <td>
                <input type="checkbox" name="testReports3" />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="defect-categories">
          <thead>
            <tr>
              <th className="link-prnt">DEFECT CATEGORIES</th>
              <th>Critical</th>
              <th>Major</th>
              <th>Minor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="link-prnt">Product Specification</td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">Workmanship</td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">On-Site Test</td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">Packing & Labelling</td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">Drop Test</td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
            </tr>
            <tr>
              <td className="link-prnt">Test Reports</td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
            </tr>
            <tr className="grand-total">
              <td className="link-prnt">Grand Total</td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
              <td>
                <input type="text" placeholder="Enter data" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="d-flex">
          <BackButton page={back} />
          <div onClick={captureAndGeneratePdf}>
            {next !== undefined ? <NextButton page={next} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionSummary;
