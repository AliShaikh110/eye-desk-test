import { Grid, Typography } from "@mui/material"
import React from "react"
import SelectAutoWidth from "./MiniComponentRef"


export function LabelSelectRefraction({
    label,
    mdTypo=2,
    mdSelect=10,
    justifyContent="center",
    selectInpLabel,
    smTypo,
    smSelect,
    labelSpace

}){

return(
    <Grid container columnSpacing={0.5}>
        <Grid item sm={smTypo} md={mdTypo} sx={{display:"flex", flexDirection:"row", justifyContent:{justifyContent}, alignItems:"center"}}>
            <Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.85rem"}}}>{label}</Typography>
        </Grid>
        <Grid item sm={smSelect} md={mdSelect}>
            <SelectAutoWidth  bgcolor={"white"} width={"100%"} selectInpLabel={selectInpLabel} labelSpace={labelSpace} />
        </Grid>
    </Grid>
)
}