import React, { useState } from 'react'
import { VisualAcuityV3Merging } from '../VisualAcuity/Main'
import { Intraocular } from '../IntraocularPressure/Main'
import { AutoRefractionAr } from '../AutoRefaction/Main'
import { DryRefraction } from '../DryRefraction/Main'
import { RefractionDilated } from '../RefractionDilated/Main'
import { Pgp1 } from '../Pgp1/Main'
import { GlassesPrescriptions } from '../GlassesPrescription/Main'
import { IntermediateGlassesPrescriptions } from '../IntermediateGlasses/Main'
import { Pmt } from '../Pmt/Main'
import Retinoscopyy from '../RetinosCopy/Main'
import { Keratometry } from '../Keratometry/Main'
import Amsler from '../Amsler/Main'
import { ContactLensPrescriptions } from '../ContactLensPrescription/Main'
import { ColorVision } from '../ColorVision/Main'
import { ContrastSensi } from '../ContrastSensi/Main'
import { Orthoptics } from '../Orthoptics.jsx/Main'
import ButtonComp from '../HelpRefComp/HelpRefComp'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button  from '@mui/material/Button'

function RefractionMain() {
    const [displayComp, setDisplayComp] = useState(Array(16).fill(true))
    // const arrayOfComp = [<VisualAcuityV3Merging />, <Intraocular />, <AutoRefractionAr />, <DryRefraction />, <RefractionDilated />, <Pgp1 />, <GlassesPrescriptions />, <IntermediateGlassesPrescriptions />, <Pmt />, <Retinoscopyy />, <Keratometry />, <Amsler />, <ContactLensPrescriptions />, <ColorVision />, <ContrastSensi />, <Orthoptics />]
    const arrayOfComp = [<VisualAcuityV3Merging />,  <AutoRefractionAr />, <DryRefraction />]
    const toggleBtn = (i, display) => {
        const newDisplayComp = [...displayComp]
        newDisplayComp[i] = display;
        setDisplayComp(newDisplayComp)
    }
    return (
        <>
            <style>
                {`
            .css-1vruuoy-MuiGrid-root{
                margin-left:0
            }`}
                {`
            .css-1vruuoy-MuiGrid-root>.MuiGrid-item{
                padding : 0
            }`}

            </style>

            <Grid container bgcolor={"#f3f1f1"} columnSpacing={2} sx={{ border: "1px solid rgba(105, 105, 105, 0.5)", width: "100%", boxSizing: "border-box" }} >
                {arrayOfComp.map((comp, i) => {
                    return (
                        <Grid item sm={12} md={12} key={i} >
                            <Grid container sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)", }}>

                                <Grid item sm={12} sx={{ display: { md: "none" }, position: "relative", }} >
                                    <Box sx={{ position: "absolute", right: 10, top: 10 }} >           
                                    
                                        <Stack flexDirection={"row"} >
                                            {/* <ButtonComp label={"Right"} onClick={() => toggleBtn(i, true)} backgroundColor={displayComp[i] ? "#1976d2" : "white"} color={displayComp[i] ? "white" : "black"} fontWeight={600} hover={{ backgroundColor: displayComp[i] ? "blue" : "#f2f2f3" }} /> */}
                                            {/* <ButtonComp label={"Left"} onClick={() => toggleBtn(i, false)} backgroundColor={displayComp[i] ? "white" : "#1976d2"} color={displayComp[i] ? "black" : "white"} fontWeight={600} hover={{ backgroundColor: displayComp[i] ? "#f2f2f3" : "blue" }} /> */}
                                            <Button 
                                            onClick={() => toggleBtn(i, true)}
                                            sx={{
                                            backgroundColor : displayComp[i] ? "#1976d2" : "white",
                                            color : displayComp[i] ? "white" : "black",
                                            fontWeight : 600,
                                            hover : { backgroundColor: displayComp[i] ? "blue" : "#f2f2f3" }

                                            }}
                                            >Right</Button>
                                            <Button
                                            onClick={() => toggleBtn(i, false)}
                                            sx={{
                                            backgroundColor : displayComp[i] ? "#1976d2" : "white",
                                            color : displayComp[i] ? "white" : "black",
                                            fontWeight : 600,
                                            hover : { backgroundColor: displayComp[i] ? "blue" : "#f2f2f3" }

                                            }}
                                            >Left</Button>
                                        </Stack>
                                    </Box>
                                </Grid>

                                <Grid item sm={12} md={6} sx={{ backgroundColor: "#1cff001f", display: { sm: displayComp[i] ? "flex" : "none", md: "flex" }, paddingX: "0.6rem", marginLeft: "0", borderRight: { sm: "none", md: "1px solid rgba(105, 105, 105, 0.5)" } }}>
                                    {comp}
                                </Grid>
                                <Grid item sm={12} md={6} sx={{ display: { sm: displayComp[i] ? "none" : "flex", md: "flex" }, backgroundColor: "#f5cfd252", paddingX: "0.6rem", marginLeft: "0", }}>
                                    {comp}
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default RefractionMain