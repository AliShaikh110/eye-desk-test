import { Grid, Typography } from "@mui/material";
import React from "react";
import { TextFieldInp } from "../HelpRefComp/MiniComponentRef";

export  function ThreeColInpTable({
    oneRowOneCol,
    secRowOneCol
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item sm={12} md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item sm={4} md={4}><Typography variant="subtitle1" fontWeight={600} color={"white"}></Typography> </Grid>
                        <Grid item sm={4} md={4}><Typography variant="subtitle1" fontWeight={600} color={"white"}></Typography> </Grid>
                        <Grid item sm={4} md={4}><Typography variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}}>Axis</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"transparent"} label={oneRowOneCol} disabled={true}/></Grid>
                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"white"} /></Grid>

                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"transparent"} label={secRowOneCol} /></Grid>
                <Grid item sm={4} md={4}><TextFieldInp backgroundColor={"white"}/></Grid>
                <Grid item sm={4} md={4}><TextFieldInp  backgroundColor={"white"}/></Grid>

            </Grid>
        </>
    )
}