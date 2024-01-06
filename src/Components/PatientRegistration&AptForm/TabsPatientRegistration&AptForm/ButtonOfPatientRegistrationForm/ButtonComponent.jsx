import { Button } from "@mui/material";
import React from "react";

const HistoryBtn = ({ sx, label}) => {
  return (
    <>
      <Button sx={sx} variant="contained">
        {label}
      </Button>
    </>
  );
};

export default HistoryBtn;
