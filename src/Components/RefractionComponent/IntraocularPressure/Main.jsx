import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import ColorSlider from "../HelpRefComp/RangeSlider";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import { TextFieldRefraction } from "../HelpRefComp/MiniComponentRef";
import { TimerPick } from "../HelpRefComp/TimePicker";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

export function Intraocular() {
    return (
        <>

            <Grid container rowSpacing={"1.5rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"}>
                {/* <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"AUTO REFRACTION (ARx)"} endIcon={<ForwardIcon />} />
                </Grid> */}
                <Grid item md={12}>
                    <ArrowBtnLayout label={"INTRAOCULAR PRESSURE (IOP)"} />
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container  >
                        <Grid item sm={1.5} md={1.5}>
                            {/* <Box sx={{ width: "100%" }} className="myBtn">
                                <ArrowBtn hover label={"Fill"} padding={"0.05rem 0.3rem"} mdFontSize={"0.7rem"} endIcon={<ForwardIcon style={{ fontSize: "large" }} />} />
                            </Box> */}
                        </Grid>
                        <Grid item sm={10.5} md={10.5} >
                            <Grid container rowSpacing={"1rem"} columnSpacing={4} >
                                <Grid item sm={5} md={5}>
                                    <ColorSlider />
                                </Grid>
                                <Grid item sm={6} md={6}>

                                    <Grid container columnSpacing={0.5}>
                                        <Grid item sm={9} md={9}>
                                            <TextFieldRefraction size={"small"} width={"100%"} backgroundColor={"white"} />
                                        </Grid>
                                        <Grid item sm={3} md={3} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"start"}>
                                            <Typography sx={{ fontSize: { sm: "0.8rem", md: "0.78rem", lg: "0.9rem" } }}>
                                                mmHg
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* <Grid item md={4}></Grid> */}
                                <Grid item sm={6} md={6}  >
                                    <TimerPick />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12}>
                    <LabelCommentLayout />
                </Grid>

            </Grid>
        </>
    )
}