import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const NavState = () => {
    return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <IconButton size="small" sx={{ color: "black", fontSize: "15px" }}>
            <SettingsSuggestIcon sx={{ fontSize: "20px" }} /> Set State
          </IconButton>
          <IconButton size="small" sx={{ color: "black", fontSize: "15px" }}>
            <LocalHospitalIcon sx={{ fontSize: "20px" }} /> AEH
          </IconButton>
          <IconButton size="small" sx={{ color: "black", fontSize: "15px" }}>
            Summary
          </IconButton>
        </Box>
      );
    }
export default NavState

