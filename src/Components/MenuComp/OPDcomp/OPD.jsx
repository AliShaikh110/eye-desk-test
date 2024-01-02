import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Card, Container, Grid } from "@mui/material";
import AppointmentDetail from "../../AppointmentDetails/AppointmentDetail";
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

const OPDdata = [
  {
    id: 1,
    h2: 2,
    p: "MY QUEUE",
    borderBottomColor: "YELLOW",
  },
  {
    id: 2,
    h2: 1,
    p: "NOT ARRIVED",
    borderBottomColor: "green",
  },
  {
    id: 3,
    h2: 2,
    p: "APPOINTMENTS",
    borderBottomColor: "blue",
  },
  {
    id: 4,
    h2: 2,
    p: "REFERRALS",
    borderBottomColor: "orange",
  },
  {
    id: 5,
    h2: 1,
    p: "PROVISIONAL",
    borderBottomColor: "orange",
  },
];

const itemStyle={
  backgroundColor:'#D9D9D9',
  color:'black'
}


const OPD = () => {
  return (
    <>
    <Navbar/>
    <Navbar2 />
      <Card maxWidth="xl" style={{ display: "flex", width:'100%' }}>
        <Card style={{ width: "50%"}}>
          <Grid container spacing={0}>
            <Grid item md={2} sm={12}>
              <Item style={{ color: "black",height:'85px'}}>
                <h3>8</h3>
                <span style={{fontSize:'10px' }}>ALL</span>
              </Item>
            </Grid>
            {OPDdata.map((ele) => (
              <Grid item md={2} sm={12} key={ele.id}>
                <Item style={itemStyle} borderBottomColor={ele.borderBottomColor}>
                  <h2>{ele.h2}</h2>
                  <p style={{fontSize:'8px',textWrap:'wrap'}}>{ele.p}</p>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Card>
        <Container style={{ width: "50%"}}>
          <AppointmentDetail />
        </Container>
      </Card>
    </>
  )
}

export default OPD