import { Grid, Stack, Typography } from "@mui/material"
import React from "react"
import { UcvaFirstMaping, UcvaSecondMaping } from "../Mapping"
import ButtonComp from "../../HelpRefComp/HelpRefComp"
import { LabelSelectRefraction } from "../../HelpRefComp/LabelSelectRef"

export function FirstUcvaLayout() {

    return (
        <>
            <Grid container rowSpacing={"2rem"}>
                <Grid item sm={1.5} md={1.5}><Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.9rem"}}} >UCVA</Typography></Grid>
                <Grid item sm={9} md={9}>

                    <UcvaFirstMaping />
                </Grid>
                <Grid item sm={1.5} md={1.5}>
                    <Stack flexDirection={"row"} justifyContent={"end"}>
                        <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export function SecondUcvaLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}></Grid>
            <Grid item sm={9} md={9}>
                <UcvaSecondMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}

// ****** Just inject after ucva **********

export function SelectLabelAfterUcva() {

    return (
        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <Grid item sm={1.5} md={1.5}>

            </Grid>
            <Grid item sm={9} md={9}>
                <Grid container columnSpacing={1.5}>
                    <Grid item sm={1} md={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Typography sx={{fontSize:{md:"0.78rem", lg:"0.85rem"}}} >PR:</Typography>
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"S"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"I"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"N"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"T"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item sm={1.5} md={1.5}>
            </Grid>
        </Grid>
    )
}