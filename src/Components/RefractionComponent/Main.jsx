// import React, { useEffect, useState } from "react";
// import { Box, Grid } from "@mui/material";
// import { VisualAcuityV3Merging } from "./VisualAcuity/Main";
// import { AutoRefractionAr } from "./AutoRefaction/Main";
// import { DryRefraction } from "./DryRefraction/Main";
// import { RefractionDilated } from "./RefractionDilated/Main";
// import { Pgp1 } from "./Pgp1/Main";
// import { GlassesPrescriptions } from "./GlassesPrescription/Main";
// import { IntermediateGlassesPrescriptions } from "./IntermediateGlasses/Main";
// import { Pmt } from "./Pmt/Main";
// import Retinoscopyy from "./RetinosCopy/Main";
// import { Keratometry } from "./Keratometry/Main";
// import { ContactLensPrescriptions } from "./ContactLensPrescription/Main";
// import { ColorVision } from "./ColorVision/Main";
// import { ContrastSensi } from "./ContrastSensi/Main";
// import { Orthoptics } from "./Orthoptics.jsx/Main";
// import ArrowBtnLayout from "./HelpRefComp/ArrowBtnLayout";
// import { Intraocular } from "./IntraocularPressure/Main";
// import Amsler from "./Amsler/Main";
// import ButtonComp from "./HelpRefComp/HelpRefComp";

// export default function Refraction({ backgroundColor }) {
//     const [row1, setRow1] = useState(Array(3).fill(false))
//     const [row2, setRow2] = useState(Array(3).fill(false))
//     const [row3, setRow3] = useState(Array(3).fill(false))
//     const [row4, setRow4] = useState(Array(3).fill(false))
//     const [row5, setRow5] = useState(Array(3).fill(false))
//     const [row6, setRow6] = useState(Array(1).fill(false))

//     const data1 = [<VisualAcuityV3Merging />, <Intraocular />, <AutoRefractionAr />]
//     const data2 = [ <DryRefraction />,<RefractionDilated />, <Pgp1 />]
//     const data3 = [ <GlassesPrescriptions />, <IntermediateGlassesPrescriptions />,<Pmt />]
//     const data4 = [<Retinoscopyy />, <Keratometry />, <Amsler />]
//     const data5 = [<ContactLensPrescriptions />, <ColorVision />, <ContrastSensi />]
//     const data6 = [ <Orthoptics />]
//     const [displayItem1, setDisplayItem1] = useState(true)
//     const [displayItem2, setDisplayItem2] = useState(true)
//     const [displayItem3, setDisplayItem3] = useState(true)
//     const [displayItem4, setDisplayItem4] = useState(true)
//     const [displayItem5, setDisplayItem5] = useState(true)
//     const [displayItem6, setDisplayItem6] = useState(true)
//     // console.log(data1);

//     const disItem1Clicked = (value) => {
//         setDisplayItem1(value);
//     }
//     const disItem2Clicked = (value) => {
//         setDisplayItem2(value);
//     }
//     const disItem3Clicked = (value) => {
//         setDisplayItem3(value);
//     }
//     const disItem4Clicked = (value) => {
//         setDisplayItem4(value);
//     }
//     const disItem5Clicked = (value) => {
//         setDisplayItem5(value);
//     }
//     const disItem6Clicked = (value) => {
//         setDisplayItem6(value);
//     }

//     const displayCompRow1 = (index) => {
//         setRow1(row1.fill(false))
//         setRow1(row1.with(index, !row1[index]))
//     }
//     const displayCompRow2 = (index) => {
//         setRow2(row2.fill(false))
//         setRow2(row2.with(index, !row2[index]))
//     }
//     const displayCompRow3 = (index) => {
//         setRow3(row3.fill(false))
//         setRow3(row3.with(index, !row3[index]))
//     }
//     const displayCompRow4 = (index) => {
//         setRow4(row4.fill(false))
//         setRow4(row4.with(index, !row4[index]))
//     }
//     const displayCompRow5 = (index) => {
//         setRow5(row5.fill(false))
//         setRow5(row5.with(index, !row5[index]))
//     }
//     const displayCompRow6 = (index) => {
//         setRow6(row6.fill(false))
//         setRow6(row6.with(index, !row6[index]))
//     }
//     useEffect(() => {
//         setRow1([(!row1[0]), ...row1])
//         // console.log(row1);
//         setRow2([!row2[0], ...row2])
//         setRow3([!row3[0], ...row3])
//         setRow4([!row4[0], ...row4])
//         setRow5([!row5[0], ...row5])
//         setRow6([!row6[0], ...row6])
//     }, [])




//     // console.log(row1);

//     return (
//         <>
//             <style>
//                 {`
//             .myBtn .css-9tj150-MuiButton-endIcon {
//             display: inherit;
//             margin-right: -4px;
//             margin-left: 1;}
//             `}
//             </style>
//             <Box sx={{width:"100%", overflow:"hidden", display: "flex", justifyContent: "center", flexDirection: "row" }}>
//                 <Box sx={{ width:{md:"78%", lg:"60%",sm:"96%"}, marginLeft:"1rem" }} >




//                     {/* <Grid container columnSpacing={0.2} position={"fixed"} sx={{ zIndex: 10, }}>
//                         <Grid item sm={12} md={6}>
//                             <HeaderAuto headLabel={"R/OD"} />
//                         </Grid>
//                         <Grid item sm={12} md={6}>
//                             <HeaderAuto headLabel={"L/OS"} />
//                         </Grid>
//                     </Grid> */}
//                     <Grid container  bgcolor={"#f3f1f1"} columnSpacing={2} sx={{  border: "1px solid rgba(105, 105, 105, 0.5)", }} >


//                         <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", bgcolor: "#e6dced" }}>
//                             <Grid item>
//                                 <ArrowBtnLayout   label={"VISUAL ACUITY (V3)"} />
//                             </Grid>
//                             <Grid item>
//                                 <ArrowBtnLayout paddingX={"0.25rem"} label={"INTRAOCULAR PRESSURE (IOP)"} onClick={() => displayCompRow1(1)} hover={row1[1] ? "blue" : "green"} backgroundColor={row1[1] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
//                             <Grid item>
//                                 <ArrowBtnLayout paddingX={"0.25rem"} label={"AUTO REFRACTION (ARx)"} onClick={() => displayCompRow1(2)} hover={row1[2] ? "blue" : "green"} backgroundColor={row1[2] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
                            
//                         </Grid>

//                         {/* **********MapElements1******** */}
//                         <Grid container >
//                             {data1.map((key, i) => {
//                                 return (
//                                     <Grid key={i} item sm={12} md={12}>
//                                         <Grid container sx={{paddingX:"1.1rem",  display: row1[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0", borderLeft:0 }} >
//                                             <Grid item sm={12} md={12} display={"flex"} justifyContent={"start"} flexDirection={"row"}  paddingY={"0.5rem"}>
//                                                 <ButtonComp onClick={() => disItem1Clicked(true)} label={"Right"} backgroundColor={displayItem1 ? "#1976d2" : "white"} color={displayItem1 ? "white" : "black"}  hover={{backgroundColor:displayItem1? "blue" : "#f7f7f7"}} height={"2rem"} fontWeight={600} />
//                                                 <ButtonComp onClick={() => disItem1Clicked(false)} label={"Left"} backgroundColor={displayItem1 ? "white" : "#1976d2"} color={displayItem1 ? "black" : "white"}  hover={{backgroundColor:displayItem1? "#f7f7f7" : "blue" }} height={"2rem"} fontWeight={600} />
//                                             </Grid>
//                                             <Grid item sm={12} md={12} sx={{ display: displayItem1 ? "flex" : "none", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                             <Grid key={i} item sm={12} md={12} sx={{ display: displayItem1 ? "none" : "flex",  paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem",  background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                 )
//                             })}
//                         </Grid>
//                         {/* ********-----------********* */}

                      

//                         {/* **********Row2*********** */}
                        

//                         <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", border: "1px solid rgba(105, 105, 105, 0.5)", borderTop: 0, paddingY: "0.3rem", bgcolor: "#dad5df" }}>
//                             <Grid item>
//                                 <ArrowBtnLayout label={"DRY REFRACTION"} onClick={() => displayCompRow2(0)} hover={row2[0] ? "blue" : "green"} backgroundColor={row2[0] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
//                             <Grid item>
//                                 <ArrowBtnLayout hover={row2[1] ? "blue" : "green"} backgroundColor={row2[1] ? "#1757C2" : "rgba(2, 184, 1, 1)"} onClick={() => displayCompRow2(1)} label={"REFRACTION (DILATED)"} />
//                             </Grid>
//                             <Grid item>
//                                 <ArrowBtnLayout label={"PGP 1"} onClick={() => displayCompRow2(2)} hover={row2[2] ? "blue" : "green"} backgroundColor={row2[2] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
                            
//                         </Grid>

//                         {/* *************MapElem2**************** */}
//                         <Grid container>
//                             {data2.map((key, i) => {
//                                 return (
//                                     <Grid key={i} item sm={12} md={12}>
//                                         <Grid container sx={{paddingX:"1.1rem", display: row2[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0" }} >
//                                             <Grid item md={12} display={"flex"} justifyContent={"start"} flexDirection={"row"} paddingY={"0.5rem"}>
//                                                 <ButtonComp onClick={() => disItem2Clicked(true)} label={"Right"} backgroundColor={displayItem2 ? "#1976d2" : "white"} color={displayItem2 ? "white" : "black"}  hover={{backgroundColor:displayItem2? "blue" : "#f7f7f7"}} />
//                                                 <ButtonComp onClick={() => disItem2Clicked(false)} label={"Left"} backgroundColor={displayItem2 ? "white" : "#1976d2"} color={displayItem2 ? "black" : "white"}  hover={{backgroundColor:displayItem2? "#f7f7f7" : "#blue"}} />
//                                             </Grid>
//                                             <Grid item sm={12} md={12} sx={{ display: displayItem2 ? "flex" : "none", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                             <Grid key={i} item sm={12} md={12} sx={{ display: displayItem2 ? "none" : "flex", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                 )
//                             })}
//                         </Grid>
//                         {/* *************----------------************* */}

                       

//                         {/* **********Row3********* */}

//                         <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", border: "1px solid rgba(105, 105, 105, 0.5)", borderTop: 0, bgcolor: "#dad5df" }}>
//                             <Grid item>
//                                 <ArrowBtnLayout paddingX={0} label={"GLASSES PRESCRIPTIONS (Rx)"} onClick={() => displayCompRow3(0)} hover={row3[0] ? "blue" : "green"} backgroundColor={row3[0] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
//                             <Grid item >
//                                 <ArrowBtnLayout paddingX={0} label={"INTERMEDIATE GLASSES PRESCRIPTIONS (Rx)"} onClick={() => displayCompRow3(1)} hover={row3[1] ? "blue" : "green"} backgroundColor={row3[1] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
//                             <Grid item>
//                                 <ArrowBtnLayout paddingX={0} hover={row3[2] ? "blue" : "green"} backgroundColor={row3[2] ? "#1757C2" : "rgba(2, 184, 1, 1)"} onClick={() => displayCompRow3(2)} label={"PMT"} />
//                             </Grid>
                            
//                         </Grid>

//                         {/* *************MapElem3************** */}
//                         <Grid container>
//                             {data3.map((key, i) => {
//                                 return (
//                                     <Grid key={i} item sm={12} md={12}>
//                                         <Grid container sx={{paddingX:"1.1rem", display: row3[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0" }} >
//                                             <Grid item md={12} display={"flex"} justifyContent={"start"} flexDirection={"row"} paddingY={"0.5rem"}>
//                                                 <ButtonComp onClick={() => disItem3Clicked(true)} label={"Right"} backgroundColor={displayItem3 ? "#1976d2" : "white"} color={displayItem3 ? "white" : "black"}  hover={{backgroundColor:displayItem3? "blue" : "#f7f7f7"}} />
//                                                 <ButtonComp onClick={() => disItem3Clicked(false)} label={"Left"} backgroundColor={displayItem3 ? "white" : "#1976d2"} color={displayItem3 ? "black" : "white"}  hover={{backgroundColor:displayItem3? "#f7f7f7" : "blue"}} />
//                                             </Grid>
//                                             <Grid item sm={12} md={12} sx={{ display: displayItem3 ? "flex" : "none", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                             <Grid key={i} item sm={12} md={12} sx={{ display: displayItem3 ? "none" : "flex", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                 )
//                             })}
//                         </Grid>
//                         {/* **********-------------********** */}

                      

//                         {/* **********Row4********* */}

//                         <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", border: "1px solid rgba(105, 105, 105, 0.5)", borderTop: 0, bgcolor: "#dad5df" }}>
//                             <Grid item>
//                                 <ArrowBtnLayout label={"RETINOSCOPY (R)"} onClick={() => displayCompRow4(0)} hover={row4[0] ? "blue" : "green"} backgroundColor={row4[0] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
//                             <Grid item>
//                                 <ArrowBtnLayout label={"KERATOMETRY (K)"} onClick={() => displayCompRow4(1)} hover={row4[1] ? "blue" : "green"} backgroundColor={row4[1] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
//                             <Grid item>
//                                 <ArrowBtnLayout label={"AMSLER"} onClick={() => displayCompRow4(2)} hover={row4[2] ? "blue" : "green"} backgroundColor={row4[2] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
                            
//                         </Grid>

//                         {/* **************mapElem4************ */}
//                         <Grid container>
//                             {data4.map((key, i) => {
//                                 return (
//                                     <Grid key={i} item sm={12} md={12}>
//                                         <Grid container sx={{paddingX:"1.1rem", display: row4[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0" }} >
//                                             <Grid item md={12} display={"flex"} justifyContent={"start"} flexDirection={"row"} paddingY={"0.5rem"}>
//                                                 <ButtonComp onClick={() => disItem4Clicked(true)} label={"Right"} backgroundColor={displayItem4 ? "#1976d2" : "white"} color={displayItem4 ? "white" : "black"}  hover={{backgroundColor:displayItem4? "blue" : "#f7f7f7"}} />
//                                                 <ButtonComp onClick={() => disItem4Clicked(false)} label={"Left"} backgroundColor={displayItem4 ? "white" : "#1976d2"} color={displayItem4 ? "black" : "white"}  hover={{backgroundColor:displayItem4? "#f7f7f7" : "blue"}} />
//                                             </Grid>
//                                             <Grid item sm={12} md={12} sx={{ display: displayItem4 ? "flex" : "none", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                             <Grid  key={i} item sm={12} md={12} sx={{ display: displayItem4 ? "none" : "flex", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                 )
//                             })}
//                         </Grid>
//                         {/* **********--------------*********** */}

//                             {/* **********Row5********** */}

//                         <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", border: "1px solid rgba(105, 105, 105, 0.5)", borderTop: 0, bgcolor: "#dad5df" }}>
//                             <Grid item>
//                                 <ArrowBtnLayout hover={row5[0] ? "blue" : "green"} backgroundColor={row5[0] ? "#1757C2" : "rgba(2, 184, 1, 1)"} onClick={() => displayCompRow5(0)} label={"CONTACT LENS PRESCRIPTIONS (CL)"} />
//                             </Grid>
//                             <Grid item>
//                                 <ArrowBtnLayout label={"COLOR VISION"} onClick={() => displayCompRow5(1)} hover={row5[1] ? "blue" : "green"} backgroundColor={row5[1] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
//                             <Grid item>
//                                 <ArrowBtnLayout label={"CONTRAST SENSITIVITY "} onClick={() => displayCompRow5(2)} hover={row5[2] ? "blue" : "green"} backgroundColor={row5[2] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
                            
                            
//                         </Grid>

//                         {/* *************MapElem5************ */}

//                         <Grid container>
//                             {data5.map((key, i) => {
//                                 return (
//                                     <Grid key={i} item sm={12} md={12}>
//                                         <Grid container sx={{paddingX:"1.1rem", display: row5[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0" }} >
//                                             <Grid item md={12} display={"flex"} justifyContent={"start"} flexDirection={"row"}  paddingY={"0.5rem"}>
//                                                 <ButtonComp onClick={() => disItem5Clicked(true)} label={"Right"} backgroundColor={displayItem5 ? "#1976d2" : "white"} color={displayItem5 ? "white" : "black"}  hover={{backgroundColor:displayItem5? "blue" : "#f7f7f7"}} />
//                                                 <ButtonComp onClick={() => disItem5Clicked(false)} label={"Left"} backgroundColor={displayItem5 ? "white" : "#1976d2"} color={displayItem5 ? "black" : "white"}  hover={{backgroundColor:displayItem5? "#f7f7f7" : "blue"}} />
//                                             </Grid>
//                                             <Grid item sm={12} md={12} sx={{ display: displayItem5 ? "flex" : "none", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                             <Grid key={i} item sm={12} md={12} sx={{ display: displayItem5 ? "none" : "flex", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                 )
//                             })}
//                         </Grid>

//                         {/* *******************Row6**************** */}
//                         <Grid container sx={{  border: "1px solid rgba(105, 105, 105, 0.5)", borderTop: 0, bgcolor: "#dad5df" }}>
//                             <Grid item >
//                                 <ArrowBtnLayout label={"ORTHOPTICS"} onClick={() => displayCompRow6(0)} hover={row6[0] ? "blue" : "green"} backgroundColor={row6[0] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
//                             </Grid>
                            
//                         </Grid>

//                         {/* *****************MapElem6****************** */}
//                         <Grid container>
//                             {data6.map((key, i) => {
//                                 return (
//                                     <Grid key={i} item sm={12} md={12}>
//                                         <Grid container sx={{paddingX:"1.1rem", display: row6[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0" }} >
//                                             <Grid item md={12} display={"flex"} justifyContent={"start"} flexDirection={"row"}  paddingY={"0.5rem"}>
//                                                 <ButtonComp onClick={() => disItem6Clicked(true)} label={"Right"} backgroundColor={displayItem6 ? "#1976d2" : "white"} color={displayItem6 ? "white" : "black"}  hover={{backgroundColor:displayItem6? "blue" : "#f7f7f7"}} />

//                                                 <ButtonComp onClick={() => disItem6Clicked(false)} label={"Left"} backgroundColor={displayItem6 ? "white" : "#1976d2"} color={displayItem6 ? "black" : "white"}  hover={{backgroundColor:displayItem6? "#f7f7f7" : "blue"}} />
//                                             </Grid>
//                                             <Grid item sm={12} md={12} sx={{ display: displayItem6 ? "flex" : "none", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                             <Grid key={i} item sm={12} md={12} sx={{ display: displayItem6 ? "none" : "flex", paddingX:"1rem", marginBottom:"1rem", borderRadius:"0.5rem", background: ` linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(234,229,238,1) 48%, rgba(246,246,246,1) 100%)` }}>
//                                                 {key}
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                 )
//                             })}
//                         </Grid>

                        

                      

//                     </Grid>



//                 </Box>
//             </Box>
//         </>
//     )
// }