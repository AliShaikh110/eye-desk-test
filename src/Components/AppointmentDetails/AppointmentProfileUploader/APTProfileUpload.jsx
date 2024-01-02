import React, { useRef, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Avatar } from "@mui/material";

const APTProfileUpload = () => {
  const fileInputRef = useRef(null);
  const [avatarImage, setAvatarImage] = useState(<PermIdentityIcon />);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        updateAvatarImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateAvatarImage = (imageUrl) => {
    setAvatarImage(imageUrl);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Avatar
        alt="Profile"
        style={{
          height: "100px",
          width: "100px",
          marginTop: "40px",
          borderRadius: "10px",
          cursor: "pointer",
          border:'1px solid gray',
        }}
        src={avatarImage}
        onClick={handleAvatarClick}
      />
    </div>
  );
};

export default APTProfileUpload;
