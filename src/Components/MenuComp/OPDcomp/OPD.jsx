import React, { useState } from "react";
import { Grid, Tab, Tabs, Typography } from "@mui/material";
import AppointmentDetail from "../../AppointmentDetails/AppointmentDetail";
import Navbar2 from "../../Date/NavbarTwo/Navbar2";
import Navbar from "../../Nav/Navbar";

const OPDdata = [
  {
    id: 1,
    h2: 8,
    p: "ALL",
    borderBottomColor: "none",
  },
  {
    id: 2,
    h2: 2,
    p: "SCHEDULED",
    borderBottomColor: "green",
  },
  {
    id: 3,
    h2: 2,
    p: "WAITING",
    borderBottomColor: "blue",
  },
  {
    id: 4,
    h2: 3,
    p: "COMPLETED",
    borderBottomColor: "orange",
  },
  {
    id: 5,
    h2: 1,
    p: "ENGAGED",
    borderBottomColor: "purple",
  },
];

const itemStyle = {
  backgroundColor: "#D9D9D9",
  color: "black",
};

const OPD = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <Navbar2 />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={5}
          style={{ borderRight: "1px solid gray"}}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="auto"
            variant="scrollable"
          >
            {OPDdata.map((ele) => (
              <Tab
                key={ele.id}
                label={
                  <Typography variant="subtitle2">
                    <span style={{ fontWeight: "bold" }}>{ele.h2}</span>
                    <br />
                    <span style={{ fontSize: "10px " }}>{ele.p}</span>
                  </Typography>
                }
                style={{
                  ...itemStyle,
                  borderBottom: `5px solid ${ele.borderBottomColor}`,
                }}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={7}>
          <AppointmentDetail />
        </Grid>
      </Grid>
    </>
  );
};

export default OPD;
