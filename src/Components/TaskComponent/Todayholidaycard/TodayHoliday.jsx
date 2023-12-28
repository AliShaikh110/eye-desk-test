import { Button, Container, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

const TodayHoliday = () => {
  return (

    <Container
    style={{
      margin: "20px",
      height: "110px",
      minHeightL: "100vw",
      backgroundColor: "#fff",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h7" fontWeight={600} align="center" mt={2}>
        Total Holidays
      </Typography>
      <Button
        type="submit"
        variant="contained"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
       <AddCircleIcon style={{ color: "#1757C2" }} />
       <span style={{color:"#1757C2",fontWeight:'bold'}}>ADD/EDIT</span>
             </Button>
    </div>
    <input
          type="text"
          placeholder="No Plans Added"
          style={{ height: "30px", border: "none", outline: "none" }}
        />
  </Container> 
   )
}

export default TodayHoliday