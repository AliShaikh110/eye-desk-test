import Grid from "@mui/material/Grid";
import React from "react";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

export function ColorVision() {
    return (
        <>
            <Grid container  rowSpacing={"1.5rem"} paddingTop={"0.1rem"} paddingBottom={"1rem"} >
                <Grid item sm={12} md={12} >
                    <ArrowBtnLayout label={"COLOR VISION"} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelCommentLayout  label={"Comment"} />
                </Grid>

            </Grid>
        </>
    )
}