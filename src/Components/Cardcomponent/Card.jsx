import Task from "../TaskComponent/Task";
import React, { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import cardsData from './Content';
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
} from "@mui/material";

const CardComponent = ({ title, tableData, headers }) => {
  const [showAllRows, setShowAllRows] = useState(false);

  const visibleRows = showAllRows ? tableData.length : Math.min(tableData.length, 2);

  return (
    <Card
      style={{
        width: "100%",
        flexShrink: 0,
        borderRadius: "3px",
        background: "#FFF",
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
          <RemoveCircleIcon
            style={{ color: "#1757C2", cursor: "pointer" }}
            onClick={() => setShowAllRows(!showAllRows)}
          />
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: "#1757C2" }}>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    key={index}
                    style={{ padding: "5px 10px 5px 10px", color: "white" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.slice(0, visibleRows).map((row) => (
                <TableRow key={row.patientId}>
                  {Object.keys(row).map((key, index) => (
                    <TableCell key={index} style={{ padding: "10px" }}>
                      {row[key]}
                    </TableCell>
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

const PatientCard = () => {
  return (
    <Grid style={{ display: "flex", backgroundColor: "#F5F5F5"}}>
      <Grid container p={5} spacing={2} item sm={12} xs={12} md={9}>
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} md={6}>
            <CardComponent {...card} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={3} sm={12} style={{ margin: "30px" }}>
        <Task />
      </Grid>
    </Grid>
  );
};

export default PatientCard;

