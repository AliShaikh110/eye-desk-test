import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { VisualAcuityV3Merging } from "./VisualAcuity/Main";
import { AutoRefractionAr } from "./AutoRefaction/Main";
import { DryRefraction } from "./DryRefraction/Main";
import { RefractionDilated } from "./RefractionDilated/Main";
import { Pgp1 } from "./Pgp1/Main";
import { GlassesPrescriptions } from "./GlassesPrescription/Main";
import { IntermediateGlassesPrescriptions } from "./IntermediateGlasses/Main";
import { Pmt } from "./Pmt/Main";
import Retinoscopyy from "./RetinosCopy/Main";
import { Keratometry } from "./Keratometry/Main";
import { ContactLensPrescriptions } from "./ContactLensPrescription/Main";
import { ColorVision } from "./ColorVision/Main";
import { ContrastSensi } from "./ContrastSensi/Main";
import { Orthoptics } from "./Orthoptics.jsx/Main";
import ArrowBtnLayout from "./HelpRefComp/ArrowBtnLayout";
import HeaderAuto from "./HelpRefComp/HeaderAuto";
import { blue } from "@mui/material/colors";
import { Intraocular } from "./IntraocularPressure/Main";
import Amsler from "./Amsler/Main";
import ButtonComp from "./HelpRefComp/HelpRefComp";

export default function Refraction({ backgroundColor }) {
    const [value, setValue] = useState(Array(16).fill(false))
    const [bgColor, setBgColor] = useState("blue")
    const [row1, setRow1] = useState(Array(4).fill(false))
    const [row2, setRow2] = useState(Array(4).fill(false))
    const [row3, setRow3] = useState(Array(4).fill(false))
    const [row4, setRow4] = useState(Array(4).fill(false))

    const [directionLabel, setDirectionLabel] = ["Right", "Left"]
    const [data1, setData1] = useState([<VisualAcuityV3Merging />, <Intraocular />, <AutoRefractionAr />, <DryRefraction />])
    const [data2, setData2] = useState([<RefractionDilated />, <Pgp1 />, <GlassesPrescriptions />, <IntermediateGlassesPrescriptions />])
    const [data3, setData3] = useState([<Pmt />, <Retinoscopyy />, <Keratometry />, <Amsler />])
    const [data4, setData4] = useState([<ContactLensPrescriptions />, <ColorVision />, <ContrastSensi />, <Orthoptics />])
    const [displayItem, setDisplayItem] = useState(true)
    // console.log(data1);

    const disItemClicked = () => {
        console.log(displayItem);
        setDisplayItem(!displayItem);
        console.log(displayItem);
    }

    const displayCompRow1 = (index) => {
        setRow1(row1.fill(false))
        setRow1(row1.with(index, !row1[index]))
    }
    const displayCompRow2 = (index) => {
        setRow2(row2.fill(false))
        setRow2(row2.with(index, !row2[index]))
    }
    const displayCompRow3 = (index) => {
        setRow3(row3.fill(false))
        setRow3(row3.with(index, !row3[index]))
    }
    const displayCompRow4 = (index) => {
        setRow4(row4.fill(false))
        setRow4(row4.with(index, !row4[index]))
    }
    useEffect(() => {
        setRow1([(!row1[0]), ...row1])
        // console.log(row1);
        setRow2([!row2[0], ...row2])
        setRow3([!row3[0], ...row3])
        setRow4([!row4[0], ...row4])
    }, [])




    // console.log(row1);

    return (
        <>
            <style>
                {`
            .myBtn .css-9tj150-MuiButton-endIcon {
            display: inherit;
            margin-right: -4px;
            margin-left: 1;}
            `}
            </style>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
                <Box sx={{ width: "60%" }} >




                    {/* <Grid container columnSpacing={0.2} position={"fixed"} sx={{ zIndex: 10, }}>
                        <Grid item sm={12} md={6}>
                            <HeaderAuto headLabel={"R/OD"} />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <HeaderAuto headLabel={"L/OS"} />
                        </Grid>
                    </Grid> */}
                    <Grid container  bgcolor={"#f3f1f1"} columnSpacing={2} sx={{ border: "1px solid rgba(105, 105, 105, 0.5)", }} >


                        <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", bgcolor: "#e6dced" }}>
                            <Grid item>
                                <ArrowBtnLayout hover={row1[0] ? "blue" : "green"} backgroundColor={row1[0] ? "#1757C2" : "rgba(2, 184, 1, 1)"} onClick={() => displayCompRow1(0)} label={"VISUAL ACUITY (V3)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"INTRAOCULAR PRESSURE (IOP)"} onClick={() => displayCompRow1(1)} hover={row1[1] ? "blue" : "green"} backgroundColor={row1[1] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"AUTO REFRACTION (ARx)"} onClick={() => displayCompRow1(2)} hover={row1[2] ? "blue" : "green"} backgroundColor={row1[2] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"DRY REFRACTION"} onClick={() => displayCompRow1(3)} hover={row1[3] ? "blue" : "green"} backgroundColor={row1[3] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                        </Grid>

                        {/* **********MapElements******** */}
                        <Grid container>
                            {data1.map((key, i) => {
                                return (
                                    <Grid key={i} item md={12}>
                                        <Grid container sx={{ display: row1[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0" }} >
                                            <Grid item md={12} display={"flex"} justifyContent={"space-between"} paddingX={1} paddingY={"0.5rem"}>
                                                <ButtonComp onClick={disItemClicked} label={"Right"} backgroundColor={displayItem ? "blue" : "white"} color={displayItem ? "white" : "black"} minWidth={0} height={"2rem"} padding={"0rem 2rem"} borderRadius={"0.3rem"} smFontSize={"0.75rem"} mdFontSize={"0.95rem"} />
                                                <ButtonComp onClick={disItemClicked} label={"Left"} backgroundColor={displayItem ? "white" : "blue"} color={displayItem ? "black" : "white"} minWidth={0} height={"2rem"} padding={"0rem 2rem"} borderRadius={"0.3rem"} smFontSize={"0.75rem"} mdFontSize={"0.95rem"} />
                                            </Grid>
                                            <Grid item sm={12} md={12} sx={{ display: displayItem ? "flex" : "none", backgroundColor: "#efefff" }}>
                                                {key}
                                            </Grid>
                                            <Grid key={i} item md={12} sx={{ display: displayItem ? "none" : "flex", backgroundColor: "#efefff" }}>
                                                {key}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        {/* ********-----------********* */}

                        {/* <Grid item md={12}  >
                    <Grid container sx={{display: row1[0] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                            <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#f8f0f0" }}  >
                                <VisualAcuityV3Merging  />
                            </Grid>
                            <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#efefff" }} >
                                <VisualAcuityV3Merging />
                            </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row1[1] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                            <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#f7f0f0" }}>
                                <Intraocular />
                            </Grid>
                            <Grid item sm={12} md={6} sx={{ paddingX: "0.5rem", backgroundColor:"#efefff" }}>
                                <Intraocular />
                            </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{ display: row1[2] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                            <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#f7f0f0" }}>
                                <AutoRefractionAr />
                            </Grid>
                            <Grid item sm={12} md={6} sx={{ paddingX: "0.5rem", backgroundColor:"#efefff" }}>
                                <AutoRefractionAr />
                            </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row1[3] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                            <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#f7f0f0" }}>
                                <DryRefraction />
                            </Grid>
                            <Grid item sm={12} md={6} sx={{ paddingX: "0.5rem", backgroundColor:"#efefff" }}>
                                <DryRefraction />
                            </Grid>
                    </Grid>
                </Grid> */}

                        {/* **********Row2*********** */}

                        <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", border: "1px solid rgba(105, 105, 105, 0.5)", marginLeft: "1rem", borderTop: 0, paddingY: "0.3rem", bgcolor: "#dad5df" }}>
                            <Grid item>
                                <ArrowBtnLayout hover={row2[0] ? "blue" : "green"} backgroundColor={row2[0] ? "#1757C2" : "rgba(2, 184, 1, 1)"} onClick={() => displayCompRow2(0)} label={"REFRACTION (DILATED)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"PGP 1"} onClick={() => displayCompRow2(1)} hover={row2[1] ? "blue" : "green"} backgroundColor={row2[1] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"GLASSES PRESCRIPTIONS (Rx)"} onClick={() => displayCompRow2(2)} hover={row2[2] ? "blue" : "green"} backgroundColor={row2[2] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"INTERMEDIATE GLASSES PRESCRIPTIONS (Rx)"} onClick={() => displayCompRow2(3)} hover={row2[3] ? "blue" : "green"} backgroundColor={row2[3] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                        </Grid>

                        {/* *************MapElem2**************** */}
                        <Grid container>
                            {data2.map((key, i) => {
                                return (
                                    <Grid key={i} item md={12}>
                                        <Grid container sx={{ display: row2[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0" }} >
                                            <Grid item md={12} display={"flex"} justifyContent={"space-between"} paddingX={1} paddingY={"0.5rem"}>
                                                <ButtonComp onClick={disItemClicked} label={"Right"} backgroundColor={displayItem ? "blue" : "white"} color={displayItem ? "white" : "black"} minWidth={0} height={"2rem"} padding={"0rem 2rem"} borderRadius={"0.3rem"} smFontSize={"0.75rem"} mdFontSize={"0.95rem"} />
                                                <ButtonComp onClick={disItemClicked} label={"Left"} backgroundColor={displayItem ? "white" : "blue"} color={displayItem ? "black" : "white"} minWidth={0} height={"2rem"} padding={"0rem 2rem"} borderRadius={"0.3rem"} smFontSize={"0.75rem"} mdFontSize={"0.95rem"} />
                                            </Grid>
                                            <Grid item sm={12} md={12} sx={{ display: displayItem ? "flex" : "none", backgroundColor: "#efefff" }}>
                                                {key}
                                            </Grid>
                                            <Grid key={i} item md={12} sx={{ display: displayItem ? "none" : "flex", backgroundColor: "#efefff" }}>
                                                {key}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        {/* *************----------------************* */}

                        {/* <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row2[0] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                            <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#f7f0f0" }}>
                                <RefractionDilated />
                            </Grid>
                            <Grid item sm={12} md={6} sx={{ paddingX: "0.5rem", backgroundColor:"#efefff" }}>
                                <RefractionDilated />
                            </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row2[1] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                        <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#f7f0f0" }}>
                            <Pgp1 />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{ paddingX: "0.5rem", backgroundColor:"#efefff" }}>
                            <Pgp1 />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row2[2] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                            <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#f7f0f0" }}>
                                <GlassesPrescriptions />
                            </Grid>
                            <Grid item sm={12} md={6} sx={{ paddingX: "0.5rem", backgroundColor:"#efefff" }}>
                                <GlassesPrescriptions />
                            </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row2[3] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                            <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#f7f0f0" }}>
                                <IntermediateGlassesPrescriptions />
                            </Grid>
                            <Grid item sm={12} md={6} sx={{ paddingX: "0.5rem", backgroundColor:"#efefff" }}>
                                <IntermediateGlassesPrescriptions />
                            </Grid>
                    </Grid>
                </Grid> */}

                        {/* **********Row3********* */}

                        <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", border: "1px solid rgba(105, 105, 105, 0.5)", marginLeft: "1rem", borderTop: 0, bgcolor: "#dad5df" }}>
                            <Grid item>
                                <ArrowBtnLayout hover={row3[0] ? "blue" : "green"} backgroundColor={row3[0] ? "#1757C2" : "rgba(2, 184, 1, 1)"} onClick={() => displayCompRow3(0)} label={"PMT"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"RETINOSCOPY (R)"} onClick={() => displayCompRow3(1)} hover={row3[1] ? "blue" : "green"} backgroundColor={row3[1] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"KERATOMETRY (K)"} onClick={() => displayCompRow3(2)} hover={row3[2] ? "blue" : "green"} backgroundColor={row3[2] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"AMSLER"} onClick={() => displayCompRow3(3)} hover={row3[3] ? "blue" : "green"} backgroundColor={row3[3] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                        </Grid>

                        {/* *************MapElem3************** */}
                        <Grid container>
                            {data3.map((key, i) => {
                                return (
                                    <Grid key={i} item md={12}>
                                        <Grid container sx={{ display: row3[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0" }} >
                                            <Grid item md={12} display={"flex"} justifyContent={"space-between"} paddingX={1} paddingY={"0.5rem"}>
                                                <ButtonComp onClick={disItemClicked} label={"Right"} backgroundColor={displayItem ? "blue" : "white"} color={displayItem ? "white" : "black"} minWidth={0} height={"2rem"} padding={"0rem 2rem"} borderRadius={"0.3rem"} smFontSize={"0.75rem"} mdFontSize={"0.95rem"} />
                                                <ButtonComp onClick={disItemClicked} label={"Left"} backgroundColor={displayItem ? "white" : "blue"} color={displayItem ? "black" : "white"} minWidth={0} height={"2rem"} padding={"0rem 2rem"} borderRadius={"0.3rem"} smFontSize={"0.75rem"} mdFontSize={"0.95rem"} />
                                            </Grid>
                                            <Grid item sm={12} md={12} sx={{ display: displayItem ? "flex" : "none", backgroundColor: "#efefff" }}>
                                                {key}
                                            </Grid>
                                            <Grid key={i} item md={12} sx={{ display: displayItem ? "none" : "flex", backgroundColor: "#efefff" }}>
                                                {key}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        {/* **********-------------********** */}

                        {/* <Grid item md={12} >
                    <Grid container sx={{display: row3[0] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                        <Grid item sm={12} md={6} sx={{  paddingX: "0.5rem", backgroundColor:"#f7f0f0" }}>
                            <Pmt />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{ paddingX: "0.5rem", backgroundColor:"#efefff" }}>
                            <Pmt />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row3[1] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#f7f0f0"}} >
                            <Retinoscopyy />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#efefff"}}>
                            <Retinoscopyy />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row3[2] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#f7f0f0"}}>
                            <Keratometry />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#efefff"}}>
                            <Keratometry />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row3[3] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#f7f0f0"}} >
                            <Amsler />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#efefff"}}>
                            <Amsler />
                        </Grid>
                    </Grid>
                </Grid>  */}

                        {/* **********Row4********* */}

                        <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", border: "1px solid rgba(105, 105, 105, 0.5)", marginLeft: "1rem", borderTop: 0, bgcolor: "#dad5df" }}>
                            <Grid item>
                                <ArrowBtnLayout hover={row4[0] ? "blue" : "green"} backgroundColor={row4[0] ? "#1757C2" : "rgba(2, 184, 1, 1)"} onClick={() => displayCompRow4(0)} label={"CONTACT LENS PRESCRIPTIONS (CL)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"COLOR VISION"} onClick={() => displayCompRow4(1)} hover={row4[1] ? "blue" : "green"} backgroundColor={row4[1] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"CONTRAST SENSITIVITY "} onClick={() => displayCompRow4(2)} hover={row4[2] ? "blue" : "green"} backgroundColor={row4[2] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                            <Grid item>
                                <ArrowBtnLayout label={"ORTHOPTICS"} onClick={() => displayCompRow4(3)} hover={row4[3] ? "blue" : "green"} backgroundColor={row4[3] ? "#1757C2" : "rgba(2, 184, 1, 1)"} />
                            </Grid>
                        </Grid>

                        {/* **************mapElem4************ */}
                        <Grid container>
                            {data4.map((key, i) => {
                                return (
                                    <Grid key={i} item md={12}>
                                        <Grid container sx={{ display: row4[i] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop: "0" }} >
                                            <Grid item md={12} display={"flex"} justifyContent={"space-between"} paddingX={1} paddingY={"0.5rem"}>
                                                <ButtonComp onClick={disItemClicked} label={"Right"} backgroundColor={displayItem ? "blue" : "white"} color={displayItem ? "white" : "black"} minWidth={0} height={"2rem"} padding={"0rem 2rem"} borderRadius={"0.3rem"} smFontSize={"0.75rem"} mdFontSize={"0.95rem"} />
                                                <ButtonComp onClick={disItemClicked} label={"Left"} backgroundColor={displayItem ? "white" : "blue"} color={displayItem ? "black" : "white"} minWidth={0} height={"2rem"} padding={"0rem 2rem"} borderRadius={"0.3rem"} smFontSize={"0.75rem"} mdFontSize={"0.95rem"} />
                                            </Grid>
                                            <Grid item sm={12} md={12} sx={{ display: displayItem ? "flex" : "none", backgroundColor: "#efefff" }}>
                                                {key}
                                            </Grid>
                                            <Grid key={i} item md={12} sx={{ display: displayItem ? "none" : "flex", backgroundColor: "#efefff" }}>
                                                {key}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        {/* **********--------------*********** */}

                        {/* <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row4[0] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                    <Grid item sm={12} md={6} sx={{backgroundColor:"#f7f0f0"}} >
                            <ContactLensPrescriptions />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#efefff"}}>
                            <ContactLensPrescriptions />
                        </Grid>
                    </Grid>
                </Grid> 

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row4[1] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                    <Grid item sm={12} md={6} sx={{backgroundColor:"#f7f0f0"}} >
                            <ColorVision />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#efefff"}}>
                            <ColorVision />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row4[2] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                    <Grid item sm={12} md={6} sx={{backgroundColor:"#f7f0f0"}} >
                            <ContrastSensi />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#efefff"}}>
                            <ContrastSensi />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={12} >
                    <Grid container sx={{display: row4[3] ? "flex" : "none", border: "1px solid rgba(105, 105, 105, 0.5)", borderRight: "0", borderTop:"0" }} >
                    <Grid item sm={12} md={6} sx={{backgroundColor:"#f7f0f0"}} >
                            <Orthoptics />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{backgroundColor:"#efefff"}}>
                            <Orthoptics />
                        </Grid>
                    </Grid>
                </Grid> */}

                    </Grid>



                </Box>
            </Box>
        </>
    )
}