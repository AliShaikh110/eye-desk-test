import Grid  from "@mui/material/Grid";
import React from "react";
import { ContrastSensiLayout } from "./PrimaryLayout";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

export function ContrastSensi() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtnLayout label={"CONTRAST SENSITIVITY"} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <ContrastSensiLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <LabelCommentLayout />
                </Grid>

            </Grid>
        </>
    )
}
