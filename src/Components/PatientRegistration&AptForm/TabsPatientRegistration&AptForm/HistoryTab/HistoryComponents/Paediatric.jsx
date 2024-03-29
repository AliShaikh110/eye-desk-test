import React from 'react'
import { Box, Grid, TextField, Typography } from "@mui/material";
import { ImmunizationButton,NutritionalButton } from '../HistoryBtn/HistoryBtnTabs';
// import { ImmunizationButton, NutritionalButton } from "./Button";

const Paediatric = () => {
  return (
    <>
        <Box>
        <Typography
          component="h4"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#373737",
            marginTop: "10px",
          }}
        >
          Paediatric History
        </Typography>
        <Grid container sx={{ marginTop: "10px", minHeight: "2.5rem" }}>
          <Grid item md={4} sm={4}>
            Nutrition Assessment:
          </Grid>
          <Grid item md={8} sm={8}>
            <Grid
              container
              sx={{ backgroundColor: "white", minHeight: "2.5rem" }}
            >
              <NutritionalButton />
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginTop={"10px"}>
          <Grid item md={4} sm={4}>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Comments:
            </Typography>
          </Grid>
          <Grid item md={8} sm={8}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop={"10px"}>
          <Grid item md={4} sm={6}>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
              }}
            >
              Immunization Assesment:
            </Typography>
          </Grid>
          <ImmunizationButton />
        </Grid>
        <Grid container marginTop={"10px"}>
          <Grid item md={4} sm={4}>
            <Typography
              component="h4"
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Comments:
            </Typography>
          </Grid>
          <Grid item md={8} sm={8}>
            <Box sx={{ width: "100%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                // label="History Comment"
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    
    </>
  )
}

export default Paediatric