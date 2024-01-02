import { Stack, Typography } from "@mui/material";
import React from "react";

const RadioBtnSignup = ({
    buttonName,
    fontWeight,
    fontSize,
    color
}) => {
  return (
    <>
  <Stack display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
            <input 
                type="radio"
            

            />
            <Typography fontSize={fontSize} fontWeight={fontWeight} color={color} sx={{paddingX:0.4,color:"#373737"}}>{buttonName}</Typography>
        </Stack>
    </>
  )
}

export default RadioBtnSignup