import { Stack, Typography } from "@mui/material";
import React from "react";
import error from "../ErrorImg/error.png"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function ErrorComp({
    label,
    mdFontSize,
    lgFontSize,
    smFontSize
}){

return(
    <>
        <Stack flexDirection={"row"} justifyContent={{sm:"start", md:"center"}} alignItems={"center"} paddingRight={{md:"1rem", lg :"2.25rem"}}>
                
            <Stack sx={{flexDirection:"row", alignItems:"start"}} >{<ErrorOutlineIcon fontSize="small" style={{color:"rgba(164, 164, 164, 1)"}} />}</Stack>
            <Typography  sx={{color:"rgba(164, 164, 164, 1)", fontSize:{md:mdFontSize,lg:lgFontSize, sm:smFontSize}, paddingX:"0.1rem"}}>{label}</Typography>
        </Stack>
    </>
)
}

export default ErrorComp;