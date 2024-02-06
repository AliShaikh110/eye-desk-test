import { Grid, Typography } from '@mui/material'
import React from 'react'
import InpLabHistory from '../HelpingComp/InpLabHistory'
import TextFieldInp from '../HelpingComp/TextFieldInp'

function VitalSigns() {
  return (
    <>
        <Grid container columnSpacing={2} rowSpacing={1.5} marginTop={{ sm: "1.5rem", md: "1.25rem", lg: "1.25rem" }} paddingBottom={"1rem"} sx={{ width: "100%",  }}>
                    <Grid item md={6} sm={12}>

                        <Grid container rowSpacing={{ sm: 1.5, md: 2.5, lg: 3 }} columnSpacing={{ sm: "2.5rem", md: 3, lg: 5 }} paddingRight={{ md: "1.5rem", lg: "2.9rem" }}>
                            <Grid item md={12} sm={12} sx={{fontSize:"0.82rem", fontWeight:"550"}} marginBottom={{ sm: "-0.7rem" }}><Typography sx={{fontSize:"0.82rem", fontWeight:"550"}}>Vital Signs</Typography></Grid>

                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"°C"} label={"label"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"mmHg"} label={"Blood Pressure"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"bpm"} label={"Pulse"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"brpm"} label={"RR"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"%"} label={"SpO2"} />
                            </Grid>
                            <Grid item md={12} sm={12}>
                                <TextFieldInp backgroundColor={"white"} width={"100%"} label={"Vital Sign Comment"} fontSize={"0.85rem"} size={"large"} />
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item md={6} sm={12} >

                        <Grid container rowSpacing={{ sm: 1.5, md: 2.5, lg: 3 }} columnSpacing={{ sm: "2.5rem", md: 3, lg: 5 }}  paddingLeft={{ md: "1.5rem", lg: "2.9rem" }}>
                            <Grid item md={12}  marginBottom={{ sm: "-0.7rem" }} sm={12}><Typography sx={{fontSize:"0.82rem", fontWeight:"550"}} >Anthropometry</Typography></Grid>


                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"cms"} label={"Height"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"kg"} label={"Weight"} />
                            </Grid>
                            <Grid item md={6} sm={6}>
                                <InpLabHistory sideLabel={"kg/m2"} label={"BMI"} />
                            </Grid>
                            <Grid item md={12} sm={12}>
                                <TextFieldInp backgroundColor={"white"} width={"100%"} label={"Anthropometry Comment"} fontSize={"0.85rem"} size={"large"} />
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>
    </>
  )
}

export default VitalSigns