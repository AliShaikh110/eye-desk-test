import React from "react";
import CardCompOPDAppointmentTabContent from "../CardCompOPDAppointmentTabContent/CardCompOPDAppointmentTabContent";

const borderStyle ={
  borderRight:'5px solid blue'
}
const WaitingOPDAppointmentTabContent = () => {
  return (
    <>
     <CardCompOPDAppointmentTabContent
        PatientName="Mr. Ray"
        RefractionBtn="REFRACTION"
        time="2: 10 PM"
        borderStyle={borderStyle}
      />
      <CardCompOPDAppointmentTabContent
        PatientName="Mr. Paige"
        FollowupBtn="FOLLOW UP"
        time="3: 15 PM"
        borderStyle={borderStyle}
      />
    </>
  );
};

export default WaitingOPDAppointmentTabContent;
