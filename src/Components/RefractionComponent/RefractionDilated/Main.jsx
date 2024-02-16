import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import ArrowBtn from "../HelpRefComp/ArrowBtn";
import { FiveColInpTable } from "../InpTable/FiveColInpTable";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import { LabelSelectRefraction } from "../HelpRefComp/LabelSelectRef";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

export function RefractionDilated() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} paddingTop={"0.1rem"} paddingBottom={"1rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtnLayout label={"REFRACTION (DILATED)"} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container >
                        <Grid item sm={1.5} md={1.8} lg={1.5}>
                            
                            <Box  marginBottom={"0.5rem"}>
                                <ArrowBtn label={"Fill"} padding={"0.1rem 0.0rem"} width={"3.8rem"} mdFontSize={"0.75rem"} />
                            </Box>
                            <Box >
                                <ArrowBtn label={"Copy"} padding={"0.1rem 0.0rem"} width={"3.8rem"} mdFontSize={"0.75rem"} />
                            </Box>
                            
                        </Grid>

                        <Grid item sm={10.5} md={10.2} lg={10.5}>
                            <FiveColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelSelectRefraction smTypo={1.5} mdTypo={1.5}  label={"Drug Used"} smSelect={5} mdSelect={5} justifyContent={"start"} labelSpace={""} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelCommentLayout size={"small"} />
                </Grid>

            </Grid>
        </>
    )
}