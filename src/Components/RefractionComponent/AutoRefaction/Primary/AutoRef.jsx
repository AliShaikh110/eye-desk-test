import React from "react";
import Grid from "@mui/material/Grid";
import ArrowBtn from "../HelpRefComp/ArrowBtn";
import { FourColInpTable } from "../InpTable/FourColInpTable";

export function AutoRefractionAr() {
    return (
        <>

            {/* <Grid container rowSpacing={"1.5rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"}>

                <Grid item sm={12} md={12} >

                    <Grid container>
                        <Grid item sm={1.5} md={1.8} lg={1.5}>
                            <Box sx={{ width: "100%" }} className="myBtn">
                                <ArrowBtn label={"Fill"} padding={"0.05rem 0.0rem"} width={"3.5rem"} mdFontSize={"0.7rem"} />
                            </Box>
                        </Grid>
                        <Grid item sm={10.5} md={10.2} lg={10.5}>
                            <FourColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container>
                        <Grid item sm={1.5} md={1.8} lg={1.5}></Grid>
                        <Grid item sm={10.5} md={10.2} lg={10.5}>
                            <FourColInpTable inpLabel={"Dilated"} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}

            <Grid container>
                <Grid item sm={1.5} md={1.5}>
                    <ArrowBtn label={"Fill"} padding={"0.05rem 0.0rem"} width={"3.5rem"} mdFontSize={"0.7rem"} />
                </Grid>
                <Grid item sm={10.5} md={10.5}>
                    <FourColInpTable  />
                </Grid>

                <Grid item sm={1.5} md={1.8} lg={1.5}></Grid>
                <Grid item sm={10.5} md={10.2} lg={10.5}>
                    <FourColInpTable  />
                </Grid>
            </Grid>
        </>
    )
}