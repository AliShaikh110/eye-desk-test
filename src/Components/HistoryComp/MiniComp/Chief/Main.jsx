import  Box  from '@mui/material/Box'
import  Grid  from '@mui/material/Grid'
import  Typography  from '@mui/material/Typography'
import React from 'react'
import HistoryBtn from '../HelpingComp/HistoryBtn'

function Chief() {
  return (
    <>
        <Box sx={{ display: "flex", flexDirection: "column" }} marginTop={{ sm: "1.5rem", md: "1rem" }}>
                    <Typography marginBottom={{ sm: "0.4rem", md: "0.7rem" }} fontSize={{sm:"0.75rem", md:"0.82rem"}} fontWeight={"550"}>Cheif Complaints</Typography>

                    <Grid container rowSpacing={"0.2rem"} columnSpacing={"0.1rem"}>
                        <Grid item md={3.35} lg={2.8} sm={5.3} >
                            <HistoryBtn label={"Blurring/Diminuition of vision"} />
                        </Grid>
                        <Grid item md={1} lg={1.1} sm={1.75}>
                            <HistoryBtn label={"Redness"} />
                        </Grid>
                        <Grid item md={1} lg={1} sm={1.5}>
                            <HistoryBtn label={"Pain"} />
                        </Grid>
                        <Grid item md={1} lg={1} sm={1.65}>
                            <HistoryBtn label={"Injury"} />
                        </Grid>
                        <Grid item md={1.05} lg={1.19} sm={1.8} >
                            <HistoryBtn label={"Watering"} />
                        </Grid>
                        <Grid item md={1.15} lg={1.24} sm={1.7}>
                            <HistoryBtn label={"Discharge"} />
                        </Grid>
                        <Grid item md={1} lg={1.19} sm={1.55} >
                            <HistoryBtn label={"Dryness"} />
                        </Grid>
                        <Grid item md={1} lg={1.1} sm={1.45}>
                            <HistoryBtn label={"Itching"} />
                        </Grid>
                        <Grid item md={1.45} lg={1.38} sm={2.1}>
                            <HistoryBtn label={"FBsensation"} />
                        </Grid>
                        <Grid item md={2} lg={1.67} sm={2.65} >
                            <HistoryBtn label={"Deviation/Squint"} />
                        </Grid>
                        <Grid item md={1.95} lg={1.73} sm={2.55}>
                            <HistoryBtn label={"Headache/Strain"} />
                        </Grid>
                        <Grid item md={2.5} lg={2.15} sm={3.60}>
                            <HistoryBtn padding={"10px 6px"} label={"Change in Size/Shape"} />
                        </Grid>
                        <Grid item md={2.75} lg={2.2} sm={4.1} >
                            <HistoryBtn label={"Other Visual Symptoms"} />
                        </Grid>
                        <Grid item md={2.8} lg={2.25} sm={4.3}>
                            <HistoryBtn label={"Shadow/Defect in vision"} />
                        </Grid>
                        <Grid item md={2.6} lg={2} sm={3.9}>
                            <HistoryBtn label={"Discoloration of Eye"} />
                        </Grid>
                        <Grid item md={1.2} lg={1.06} sm={2} >
                            <HistoryBtn label={"Swelling"} />
                        </Grid>
                        <Grid item md={2.3} lg={2} sm={3.5}>
                            <HistoryBtn label={"Burning Sensation"} />
                        </Grid>
                    </Grid>
                </Box>
    </>
  )
}

export default Chief