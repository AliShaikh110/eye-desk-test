import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

const Medical = () => {
  return (
    <>
      <Grid container columnSpacing={2} marginTop={"10px"}>
        <Grid item md={6} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#373737",
            }}
          >
            Medical History
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
          />
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography
            component="h4"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#373737",
            }}
          >
            Family History
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            // label="First Name "
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Medical;
