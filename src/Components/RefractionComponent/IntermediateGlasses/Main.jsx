import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import ArrowBtn from "../HelpRefComp/ArrowBtn";
import { FiveColInpTable } from "../InpTable/FiveColInpTable";
import { LabelSelectRefraction } from "../HelpRefComp/LabelSelectRef";
import InpLabHistory from "../HelpRefComp/InpLabHistory";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

export function IntermediateGlassesPrescriptions() {
    return (
        <>
            <Grid container  rowSpacing={"1.5rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtnLayout label={"INTERMEDIATE GLASSES PRESCRIPTIONS (Rx)"} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container >
                    <Grid item sm={1.5} md={1.8} lg={1.5}>
                        <Box className="myBtn">
                            <ArrowBtn label={"Fill"} padding={"0.1rem 0.0rem"} width={"3.8rem"} mdFontSize={"0.75rem"}  />
                        </Box>
                        </Grid>

                        <Grid item sm={10.5} md={10.2} lg={10.5}>
                            <FiveColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={6}>
                    <LabelSelectRefraction labelSpace={""} smTypo={3} smSelect={8} mdTypo={3} label={"Type of Lens"} mdSelect={8} justifyContent={"start"} />
                </Grid>
                <Grid item sm={1} md={1} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                    <Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.84rem"}, fontWeight:"550"}}>IPD</Typography>
                </Grid>
                <Grid item sm={4.94} md={4.94}>
                    <InpLabHistory sideLabel={"mm"} />
                </Grid>
                <Grid item sm={4.5} md={4.5}>
                    <LabelSelectRefraction labelSpace={""} smTypo={4} smSelect={7} mdTypo={4} label={"Lens Material"} mdSelect={7} justifyContent={"start"} />
                </Grid>
                <Grid item sm={3.75} md={3.75}>
                    <LabelSelectRefraction labelSpace={""} smTypo={3} smSelect={8} mdTypo={3} label={"Lens Tint"} mdSelect={8.5} justifyContent={"center"} />
                </Grid>
                <Grid item sm={3.75} md={3.75}>
                    <LabelSelectRefraction labelSpace={""} smTypo={3} smSelect={8} mdTypo={3.5} label={"Frame Material"} mdSelect={8.5} justifyContent={"center"} />
                </Grid>
                <Grid item sm={12} md={12}>
                    <LabelCommentLayout size={"small"} label={"Advice"} />
                </Grid>

            </Grid>
        </>
    )
}