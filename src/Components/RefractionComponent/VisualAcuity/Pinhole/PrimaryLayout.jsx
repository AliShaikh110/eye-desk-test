import { Grid, Stack, Typography } from "@mui/material"
import React from "react"
import { UcvaFirstMaping } from "../Mapping"
import ButtonComp from "../../HelpRefComp/HelpRefComp"


export function PinholeLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}><Typography sx={{fontSize:{sm:"0.8rem",md:"0.78rem", lg:"0.9rem"}}}>Pinhole</Typography></Grid>
            <Grid item sm={9} md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"column"} spacing={0.1} alignItems={"end"}>
                    <ButtonComp smFontSize={"0.75rem"}  mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"0px"} label={"P"} color={"black"} />
                    <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"9px"} padding={"6px 13.5px"} label={"NI"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}