import { Button, Container, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import React from "react";

const ReportCard = () => {
  return (
    <Container
      style={{
        margin: "20px",
        height: "110px",
        minHeightL: "100vw",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h7" fontWeight={600} align="center" mt={2}>
          Today's Report
        </Typography>
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <RemoveCircleIcon style={{ color: "#1757C2" }} />
        </Button>
      </div>
    </Container>
  );
};

export default ReportCard;
