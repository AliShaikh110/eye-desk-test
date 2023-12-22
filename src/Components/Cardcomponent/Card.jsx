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
  Grid,
  // Checkbox,
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
            <TableHead style={{ backgroundColor: "#1757C2"}}>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell key={index}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.patientId}>
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
        id:1,
        patientId: "8326826",
        patientName: "Patient_1",
        scheduleTime: "10:00 AM",
      //   check:<Checkbox
      //   color="primary"
      //   disabled
      //   label=""
      //   size="sm"
      //   variant="solid"
      // />
      },
      {
        id:2,
        patientId: "937493",
        patientName: "Patient_2",
        scheduleTime: "11:30 AM",
      },
      {
        id:3,
        patientId: "97397293",
        patientName: "Patient_2",
        scheduleTime: "11:30 AM",
      },
    ],
    headers: ["#", "Patient ID", "Patient Name", "Schedule Time", " "],
  },
  {
    title: "OT List Today",
    tableData: [
      {
        id:1,
        patientId:'212289',
        patientName: "No - OTs",
      },
    ],
    headers: ["#", "Patient Name", "OT Time"," "],
  },
  {
    title: "Another List Today",
    tableData: [
      {
        id:1,
        patientId: "47942792",
        patientName: "Patient_1",
        scheduleTime: "12:00 PM",
      },
    ],
    headers: ["#", "Patient ID", "Patient Name", "Schedule Time", " "],
  },
  {
    title: "Admitted Patient List",
    tableData: [
      {
        id:1,
        patientId: "84794922",
        patientName: "Patient_1",
        scheduleTime: "10:00 AM",
      },
    ],
    headers: ["#", "Patient ID", "Patient Name", "Schedule Time"," "],
  },
  {
    title: "Discharge List Today",
    tableData: [
      {
        id:1,
        patientId:"587686",
        PatientName: "Patient_1",
        DischargeTime: "10:00 AM",
      },
    ],
    headers: ["#", "Patient Name", "Discharge Time", " "],
  },
];

const PatientCard = () => {
  return (
    <Grid style={{ display: "flex", backgroundColor: "#F5F5F5" }}>
      <Grid
        container
        p={5}
        spacing={2}
        item
        sm={12}
        xs={12}
        md={8}
      >
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} md={6}>
            <CardComponent {...card} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={4} sm={12} style={{margin:'30px'}}>
        <Task />
      </Grid>
    </Grid>
  );
};

export default PatientCard;
