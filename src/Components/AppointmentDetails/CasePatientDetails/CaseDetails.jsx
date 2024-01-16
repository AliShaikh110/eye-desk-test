import { Button, Container, Grid } from "@mui/material";
import React from "react";

const CaseDetails = () => {
  return (
    <>
      <Container variant="body10" paragraph>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5>Case Details : </h5>
          <Grid container spacing={1}>
            <Grid item>
              <Button
                variant="contained"
                sx={{ fontSize: "10px", padding: "3px 6px" }}
              >
                (Click to Add Name) -AEH-XYZ-1234
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" sx={{ fontSize: "10px" }}>
                All Case
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" sx={{ fontSize: "10px" }}>
                Change Case
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default CaseDetails;
