import React, { useState } from "react";
import { Grid, Tab, Tabs, Typography } from "@mui/material";
import AppointmentDetail from "../../AppointmentDetails/AppointmentDetail";
import Navbar2 from "../../Date/NavbarTwo/Navbar2";
import Navbar from "../../Nav/Navbar";
import InsideOPDtabs from "./InsideOPDtabs";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

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
        <Grid item xs={12} sm={5.5} style={{ borderRight: "1px solid gray" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="auto"
            variant="scrollable"
          >
            {OPDdata.map((ele, id) => (
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
                  color: "black",
                  borderBottom: `5px solid ${ele.borderBottomColor}`,
                  backgroundColor: value === id ? "inherit" : "#D9D9D9",
                }}
              />
            ))}
          </Tabs>
          <Grid item xs={12} sm={12} mt={2}>
            <InsideOPDtabs selectedTab={value} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6.5}>
          <StyledContainer>
            <AppointmentDetail />
          </StyledContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default OPD;
