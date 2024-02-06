import { Grid, Typography } from '@mui/material'
import React from 'react'
import TextFieldInp from '../HelpingComp/TextFieldInp'
import { SelectInp } from '../HelpingComp/SelectInp'

function Name() {
  return (
    <>
        <Grid container columnSpacing={"2.5rem"} rowSpacing={{ sm: 1.5, md: 0.2 }} marginTop={{ sm: "1.5rem", md: "1.5rem" }} >
                    <Grid item md={12} sm={2} >
                        <Typography marginBottom={{ sm: "-0.4rem" }}sx={{fontSize:"0.82rem", fontWeight:"550"}} >Name</Typography>

                    </Grid>
                    <Grid item md={1.2} sm={9}>
                        <Typography height={"100%"} fontSize={"0.9rem"} justifyContent={"center"} flexDirection={"column"} display={"flex"} >Discharge</Typography>
                    </Grid>
                    <Grid item md={2.7} sm={6}>
                        <SelectInp fontSize={"0.9rem"} bgcolor={"white"} labelSpace={"Side"} selectInpLabel={"Side"} />
                    </Grid>
                    <Grid item md={2.7} sm={6}>
                        <SelectInp fontSize={"0.9rem"} bgcolor={"white"} labelSpace={"Duration"} selectInpLabel={"Duration"} />
                    </Grid>
                    <Grid item md={2.7} sm={6}>
                        <SelectInp fontSize={"0.9rem"} bgcolor={"white"} labelSpace={"Duration Unit"} selectInpLabel={"Duration Unit"} />
                    </Grid>
                    <Grid item md={2.7} sm={6} >
                        <TextFieldInp mdFontSize={"0.9rem"} lgFontSize={"0.9rem"} backgroundColor={"white"} labelSpace={"Comment"} label={"Comment"} />
                    </Grid>
                </Grid>
    </>
  )
}

export default Name