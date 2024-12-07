/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";

import "../HomePage/HomePage.css";
import NextButton from "../NextButton";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";

export const HomePage = ({ pageId, captureCanvas }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);

  // const [captured, setCaptured] = useState(false);
  // const navigate = useNavigate();

  const captureAndGeneratePdf = async () => {
    await captureCanvas(pageId, 0); // Capture canvas for contact page
  };

  // Function to handle image selection and preview
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Generate preview URL
      const previewUrl = URL.createObjectURL(selectedFile);
      setImagePreview(previewUrl);
      setFile(selectedFile);
    }
  };

  return (
    <div id={pageId}>
      <Header></Header>
      <table className="home-page-table">
        <thead>
          <tr>
            <th colSpan="3" className="table-header">
              &#8544;. GENERAL INFORMATION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Client:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td rowSpan="12" className="image-column">
              {/* <div className="image-container"> */}
              <p className="image-heading">APPROVED PRODUCT IMAGE</p>
              {/* Display image preview if available */}
              <div className="image-preview">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  "No image selected"
                )}
              </div>
              <div className="upload-btn-wrapper">
                <button className="btn">Choose an image</button>
                <input
                  type="file"
                  capture="user"
                  accept="image/"
                  name="myfile"
                  onChange={handleImageChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Supplier:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Factory:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Factory Address:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Product Description:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Material:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              P.O. No.:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              SKU No.:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              PO Quantity:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Shipment Quantity:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Sample Size:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Inspection Date:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Inspector Name:
            </td>
            <td style={{ width: "40%" }}>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Re-Inspection:
            </td>
            <td style={{ width: "40%" }} colSpan="2">
              {/* <div  className="check-box-div"> */}
              <input
                type="checkbox"
                id="re-inspection-yes"
                name="re-inspection-yes"
              />
              <label htmlFor="re-inspection-yes">Yes</label>
              <input
                type="checkbox"
                id="re-inspection-no"
                name="re-inspection-no"
              />
              <label htmlFor="re-inspection-no">No</label>
              {/* </div> */}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%" }} className="input-labels">
              Reference Sample:
            </td>
            <td style={{ width: "40%" }} colSpan="2">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1">No Reference Sample On-site</label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1">Product Specification</label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1">P.O.</label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1">Packaging Spec </label>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="aql-result">
        <thead>
          <tr className="aql-first">
            <td colSpan="2">AQL Result:</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inspection Standard:</td>
            <td>
              Single sampling plan for Normal inspection according to ANSI/ASQ
              Z1.4-2008
            </td>
          </tr>
          <tr>
            <td>AQL Acceptable Level:</td>
            <td>Critical: Not Allowed, Major: 2.5, Minor: 4.0</td>
          </tr>
          <tr>
            <td>Inspection Sampling Level:</td>
            <td>AQL Level II</td>
          </tr>
          <tr>
            <td>Sample Size:</td>
            <td>As per Chart Below</td>
          </tr>
        </tbody>
      </table>
      <table className="aql-table">
        <thead>
          <tr>
            <th colSpan={2}>AQL Level</th>
            <th>Sample Size</th>
            <th>Acceptance</th>
            <th>Actual Found</th>
            <th>Result</th>
            <th>AQL Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Critical:</td>
            <td>Not Allowed</td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td rowSpan="3">
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td>Major:</td>
            <td>2.5</td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
          <tr>
            <td>Minor:</td>
            <td>4.0</td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td>
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                id="lname"
                name="lname"
                className="inpput-filed"
                placeholder="Please enter the details."
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="sample-table">
        <caption>
          Sampling Plan for Shipment Inspection and Acceptance Levels
        </caption>
        <thead>
          <tr>
            <th rowSpan="2">Lot or Batch Size</th>
            <th rowSpan="2">Sample Size Code Letter</th>
            <th rowSpan="2">Sample Size (Level-I)</th>
            <th colSpan="6">Acceptable Quality Level (AQL)</th>
          </tr>
          <tr>
            <th colSpan="2">2.5</th>
            <th colSpan="2">4</th>
            <th colSpan="2">6.5</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Ac</th>
            <th>Re</th>
            <th>Ac</th>
            <th>Re</th>
            <th>Ac</th>
            <th>Re</th>
          </tr>
        </thead>
        <tbody>
          <tr className="highlight">
            <td>2 - 8</td>
            <td>A</td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>9 - 15</td>
            <td>B</td>
            <td>3</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr className="highlight">
            <td>15 - 25</td>
            <td>C</td>
            <td>5</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>26 - 50</td>
            <td>D</td>
            <td>8</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr className="highlight">
            <td>51 - 90</td>
            <td>E</td>
            <td>13</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>91 - 150</td>
            <td>F</td>
            <td>20</td>
            <td>2</td>
            <td>3</td>
            <td>2</td>
            <td>3</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr className="highlight">
            <td>151 - 280</td>
            <td>G</td>
            <td>32</td>
            <td>3</td>
            <td>4</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>251 - 500</td>
            <td>H</td>
            <td>50</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr className="highlight">
            <td>501 - 1200</td>
            <td>J</td>
            <td>80</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td>1201 - 3200</td>
            <td>K</td>
            <td>125</td>
            <td>7</td>
            <td>8</td>
            <td>10</td>
            <td>11</td>
            <td>14</td>
            <td>15</td>
          </tr>
          <tr className="highlight">
            <td>3201 - 10000</td>
            <td>L</td>
            <td>200</td>
            <td>10</td>
            <td>11</td>
            <td>14</td>
            <td>15</td>
            <td>21</td>
            <td>22</td>
          </tr>
          <tr>
            <td>10001 - 35000</td>
            <td>M</td>
            <td>315</td>
            <td>14</td>
            <td>15</td>
            <td>21</td>
            <td>22</td>
            <td>21</td>
            <td>22</td>
          </tr>
        </tbody>
      </table>
      <div className="source">
        Source: ANSI/ASQ Z 1.4 The Sampling Procedures and Table for Inspection
        by Attributes
      </div>
      <div className="d-flex" style={{ padding: "10px" }}>
        <div></div>
        <div onClick={captureAndGeneratePdf}>
          <NextButton page={1} />
        </div>
      </div>
    </div>
  );
};
