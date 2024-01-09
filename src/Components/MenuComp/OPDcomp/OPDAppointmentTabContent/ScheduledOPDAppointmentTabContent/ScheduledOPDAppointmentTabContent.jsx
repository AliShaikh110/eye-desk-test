import React from "react";
import CardCompOPDAppointmentTabContent from "../CardCompOPDAppointmentTabContent/CardCompOPDAppointmentTabContent";

const borderStyle ={
  borderRight:'5px solid green'
}

const ScheduledOPDAppointmentTabContent = () => {
  return (
    <>
     <CardCompOPDAppointmentTabContent
        PatientName="Ms. Jane Doe"
        FreeBtn="FREE"
        time="2: 15 PM"
        borderStyle={borderStyle}
      />
      <CardCompOPDAppointmentTabContent
        PatientName="Mr. Johnson"
        NewBtn="NEW"
        time="3: 00 PM"
        borderStyle={borderStyle}
      /></>
  );
};

export default ScheduledOPDAppointmentTabContent;
