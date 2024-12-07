import React from "react";
import { useNavigate } from "react-router-dom";

import "../NextButton/index.css";
import { nextMapping } from "../../utils/constant";

const NextButton = ({ page }) => {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate(`${nextMapping[page]}`);
  };

  return (
    <div id="next-btn">
      <button onClick={navigateToNext} className="next-btn">
        Next Page
      </button>
    </div>
  );
};

export default NextButton;
