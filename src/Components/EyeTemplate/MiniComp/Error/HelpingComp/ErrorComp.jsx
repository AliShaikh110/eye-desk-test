import { Stack, Typography } from "@mui/material";
import React from "react";
import error from "../ErrorImg/error.png"

function ErrorComp({
    label,
    mdFontSize,
    lgFontSize,
    smFontSize
}){

return(
    <>
        <Stack flexDirection={"row"} justifyContent={{sm:"start", md:"center"}} alignItems={"center"} paddingRight={"0.7rem"}>
            
            <img src={error} />
            <Typography  sx={{color:"rgba(164, 164, 164, 1)", fontSize:{md:mdFontSize,lg:lgFontSize, sm:smFontSize}, paddingX:"0.1rem"}}>{label}</Typography>
        </Stack>
    </>
)
}

export default ErrorComp;