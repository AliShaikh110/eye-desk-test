import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VaccinesIcon from "@mui/icons-material/Vaccines";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    border: "0.5px solid black",
    color: "black",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  color: "black",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "22ch",
      "&:focus": {
        width: "28ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <img
            src="data:image/webp;base64,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"
            alt="..."
            height='30px'
          />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
            <IconButton size="small">
              <FavoriteBorderIcon /> OT
            </IconButton>
            <IconButton size="small">
              <DriveEtaIcon /> IPD
            </IconButton>
            <IconButton size="small">
              <VaccinesIcon /> OPD
            </IconButton>
            <IconButton size="small">
              <ShoppingCartIcon /> Stores
            </IconButton>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by ID"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <IconButton size="small">
              <SettingsSuggestIcon /> Set State
            </IconButton>
            <IconButton size="small">
              <LocalHospitalIcon /> AEH
            </IconButton>
            <IconButton size="small">Summary</IconButton>
            <IconButton size="large">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
