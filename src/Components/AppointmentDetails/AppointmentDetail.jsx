import React from "react";
import { Button, Container } from "@mui/material";
import APTPatientDetail from "./AppointmentPatientDetail/APTPatientDetail";
import APTProfileUpload from "./AppointmentProfileUploader/APTProfileUpload";
import TemplateDetailsPatient from "./TemplateDetails/TemplateDetailsPatient";
import CaseDetails from "./CasePatientDetails/CaseDetails";
import TabsDetails from "./DetailTabsAppointment/TabsDetails";

const AppointmentDetail = () => {
  return (
    <>
      <Container
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Container style={{ display: "flex", overflow: "hidden" }}>
          <div>
            <APTPatientDetail />
          </div>
          <div>
            <APTProfileUpload />
          </div>
        </Container>
        <hr />
        <Container variant="body8" paragraph>
          Last Visit: <Button>Hypertension,Thyroid Disorder</Button>
        </Container>
        <hr />
        <Container variant="body9" paragraph>
          <Button
            variant="contained"
            sx={{ borderRadius: "20px", backgroundColor: "#38E54D" }}
          >
            Arrived
          </Button>
        </Container>
        <hr />
        <CaseDetails />
        <hr />
        <TemplateDetailsPatient />
        <TabsDetails />
      </Container>
    </>
  );
};

export default AppointmentDetail;
