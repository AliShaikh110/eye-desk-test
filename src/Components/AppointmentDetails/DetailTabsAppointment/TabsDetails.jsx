import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OverviewTab from "./OverviewTab/OverviewTab";
import BillsTab from "./BillsTab/BillsTab";
import InvestigationTab from "./InvestigationTab/InvestigationTab";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const TabsDetails = () => {
  const [value, setValue] = React.useState("Overview");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label={<InfoOutlinedIcon />}
                value="Overview"
                title="Overview"
                sx={{
                  backgroundColor: value === "Overview" ? "#E5E1DA" : "transparent",
                }}
              />
              <Tab
                label={<ReceiptLongOutlinedIcon />}
                value="Bills"
                title="Bills"
                sx={{
                  backgroundColor: value === "Bills" ? "#E5E1DA" : "transparent",
                }}
              />
              <Tab
                label={<VisibilityOutlinedIcon />}
                value="Investigation"
                title="Investigation"
                sx={{
                  backgroundColor: value === "Investigation" ? "#E5E1DA" : "transparent",
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="Overview">
            <OverviewTab />
          </TabPanel>
          <TabPanel value="Bills">
            <BillsTab />
          </TabPanel>
          <TabPanel value="Investigation">
            <InvestigationTab />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default TabsDetails;
