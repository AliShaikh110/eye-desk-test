import { Box, Grid } from "@mui/material";
import React from "react";
import ArrowBtn from "../HelpRefComp/ArrowBtn";
import { FiveColInpTable } from "../InpTable/FiveColInpTable";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import { LabelSelectRefraction } from "../HelpRefComp/LabelSelectRef";
import ForwardIcon from '@mui/icons-material/Forward';

export function RefractionDilated() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"1rem"}>
                {/* <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"REFRACTION (DILATED)"} endIcon={<ForwardIcon />} />
                </Grid> */}

                <Grid item sm={12} md={12}>
                    <Grid container >
                        <Grid item sm={1.5} md={1.8} lg={1.5}>
                            
                            <Box className="myBtn" marginBottom={"0.5rem"}>
                                <ArrowBtn label={"Fill"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
                            </Box>
                            <Box className="myBtn">
                                <ArrowBtn label={"Copy"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ paddingLeft: "-1rem", fontSize: "1.1rem" }} />} />
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