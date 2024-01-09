import React from "react";
import CardCompOPDAppointmentTabContent from "../CardCompOPDAppointmentTabContent/CardCompOPDAppointmentTabContent";

const borderStyle ={
  borderRight:'5px solid orange'
}
const CompletedOPDAppointmentTabContent = () => {
  return (
    <>
      <CardCompOPDAppointmentTabContent
        PatientName="Mr. Willie"
        ReviewBtn="REVIEW"
        FollowupBtn="FOLLOW UP"
        time="4: 00 PM"
        borderStyle={borderStyle}
      />
      <CardCompOPDAppointmentTabContent
        PatientName="Ms. Dee"
        FreeBtn="FREE"
        NewBtn="NEW"
        time="4: 15 PM"
        borderStyle={borderStyle}
      />
      <CardCompOPDAppointmentTabContent
        PatientName="Ms. Turner"
        ReviewBtn="REVIEW"
        time="4: 45 PM"
        borderStyle={borderStyle}
      />
    </>
  );
};

export default CompletedOPDAppointmentTabContent;
