import { Grid } from "@mui/material";
import React from "react";
import ArrowBtn from "../HelpRefComp/ArrowBtn";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import ForwardIcon from '@mui/icons-material/Forward';

export function Orthoptics() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"2.5rem"} paddingX={"0.5rem"}>
                {/* <Grid item sm={12}
                 md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"ORTHOPTICS"} endIcon={<ForwardIcon />} />
                </Grid> */}

                <Grid item sm={12}
                 md={12}>
                    <LabelCommentLayout label="" />
                </Grid>

            </Grid>
        </>
    )
}