import React from "react";
import { Grid } from "@mui/material";
import SignupDetails from "./SignupProcessDetails/SignupDetails";
import UserDetails from "./SignupUserDetails/UserDetails";

const Signup = () => {
  return (
    <>
      <Grid container>
        <Grid item sm={12} md={4.7}>
          <SignupDetails />
        </Grid>
        <Grid item sm={12} md={7.3}>
          <UserDetails />
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
