import React from "react";
import CardCompOPDAppointmentTabContent from "../CardCompOPDAppointmentTabContent/CardCompOPDAppointmentTabContent";

const borderStyle ={
  borderRight:'5px solid purple'
}
const EngagedOPDAppointmentTabContent = () => {
  return (
    <>
      <CardCompOPDAppointmentTabContent
        PatientName="Mr. Johnson"
        ReviewBtn="REVIEW"
        time="1: 10 PM"
        borderStyle={borderStyle}
      />{" "}
    </>
  );
};

export default EngagedOPDAppointmentTabContent;
