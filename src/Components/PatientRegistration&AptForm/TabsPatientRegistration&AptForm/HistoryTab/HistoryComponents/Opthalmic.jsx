import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { OpthalmicButton } from "../HistoryBtn/HistoryBtnTabs";

const Opthalmic = () => {
  return (
    <>
        <Typography
        component="h4"
        sx={{
          // fontSize: "16px",
          marginBottom: "5px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#373737",
        }}
      >
        Opthalmic History
      </Typography>
      <Grid
        container
        sx={{
          height: "auto",
          minHeight: "2.5rem",
          // backgroundColor: "white",
        }}
      >
        <OpthalmicButton />
      </Grid>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "10px",
          // height:"10rem"
        }}
      >
        <TextField
          fullWidth
          label="History Comment"
          size="large"
          sx={{ backgroundColor: "white" }}
        />
      </Box>
    </>
  )
}

export default Opthalmic