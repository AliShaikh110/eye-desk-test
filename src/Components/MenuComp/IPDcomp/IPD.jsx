import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Card, Container, Grid } from "@mui/material";
import Navbar2 from "../../Date/NavbarTwo/Navbar2";
import Navbar from "../../Nav/Navbar";

const Item = styled(Paper)(({ theme, borderBottomColor }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottom: `5px solid ${borderBottomColor || "transparent"}`,
}));

const IPDdata = [
  {
    id: 1,
    h2: 2,
    p: "ADMITTED PATIENTS",
    borderBottomColor: "red",
  },
  {
    id: 2,
    h2: 5,
    p: "SCHEDULED TODAY",
    borderBottomColor: "green",
  },
  {
    id: 3,
    h2: 2,
    p: "ADMITTED TODAY",
    borderBottomColor: "blue",
  },
  {
    id: 4,
    h2: 0,
    p: "DISCHARGED TODAY",
    borderBottomColor: "orange",
  },
];

const itemStyle = {
  backgroundColor: "#D9D9D9",
  color: "black",
};

const IPD = () => {
  return (
    <>
    <Navbar/>
    <Navbar2 />
      <Card maxWidth="xl" style={{ display: "flex", width: "100%" }}>
        <Card style={{ width: "55%" }}>
          <Grid container spacing={0}>
            <Grid item md={2.4} sm={12}>
              <Item style={{ color: "black", height: "88px" }}>
                <h3>10</h3>
                <span style={{ fontSize: "9px" }}>ALL</span>
              </Item>
            </Grid>
            {IPDdata.map((ele) => (
              <Grid item md={2.4} sm={12} key={ele.id}>
                <Item
                  style={itemStyle}
                  borderBottomColor={ele.borderBottomColor}
                >
                  <h2>{ele.h2}</h2>
                  <p style={{ fontSize: "9px", textWrap:'wrap' }}>{ele.p}</p>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Card>
        <Container
          style={{ width: "30%" }}
        ></Container>
      </Card>
    </>
  );
};

export default IPD;
