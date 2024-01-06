import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PatientsTab from "./PatientsTab/PatientsTab";
import OtherDetailsTab from "./OtherDetailsTab/OtherDetailsTab";
import HistoryTab from "./HistoryTab/HistoryTab";
import AllergiesTab from "./AllergiesTab/AllergiesTab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


const TabsPatientRegistration = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            height: "50px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            sx={{ borderBottom: "1px solid gray", color: "white" }}
          >
            <Tab
              label="Patient Details"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                "&.Mui-selected": {
                  backgroundColor: "#1757c2",
                  color: "#fff",
                  border: "none",
                },
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Other Details"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                "&.Mui-selected": {
                  backgroundColor: "#1757c2",
                  color: "#fff",
                  border: "none",
                },

                borderLeft: "0.5px solid gray",
              }}
              {...a11yProps(1)}
            />
            <Tab
              label="History"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: "#373737",
                "&.Mui-selected": {
                  backgroundColor: "#1757c2",
                  color: "#fff",
                  border: "none",
                },

                borderLeft: "0.5px solid gray",
              }}
              {...a11yProps(2)}
            />
            <Tab
              label="Allergies"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: "#373737",
                "&.Mui-selected": {
                  backgroundColor: "#1757c2",
                  color: "#fff",
                  border: "none",
                },
                borderLeft: "0.5px solid gray",
              }}
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <PatientsTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <OtherDetailsTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <HistoryTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <AllergiesTab />
        </CustomTabPanel>
      </Box>
    </>
  )
}

export default TabsPatientRegistration;