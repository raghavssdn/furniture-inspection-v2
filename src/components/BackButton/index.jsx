import React from "react";
import { useNavigate } from "react-router-dom";

import "../BackButton/index.css";
import { nextMapping } from "../../utils/constant";

const BackButton = ({ page }) => {
  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate(`${nextMapping[page]}`);
  };

  return (
    <div id="back-btn">
      <button onClick={navigateToBack} className="back-btn">
        Back
      </button>
    </div>
  );
};

export default BackButton;
