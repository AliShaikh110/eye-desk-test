import React from "react";
import { Button, Container, Typography } from "@mui/material";
import APTPatientDetail from "./AppointmentPatientDetail/APTPatientDetail";
import APTProfileUpload from "./AppointmentProfileUploader/APTProfileUpload";
import TemplateDetailsPatient from "./TemplateDetails/TemplateDetailsPatient";
import CaseDetails from "./CasePatientDetails/CaseDetails";
import TabsDetails from "./DetailTabsAppointment/TabsDetails";

const AppointmentDetail = () => {
  return (
    <Container style={{ height: "100vh", overflowY: "scroll" }}>
      <Container style={{ display: "flex" }}>
        <div>
          <APTPatientDetail />
        </div>
        <div>
          <APTProfileUpload />
        </div>
      </Container>
      <hr />
      <Typography variant="body8" paragraph>
        Last Visit: <Button>Hypertension,Thyroid Disorder</Button>
      </Typography>
      <hr />
      <Typography variant="body9" paragraph>
        <Button color="success" variant="contained">
          Arrived
        </Button>
      </Typography>
      <hr />
      <CaseDetails />
      <hr />
      <TemplateDetailsPatient />
      <TabsDetails/>
    </Container>
  );
};

export default AppointmentDetail;
