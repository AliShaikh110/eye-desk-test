import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { TextFieldInp } from "../HelpRefComp/MiniComponentRef";

export  function SixColInpTable({
    firstInpLabel,
    secondInpLabel,
    thirdInpLabel
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item sm={12} md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item sm={2} md={2}><Typography textAlign={"center"} variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}}>BC</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography textAlign={"center"} variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}}>DIA</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography textAlign={"center"} variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}}>SPH</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography textAlign={"center"} variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}}>CYL</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography textAlign={"center"} variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}}>AXIS</Typography> </Grid>
                        <Grid item sm={2} md={2}><Typography textAlign={"center"} variant="subtitle1" fontWeight={600} color={"white"} fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}}>ADD</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={2} md={2}><TextFieldInp  backgroundColor={"transparent"} /></Grid>
                <Grid item sm={2} md={2}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2} md={2}><TextFieldInp  backgroundColor={"white"} /></Grid>
                <Grid item sm={2} md={2}><TextFieldInp   backgroundColor={"white"}/></Grid>
                <Grid item sm={2} md={2}><TextFieldInp   backgroundColor={"white"}/></Grid>
                <Grid item sm={2} md={2}><TextFieldInp   backgroundColor={"white"}/></Grid>

                
            </Grid>
        </>
    )
}
