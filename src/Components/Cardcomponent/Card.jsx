import Task from "../TaskComponent/Task";
import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
} from "@mui/material";

const CardComponent = ({ title, tableData, headers }) => {
  return (
    <Card
      style={{
        width: "100%",
        flexShrink: 0,
        borderRadius: "3px",
        background: "#FFF",
        boxShadow:
          "0px 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 3px 3px 0px rgba(0, 0, 0, 0.04), 0px 7px 4px 0px rgba(0, 0, 0, 0.03), 0px 12px 5px 0px rgba(0, 0, 0, 0.01), 0px 19px 5px 0px rgba(0, 0, 0, 0.00)",
        marginBottom: "20px",
      }}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5>{title}</h5>
          <RemoveCircleIcon style={{ color: "#1757C2" }} />
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: "#1757C2" }}>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell key={index}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id} style={{ backgroundColor: "#F5F5F5;" }}>
                  {Object.keys(row).map((key, index) => (
                    <TableCell key={index}>{row[key]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

const cardsData = [
  {
    title: "Appointment List Today",

    tableData: [
      {
        id: 1,
        patientId: "8326826",
        patientName: "Patient_1",
        scheduleTime: "10:00 AM",
      },
      {
        id: 2,
        patientId: "937493",
        patientName: "Patient_2",
        scheduleTime: "11:30 AM",
      },
      {
        id: 2,
        patientId: "937493",
        patientName: "Patient_2",
        scheduleTime: "11:30 AM",
      },
    ],
    headers: ["#", "Patient ID", "Patient Name", "Schedule Time"],
  },
  {
    title: "OT List Today",
    tableData: [
      {
        patientId: " ",
        patientName: "No - OTs",
        scheduleTime: " ",
      },
    ],
    headers: ["#", "Patient Name", "OT Time"],
  },
  {
    title: "Another List Today",
    tableData: [
      {
        id: 1,
        patientId: "47942792",
        patientName: "Patient_1",
        scheduleTime: "12:00 PM",
      },
    ],
    headers: ["#", "Patient ID", "Patient Name", "Schedule Time"],
  },
  {
    title: "Admitted Patient List",
    tableData: [
      {
        id: 1,
        patientId: "84794922",
        patientName: "Patient_1",
        scheduleTime: "10:00 AM",
      },
    ],
    headers: ["#", "Patient ID", "Patient Name", "Schedule Time"],
  },
  {
    title: "Discharge List Today",
    tableData: [
      {
        id: "",
        PatientName: "Patient_1",
        DischargeTime: "10:00 AM",
      },
    ],
    headers: ["#", "Patient Name", "Discharge Time"],
  },
];

const PatientCard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "grid",
          width: "65%",
          gridTemplateColumns: "repeat(auto-fill, minmax(323px, 1fr))",
          gap: "20px",
          backgroundColor: "#F5F5F5",
          padding: "20px",
          borderRight:'2px solid gray'
        }}
      >
        {cardsData.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
      <div style={{ width: "35%", backgroundColor:'#F5F5F5' }}>
        <Task />
      </div>
    </div>
  );
};

export default PatientCard;
