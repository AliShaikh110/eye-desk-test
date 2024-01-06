import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { SystemicButton } from "../HistoryBtn/HistoryBtnTabs";

const Systemic = () => {
  return (
    <>
      <Box sx={{ marginTop: "5px" }}>
        <Typography
          component="h4"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#373737",
            marginBottom: "5px",
          }}
        >
          Systemic History
        </Typography>{" "}
        <Grid
          container
          sx={{
            height: "auto",
            minHeight: "2.5rem",
          }}
        >
          <SystemicButton />
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "10px",
        }}
      >
        <TextField
          fullWidth
          label="History Comment"
          size="large"
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        />
      </Box>
    </>
  );
};

export default Systemic;
