import { Box } from "@mui/material";
import React from "react";
import Opthalmic from "./HistoryComponents/Opthalmic";
import Systemic from "./HistoryComponents/Systemic";
import Medical from "./HistoryComponents/Medical";
import Paediatric from "./HistoryComponents/Paediatric";

const HistoryTab = () => {
  return (
    <>
      <Box>
        <div style={{ padding: "1rem" }}>
          <Opthalmic />
          <Systemic />
          <Medical />
          <Paediatric />
        </div>
      </Box>
    </>
  );
};

export default HistoryTab;
