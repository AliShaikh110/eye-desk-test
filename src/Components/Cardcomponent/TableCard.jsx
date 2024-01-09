import React, { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TableCard = ({ title, tableData, headers }) => {
  const [showAllRows, setShowAllRows] = useState(false);

  const visibleRows = showAllRows
    ? tableData.length
    : Math.min(tableData.length, 2);

  return (
    <>
      <Card
        style={{
          margin: "10px",
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
                  {headers &&
                    headers.map((header, index) => (
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
    </>
  );
};

export default TableCard;
