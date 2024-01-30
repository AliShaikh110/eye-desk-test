import { Grid } from "@mui/material";
import React, { useState } from "react";
import ArrowBtn from "../HelpRefComp/ArrowBtn";
import { FirstUcvaLayout, SecondUcvaLayout, SelectLabelAfterUcva } from "./Ucva/PrimaryLayout";
import { PinholeLayout } from "./Pinhole/PrimaryLayout";
import { GlassesLayout } from "./Glasses/PrimaryLayout";
import { ContactLensLayout } from "./ContactLens/PrimaryLayout";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import HeaderAuto from "../HelpRefComp/HeaderAuto";
// import ForwardIcon from '@mui/icons-material/Forward';

export function VisualAcuityV3Merging({
    headLabel
}) 
{
    // sx={{display: displayRef ? "flex" : "none"}} 
    // const [displayRef, setDisplayRef] = useState(false)
    // const displayRefComp = () => {
        // setDisplayRef(!displayRef)
        // console.log(displayRef);
    // }
    return (
        <>
            {/* <Grid container>
                <Grid item sm={12} md={12}>
                    <HeaderAuto headLabel={headLabel} />
                </Grid>
            </Grid> */}

            {/* <Grid container>
                <Grid item sm={12} md={12} >
                    <ArrowBtn onClick={displayRefComp}  hover={"green"}  mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"VISUAL ACUITY (V3)"} backgroundColor={"rgba(2, 184, 1, 1)"} endIcon={<ForwardIcon fontSize="large" />} />
                </Grid>
            </Grid> */}

            <Grid container  rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"2.5rem"} >
                
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