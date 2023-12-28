import React from "react";

const DateStyle={
  width: "40%",
  height: "30px",
  margin: "5px 0 0 150px",
  borderRadius: "5px",
  color: "black",
  backgroundColor: "#1757C2",
  border: "1.5px solid black",
  padding:'5px',
  outline: "none",
  fontSize: "20px",
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
