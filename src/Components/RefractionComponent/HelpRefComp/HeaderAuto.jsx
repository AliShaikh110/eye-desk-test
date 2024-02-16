import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

function HeaderAuto({
    headLabel
}){

return(
    <>
        <Box sx={{width:"100%"}}  bgcolor={"#1757C2"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"center"} marginBottom={"0.3rem"}>
            <Typography variant="h5" color={"white"}  fontWeight={600}>{headLabel}</Typography>
        </Box>
    </>
)
}

export default HeaderAuto;