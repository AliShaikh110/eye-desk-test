import React from "react";

const DateStyle={
  width: "30%",
  height: "30px",
  margin: "5px 0 0 120px",
  color: "white",
  backgroundColor: "#1757C2",
  border: "none",
  padding:'5px',
  outline: "none",
  fontSize: "18px",
  fontFamily: "sans-serif",
}

const Date = () => {
  return (
    <div>
      <input
        type="date"
        style={DateStyle}
      />
    </div>
  );
};

export default Date;
