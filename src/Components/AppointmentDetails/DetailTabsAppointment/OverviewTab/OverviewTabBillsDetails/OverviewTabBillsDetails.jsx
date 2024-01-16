import { Button, Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OverviewTabBillsDetails = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>All Bills</h2>
        <Typography>
          Bill Amount : <span>$2500.00</span>
        </Typography>
        <Button variant="contained" sx={{ fontSize: "10px" }}>
          Bills
        </Button>
      </div>
      <TableContainer
        sx={{ width: "70%", backgroundColor: "#EEF0E5" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", color: "green" }}>
                Received
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#F4CE14" }}>
                Pending
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "blue" }}>
                Net Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>$2500</TableCell>
              <TableCell>$500</TableCell>
              <TableCell>$3000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OverviewTabBillsDetails;
