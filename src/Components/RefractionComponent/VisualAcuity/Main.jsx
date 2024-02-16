import Grid from "@mui/material/Grid";
import React from "react";
import { ContactLensLayout, FirstUcvaLayout, GlassesLayout, PinholeLayout, SecondUcvaLayout, SelectLabelAfterUcva } from "./Primary/Primary";
// import { FirstUcvaLayout, SecondUcvaLayout, SelectLabelAfterUcva } from "./Ucva/PrimaryLayout";
// import { PinholeLayout } from "./Pinhole/PrimaryLayout";
// import { GlassesLayout } from "./Glasses/PrimaryLayout";
// import { ContactLensLayout } from "./ContactLens/PrimaryLayout";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

export function VisualAcuityV3Merging() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"} >
                {/* <Grid item md={12}>
                    <ArrowBtnLayout label={"VISUAL ACUITY (V3)"} />
                </Grid> */}

                <Grid item sm={12} md={12}>
                    <FirstUcvaLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <SecondUcvaLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <SelectLabelAfterUcva />
                </Grid>
                <Grid item sm={12} md={12}>
                    <PinholeLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <GlassesLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <SecondUcvaLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <ContactLensLayout />
                </Grid>
                <Grid item sm={12} md={12}>
                    <LabelCommentLayout />
                </Grid>
            </Grid>
        </>
    )
};