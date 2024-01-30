import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { UcvaFirstMaping } from "../Mapping";
import ButtonComp from "../../HelpRefComp/HelpRefComp";

export function ContactLensLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}><Typography sx={{fontSize:{sm:"0.8rem",md:"0.78rem", lg:"0.9rem"}}}>Contact Lens</Typography></Grid>
            <Grid item sm={9} md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}