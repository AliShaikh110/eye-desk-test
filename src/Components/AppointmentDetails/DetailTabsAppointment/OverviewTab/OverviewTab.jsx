import React from "react";
import OverviewTabsPatientDetails from "./OverviewTabsPatientDetails/OverviewTabsPatientDetails";
import OverviewTabBillsDetails from "./OverviewTabBillsDetails/OverviewTabBillsDetails";

const OverviewTab = () => {
  return (
    <>
      <OverviewTabsPatientDetails/>  
      <hr />
      <OverviewTabBillsDetails/>
    </>
  );
};

export default OverviewTab;
