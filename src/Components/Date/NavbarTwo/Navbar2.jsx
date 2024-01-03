import { Button } from "@mui/material";
import Date from "../Date";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import React from "react";
import AddModalBtn from "../../AddAppointmentModal/AddAppointmentModalButton/AddModalBtn";

const Navbar2 = () => {
  return (
    <>
      <div
        style={{ width: "100%", backgroundColor: "#1757C2", display: "flex" }}
      >
        <div style={{ width: "45%" }}>
          <Date />
        </div>
        <div style={{ width: "50%" }}>
          <NavRight />
        </div>
      </div>
    </>
  );
};
export default Navbar2;

const NavRight = function () {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "30px",
          height: "50px",
          color: "white",
        }}
      >
        <h3 style={{ fontSize: "15px", marginRight: "20px" }}>
          Appointment Letter
        </h3>
        <div style={{ display: "flex" }}>
          <div>
            <AddModalBtn />
          </div>
          <div>
            <Button
              style={{
                marginLeft: "10px",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#134CAB",
                fontSize: "12px",
              }}
            >
              Print
              <LocalPrintshopOutlinedIcon style={{ fontSize: "15px" }} />
            </Button>
          </div>
          <div>
            <Button
              style={{
                marginLeft: "10px",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#134CAB",
                fontSize: "12px",
              }}
            >
              Reports
              <SummarizeOutlinedIcon style={{ fontSize: "15px" }} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
