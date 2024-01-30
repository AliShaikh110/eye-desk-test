import { Grid, Typography } from "@mui/material";
import React from "react";
import { TextFieldInp } from "../HelpRefComp/MiniComponentRef";

export  function FourColInpTable({
    inpLabel
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item sm={12} md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item sm={3} md={3}></Grid>
                        <Grid item sm={3} md={3}><Typography variant="subtitle1" fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Sph</Typography> </Grid>
                        <Grid item sm={3} md={3}><Typography variant="subtitle1" fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Cyl</Typography> </Grid>
                        <Grid item sm={3} md={3}><Typography variant="subtitle1" fontSize={{sm:"0.95rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Axis</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"transparent"} label={inpLabel} disabled={true}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"} /></Grid>
                <Grid item sm={3} md={3}><TextFieldInp   backgroundColor={"white"}/></Grid>

                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"transparent"}  /></Grid>
                <Grid item sm={3} md={3}><TextFieldInp backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>

                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"transparent"}  /></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
            </Grid>
        </>
    )
}