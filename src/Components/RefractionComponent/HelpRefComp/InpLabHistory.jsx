import React from "react";

import { Grid, Stack } from "@mui/material";
import { TextFieldInp } from "./MiniComponentRef";

function InpLabHistory({label, sideLabel}) {

    return(

        <Grid container>
            <Grid item sm={9.5} md={8.8} lg={9.5}>
                <TextFieldInp sx={{fontSize:{md:"0.78rem", lg:"0.9rem"}}} label={label} backgroundColor={"white"} />
            </Grid>
            <Grid sm={2.5} item md={3.2} lg={2.5}>
                <Stack sx={{ width: "100%", 
                flexDirection: "row", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "100%", 
                bgcolor: "#F5F1f2" ,
                border:"1px solid gray",
                borderRadius:"0.2rem",
                borderColor:"rgb(118, 118, 118)",
                color:"rgba(105, 105, 105, 0.55)"
                }}>
                {sideLabel}
                </Stack>
            </Grid>
        </Grid>
    )
}

export default InpLabHistory;