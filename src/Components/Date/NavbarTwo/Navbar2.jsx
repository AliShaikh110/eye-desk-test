import { Button, Grid } from "@mui/material";
import Date from "../Date";
import React from "react";

const Navbar2 = () => {
  return (
    <>
      <div
        style={{ width: "100%", backgroundColor: "#1757C2", height: "50px" }}
      >
        <Grid style={{ display: "flex"}}>
          <Grid md={6} sm={6} style={{ width:'50%' }}>
            <Date />
          </Grid>
          <Grid md={6} sm={6} style={{ width:'50%' }}>
            <NavRight />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Navbar2;

const NavRight = function () {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "30px",
          height: "50px",
          color: "white",
        }}
      >
        <h3>Appointment Letter</h3>
        <div style={{ display:'flex' }}>
          <div>
            <Button style={{ color: "white", fontWeight: "bold" }}>Add</Button>
          </div>
          <div>
            <Button
              style={{ marginLeft: "10px", color: "white", fontWeight: "bold" }}
            >
              Print
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
