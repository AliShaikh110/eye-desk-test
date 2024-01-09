import { Typography } from "@mui/material";
import React from "react";

const BtnStyle = {
  border: "none",
  fontSize: "10px",
  height: "20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const CardCompOPDAppointmentTabContent = ({
  PatientName,
  ReviewBtn,
  FollowupBtn,
  NewBtn,
  RefractionBtn,
  FreeBtn,
  time,
  borderStyle,
}) => {
  return (
    <>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          height: "40px",
          borderRadius: "5px",
          padding: "0 5px 0 5px",
          margin: "0 0 5px 5px",
          width: "93%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRight: borderStyle ? borderStyle.borderRight : 'none',
        }}
      >
        <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>
          {PatientName}
        </Typography>
        <div style={{ gap: "10px", display: "flex", alignItems: "center" }}>
          {ReviewBtn && (
            <button
              style={{
                ...BtnStyle,
                backgroundColor: "#FAEF9B",
              }}
            >
              {ReviewBtn}
            </button>
          )}
          {FollowupBtn && (
            <button
              style={{
                ...BtnStyle,
                backgroundColor: "#F6D776",
              }}
            >
              {FollowupBtn}
            </button>
          )}
          {FreeBtn && (
            <button
              style={{
                ...BtnStyle,
                backgroundColor: "#6DA4AA",
              }}
            >
              {FreeBtn}
            </button>
          )}
          {RefractionBtn && (
            <button
              style={{
                ...BtnStyle,
                backgroundColor: "#AAD9BB",
              }}
            >
              {RefractionBtn}
            </button>
          )}
          {NewBtn && (
            <button
              style={{
                ...BtnStyle,
                backgroundColor: "#C6A969",
              }}
            >
              {NewBtn}
            </button>
          )}
          <span style={{ fontSize: "12px" }}>{time}</span>
        </div>
      </div>
    </>
  );
};

export default CardCompOPDAppointmentTabContent;