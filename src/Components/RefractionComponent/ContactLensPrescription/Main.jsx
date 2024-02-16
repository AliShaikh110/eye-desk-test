import Grid  from "@mui/material/Grid";
import React from "react";
import { SixColInpTable } from "../InpTable/SixColInpTable";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

export function ContactLensPrescriptions() {
    return (
        <>
            <Grid container rowSpacing={"1.5rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"} >
                <Grid item sm={12} md={12} >
                    {/* <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"CONTACT LENS PRESCRIPTIONS (CL)"} endIcon={<ForwardIcon />} /> */}
                    <ArrowBtnLayout label={"CONTACT LENS PRESCRIPTIONS (CL)"} />
                </Grid>

                <Grid item sm={12} md={12}>
                    <Grid container rowSpacing={"1.5rem"} >
                        <Grid item sm={1.5} md={1.5}>

                        </Grid>

                        <Grid item sm={10.5} md={10.5}>
                            <SixColInpTable />
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <LabelCommentLayout label={"Revisit Date"} mdLabel={1.5} mdTextField={4.3} />
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Grid container columnSpacing={1}>
                                <Grid item sm={15} md={1.5}></Grid>
                                <Grid item sm={6} md={5.25} >
                                    <LabelCommentLayout label={"Color"} smLabel={3} smTextField={9} mdLabel={2} mdTextField={8} />
                                </Grid>
                                <Grid item sm={6} md={5.25} >
                                    <LabelCommentLayout label={"Type"} smLabel={3} smTextField={9} mdLabel={2} mdTextField={8} justifyContent={"center"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <LabelCommentLayout label={"Advice"} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}