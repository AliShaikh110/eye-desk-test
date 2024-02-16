import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import ArrowBtn from "../HelpRefComp/ArrowBtn";
import { FiveColInpTable } from "../InpTable/FiveColInpTable";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

export function DryRefraction() {

    return (
        <>
            <Grid container rowSpacing={"1.5rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"}>
                <Grid item sm={12} md={12} >
                    <ArrowBtnLayout label={"DRY REFRACTION"} />
                </Grid>
                <Grid item sm={1.5} md={1.8} lg={1.5} >
                    <Box marginBottom={"0.6rem"}>
                            <ArrowBtn label={"Fill"} padding={"0.05rem 0.0rem"} width={"3.5rem"} mdFontSize={"0.7rem"} />
                    </Box>
                        <ArrowBtn label={"Copy"} padding={"0.05rem 0.0rem"} width={"3.5rem"} mdFontSize={"0.7rem"} />
                </Grid>
                <Grid item sm={10.5} md={10.2} lg={10.5}>
                    <FiveColInpTable />
                </Grid>
                <Grid item sm={12} md={12}>
                    <LabelCommentLayout size={"small"} />
                </Grid>




                {/* <Grid item md={12} sm={12}>
                    <Grid container >
                        <Grid item sm={1.5} md={1.8} lg={1.5}>
                            <Box marginBottom={"0.6rem"}>
                                <Box sx={{ width: "100%" }}>
                                    <ArrowBtn label={"Fill"} padding={"0.05rem 0.0rem"} width={"3.5rem"} mdFontSize={"0.7rem"} />
                                </Box>
                            </Box>

                            <Box>

                                <ArrowBtn label={"Copy"} padding={"0.05rem 0.0rem"} width={"3.5rem"} mdFontSize={"0.7rem"} />
                            </Box>
                        </Grid>

                        <Grid item sm={10.5} md={10.2} lg={10.5}>
                            <FiveColInpTable inpLabel={"Dry"} />
                        </Grid>
                    </Grid>
                </Grid> */}

                {/* <Grid item sm={12} md={12}>
                    <LabelCommentLayout size={"small"} />
                </Grid> */}

            </Grid>
        </>
    )
}
// export function DryRefraction() {

//     return (
//         <>
//             <Grid container rowSpacing={"1.5rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"}>
//                 <Grid item sm={12} md={12} >
//                     <ArrowBtnLayout label={"DRY REFRACTION"} />
//                 </Grid>


//                 <Grid item md={12} sm={12}>
//                     <Grid container >
//                         <Grid item sm={1.5} md={1.8} lg={1.5}>
//                             <Box marginBottom={"0.6rem"}>
//                                 <Box sx={{ width: "100%" }}>
//                                     <ArrowBtn label={"Fill"} padding={"0.05rem 0.0rem"} width={"3.5rem"} mdFontSize={"0.7rem"}  />
//                                 </Box>
//                             </Box>

//                             <Box>

//                                 <ArrowBtn label={"Copy"} padding={"0.05rem 0.0rem"} width={"3.5rem"} mdFontSize={"0.7rem"}  />
//                             </Box>
//                         </Grid>

//                         <Grid item sm={10.5} md={10.2} lg={10.5}>
//                             <FiveColInpTable inpLabel={"Dry"} />
//                         </Grid>
//                     </Grid>
//                 </Grid>

//                 <Grid item sm={12} md={12}>
//                     <LabelCommentLayout size={"small"} />
//                 </Grid>

//             </Grid>
//         </>
//     )
// }