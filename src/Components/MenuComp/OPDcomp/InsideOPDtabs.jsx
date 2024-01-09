import AllOPDAppointmentTabContent from "./OPDAppointmentTabContent/AllOPDAppointmentTabContent/AllOPDAppointmentTabContent";
import CompletedOPDAppointmentTabContent from "./OPDAppointmentTabContent/CompletedOPDAppointmentTabContent/CompletedOPDAppointmentTabContent";
import EngagedOPDAppointmentTabContent from "./OPDAppointmentTabContent/EngagedOPDAppointmentTabContent/EngagedOPDAppointmentTabContent";
import ScheduledOPDAppointmentTabContent from "./OPDAppointmentTabContent/ScheduledOPDAppointmentTabContent/ScheduledOPDAppointmentTabContent";
import WaitingOPDAppointmentTabContent from "./OPDAppointmentTabContent/WaitingOPDAppointmentTabContent/WaitingOPDAppointmentTabContent";

const InsideOPDtabs = ({ selectedTab }) => {
    switch (selectedTab) {
      case 0:
        return <><AllOPDAppointmentTabContent/></>;
      case 1:
        return <><ScheduledOPDAppointmentTabContent/></>;
      case 2:
        return <><WaitingOPDAppointmentTabContent/></>;
      case 3:
        return <><CompletedOPDAppointmentTabContent/></>;
      case 4:
        return <><EngagedOPDAppointmentTabContent/></>;
      default:
        return null;
    }
  };
  
  export default InsideOPDtabs;
  