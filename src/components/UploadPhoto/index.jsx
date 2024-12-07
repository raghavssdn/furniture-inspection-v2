import React, { useEffect, useState } from "react";

import "../UploadPhoto/index.css";

const UploadPhoto = ({ imageData, index }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    setFile(null);
    setImagePreview(null);
  }, [imageData, index]);

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
    <div className="grid-item">
      {/* Display image preview if available */}
      <div className="image-preview">
        {imagePreview ? (
          <img src={imagePreview} alt="Image Preview" />
        ) : (
          "No image selected"
        )}
      </div>
      {/* Styled input field for file selection */}
      <input
        type="file"
        capture="camera"
        accept="image/*"
        onChange={handleImageChange}
        className="upload-btn"
        style={{ display: "none" }} // Hide the raw input field
        id={`file-upload-${index}`} // Unique ID for each input
      />
      <label htmlFor={`file-upload-${index}`} className="upload-btn"></label>
      <p className="caption">↑ {imageData?.imageName}</p>
    </div>
  );
};

export default UploadPhoto;
