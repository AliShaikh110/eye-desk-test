import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { UcvaFirstMaping } from "../Mapping";
import ButtonComp from "../../HelpRefComp/HelpRefComp";

export function GlassesLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}><Typography sx={{fontSize:{sm:"0.8rem", md:"0.77rem", lg:"0.77rem"}, fontWeight:600}}>Glasses</Typography></Grid>
            <Grid item sm={9} md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp hover={{color: "white", fontWeight:"600"}} smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}