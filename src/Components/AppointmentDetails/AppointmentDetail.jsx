import React from "react";
import { Button, Container } from "@mui/material";
import APTPatientDetail from "./AppointmentPatientDetail/APTPatientDetail";
import APTProfileUpload from "./AppointmentProfileUploader/APTProfileUpload";
import TemplateDetailsPatient from "./TemplateDetails/TemplateDetailsPatient";
import CaseDetails from "./CasePatientDetails/CaseDetails";
import TabsDetails from "./DetailTabsAppointment/TabsDetails";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AppointmentDetail = () => {
  return (
    <StyledContainer
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Container style={{ display: "flex" }}>
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
        <Button color="success" variant="contained">
          Arrived
        </Button>
      </Container>
      <hr />
      <CaseDetails />
      <hr />
      <TemplateDetailsPatient />
      <TabsDetails />
    </StyledContainer>
  );
};

export default AppointmentDetail;
