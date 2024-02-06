import { Box, Grid } from "@mui/material";
import React from "react";
import ArrowBtn from "../HelpRefComp/ArrowBtn";
import { FourColInpTable } from "../InpTable/FourColInpTable";
import ForwardIcon from '@mui/icons-material/Forward';

export function AutoRefractionAr() {
    return (
        <>

            <Grid container rowSpacing={"1.5rem"} columnSpacing={"0.5rem"} paddingTop={"0.6rem"} paddingBottom={"2.5rem"}>
                {/* <Grid item sm={12} md={12} >
                    <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"AUTO REFRACTION (ARx)"} endIcon={<ForwardIcon />} />
                </Grid> */}

                <Grid item sm={12} md={12} >
                    <Grid container>
                        <Grid item sm={1.5} md={1.5}>
                            <Box sx={{ width: "100%" }} className="myBtn">
                                <ArrowBtn hover label={"Fill"} padding={"0.1rem 0.0rem"} width={"3.8rem"} mdFontSize={"0.75rem"}  />
                            </Box>
                        </Grid>
                        <Grid item sm={10.5} md={10.5}>
                            <FourColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container>
                        <Grid item sm={1.5} md={1.5}></Grid>
                        <Grid item sm={10.5} md={10.5}>
                            <FourColInpTable inpLabel={"Dilated"} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}