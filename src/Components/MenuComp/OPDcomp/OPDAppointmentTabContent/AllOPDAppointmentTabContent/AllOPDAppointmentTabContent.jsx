import React from "react";
import ScheduledOPDAppointmentTabContent from "../ScheduledOPDAppointmentTabContent/ScheduledOPDAppointmentTabContent";
import WaitingOPDAppointmentTabContent from "../WaitingOPDAppointmentTabContent/WaitingOPDAppointmentTabContent";
import CompletedOPDAppointmentTabContent from "../CompletedOPDAppointmentTabContent/CompletedOPDAppointmentTabContent";
import EngagedOPDAppointmentTabContent from "../EngagedOPDAppointmentTabContent/EngagedOPDAppointmentTabContent";

const AllOPDAppointmentTabContent = () => {
  return (
    <>
      <ScheduledOPDAppointmentTabContent />
      <br />
      <WaitingOPDAppointmentTabContent />
      <br />
      <CompletedOPDAppointmentTabContent />
      <br />
      <EngagedOPDAppointmentTabContent />
    </>
  );
};

export default AllOPDAppointmentTabContent;
