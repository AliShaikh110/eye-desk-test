import Grid from "@mui/material/Grid";
import React from "react";
import { ThreeColInpTable } from "../InpTable/ThreeColInpTable";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

export function Keratometry() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"} >
                <Grid item sm={12} md={12} >
                    <ArrowBtnLayout label={"KERATOMETRY (K)"} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container rowSpacing={"1.5rem"}>
                        <Grid item sm={1.5} md={1.5}></Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <ThreeColInpTable oneRowOneCol={"Kh"} secRowOneCol={"Kv"} />
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <LabelCommentLayout />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}