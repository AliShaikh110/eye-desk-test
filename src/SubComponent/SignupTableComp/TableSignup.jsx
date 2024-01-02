import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const TableSignup = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ Width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: 600, fontSize: "0.75rem" }}
              align="center"
            >
              Single User
            </TableCell>
            <TableCell
              sx={{ fontWeight: 600, fontSize: "0.75rem" }}
              align="center"
            >
              Small Clinic
            </TableCell>
            <TableCell
              sx={{ fontWeight: 600, fontSize: "0.75rem" }}
              align="center"
            >
              Mid-Size Hospital
            </TableCell>
            <TableCell
              sx={{ fontWeight: 600, fontSize: "0.75rem" }}
              align="center"
            >
              Large Hospital
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ fontSize: "0.75rem" }}>
              1 User
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "0.75rem" }}>
              Max 5 Users
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "0.75rem" }}>
              Max 10 Users
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "0.75rem" }}>
              Max 20 Users
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CurrencyRupeeIcon
                  fontSize="small"
                  color="primary"
                  sx={{ fontSize: "1rem" }}
                />
                <Typography fontSize={"0.85rem"} color={"primary"}>
                  15,000/year
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="center">
              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CurrencyRupeeIcon
                  fontSize="small"
                  color="primary"
                  sx={{ fontSize: "1rem" }}
                />
                <Typography fontSize={"0.85rem"} color={"primary"}>
                  54,000/year
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="center">
              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CurrencyRupeeIcon
                  fontSize="small"
                  color="primary"
                  sx={{ fontSize: "1rem" }}
                />
                <Typography fontSize={"0.85rem"} color={"primary"}>
                  99,000/year
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="center">
              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CurrencyRupeeIcon
                  fontSize="small"
                  color="primary"
                  sx={{ fontSize: "1rem" }}
                />
                <Typography fontSize={"0.85rem"} color={"primary"}>
                  1,72,500/year
                </Typography>
              </Stack>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSignup;
