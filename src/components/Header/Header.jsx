import { getReportDate, getReportNumber } from "../../utils/utils";
import "../Header/Header.css";

export const Header = () => {
  return (
    <>
      <div className="header">
        <h2 className="heading-title">Sourcing Edge</h2>
        <p className="subtitle">CONCEPT, CREATE, DELIVER</p>
      </div>
      <div className="header-wrapper">
        <table className="header-table">
          <thead>
            <tr>
              <th colSpan="2">Pre-Shipment Inspection Report</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "40%" }} className="bold-column">
                Report Number:
              </td>
              <td style={{ width: "40%" }}>
                {sessionStorage.getItem("reportId")}
              </td>
              <td rowSpan="3">
                <select name="result" id="result" className="select-dropdown">
                  <option value="">Select your option</option>
                  <option value="passed">Passed</option>
                  <option value="failed">Failed</option>
                  <option value="hold">On Hold</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ width: "40%" }} className="bold-column">
                Report Date:
              </td>
              <td style={{ width: "40%" }}>{getReportDate()}</td>
            </tr>
            <tr>
              <td style={{ width: "40%" }} className="bold-column">
                Inspection Type:
              </td>
              <td style={{ width: "40%" }}>
                <select
                  name="insepectionType"
                  id="inspection-type"
                  className="select-dropdown inspection"
                >
                  <option value="">Select your option</option>
                  <option value="midline">Midline</option>
                  <option value="final">Final</option>
                  <option value="100">100%</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
