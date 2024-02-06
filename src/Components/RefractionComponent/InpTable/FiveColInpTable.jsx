import { Grid, Typography } from "@mui/material"
import React from "react"
import { TextFieldInp } from "../HelpRefComp/MiniComponentRef"

export  function FiveColInpTable({
    firstInpLabel,
    secondInpLabel,
    thirdInpLabel
}) {

    return (
        <>
                
            <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
                <Grid item sm={12} md={12}>
                    <Grid container bgcolor={"#337eff"}>

                        <Grid item sm={2.4} md={2.4}></Grid>
                        <Grid item sm={2.4} md={2.4} ><Typography textAlign={"center"} variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Sph</Typography> </Grid>
                        <Grid item sm={2.4} md={2.4} ><Typography textAlign={"center"} variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Cyl</Typography> </Grid>
                        <Grid item sm={2.4} md={2.4} ><Typography textAlign={"center"} variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Axis</Typography> </Grid>
                        <Grid item sm={2.4} md={2.4} ><Typography textAlign={"center"} variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Vision</Typography> </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"transparent"} label={firstInpLabel} disabled={true}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"} /></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp   backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp   backgroundColor={"white"}/></Grid>

                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"transparent"}  label={secondInpLabel}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>

                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"transparent"} label={thirdInpLabel} /></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
                <Grid item sm={2.4} md={2.4}><TextFieldInp  backgroundColor={"white"}/></Grid>
            </Grid>
        </>
    )
}