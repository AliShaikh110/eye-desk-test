import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ButtonComp from "./BasicComp";

function HistoryBtn({
    label,
    padding,
}){

return(
    <>
            <ButtonComp hover={{color : "white", fontWeight:"550"}} backgroundColor={"white"}  label={label} width={"100%"}   color={"black"} smFontSize={"0.68rem"} mdFontSize={"0.7rem"} lgFontSize={"0.7rem"} padding={padding}/>
    </>
)
}

export default HistoryBtn;