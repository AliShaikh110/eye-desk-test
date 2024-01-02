import { TextField } from "@mui/material";
import React from "react";

const InputFieldPayment = ({ label, width = "100%" }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        size="small"
        label={label}
        variant="outlined"
        sx={{ width: { width }, color: "rgba(105, 105, 105, 0.55)" }}
      />
    </>
  );
};

export default InputFieldPayment;
