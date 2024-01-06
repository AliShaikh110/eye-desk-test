import React, { useState } from "react";
import { Card, Container,Tab, Tabs, Typography } from "@mui/material";
import Navbar2 from "../../Date/NavbarTwo/Navbar2";
import Navbar from "../../Nav/Navbar";

const IPDdata = [
  {
    id: 1,
    h2: 10,
    p: "ALL",
    borderBottomColor: "none",
  },
  {
    id: 2,
    h2: 2,
    p: "ADMITTED PATIENTS",
    borderBottomColor: "red",
  },
  {
    id: 3,
    h2: 5,
    p: "SCHEDULED TODAY",
    borderBottomColor: "green",
  },
  {
    id: 4,
    h2: 2,
    p: "ADMITTED TODAY",
    borderBottomColor: "blue",
  },
  {
    id: 5,
    h2: 0,
    p: "DISCHARGED TODAY",
    borderBottomColor: "orange",
  },
];

const itemStyle = {
  color: "black",
  backgroundColor: "#D9D9D9",
};

const IPD = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <Navbar2 />
      <Card
        maxWidth="xl"
        style={{
          display: "flex",
          flexDirection: "column", 
          // borderRight:'1px solid gray'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          style={{}}
        >
          {IPDdata.map((ele, index) => (
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
        <Container style={{ width: "100%", flexGrow: 1 }}>
          {/* Additional content goes here */}
        </Container>
      </Card>
    </>
  );
};

export default IPD;
