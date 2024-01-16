import { Box, Button, Grid } from "@mui/material";
import React from "react";
import TabsPatientRegistration from "./TabsPatientRegistration&AptForm/TabsPatientRegistration";
import PatientRegistrationAppointmentDetails from "./PatientRegistration&AptFormAppointmentComponent/PatientRegistrationAppointmentDetails";

const RegistrationAndAptFormMain = () => {
  return (
    <>
      <Box>
      <h1 style={{ textAlign: "center", lineHeight:'10px' }}>Patient registration & Appointment form</h1>
        <Grid
          container
          style={{
            backgroundColor: "#F5F5F5",
            border: "1px solid gray",
            position: "relative",
            height: "auto",
          }}
        >
          <Grid style={{ height: "100%" }} item md={7} sm={7}>
            <TabsPatientRegistration />
          </Grid>
          <Grid
            item
            md={5}
            sm={5}
            sx={{
              borderLeft: "1px solid gray",
            }}
          >
            <Box
              sx={{
                borderBottom: "1px solid gray",
                height: "48.5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.900rem",
                fontWeight: "700",
                letterSpacing: "0.02857em",
                width: "100%",
                color: "#373737",
              }}
            >
              Appointment Details
            </Box>
            <PatientRegistrationAppointmentDetails />
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "end",
            marginBottom: "5px",
          }}
        >
          <Button variant="contained" size="small">
            Create Appointment
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RegistrationAndAptFormMain;
