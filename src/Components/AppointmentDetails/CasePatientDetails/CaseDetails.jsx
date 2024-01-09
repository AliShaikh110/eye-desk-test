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
              <button
                style={{
                  backgroundColor: "#1757C2",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "10px",
                  height: "30px",
                  cursor:'pointer',
                  color:'white'
                }}
              >
                (Click to Add Name) -AEH-XYZ-1234{" "}
              </button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  border: "none",
                  fontSize: "10px",
                }}
              >
                All Case
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  fontSize: "10px",
                  border: "none",
                }}
              >
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
