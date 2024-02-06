import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import HistoryBtn from '../HelpingComp/HistoryBtn'
import TextFieldInp from '../HelpingComp/TextFieldInp'

function Visit() {
  return (
    <>
        <Stack alignItems={"center"} justifyContent={"center"} paddingTop={{ sm: "1.5rem", md: "1rem" }}>
                    <Grid container rowSpacing={{ sm: 1.5 }}>
                        <Grid item sm={12} md={1} lg={1} alignItems={"center"} display={"flex"}>
                            <Typography marginBottom={{ sm: "-0.5rem" }} color={"rgba(55, 55, 55, 1)"} sx={{ fontSize: "0.82rem", fontWeight:"550" }}>Visit :</Typography>
                        </Grid>
                        <Grid item sm={9} md={6.5} lg={5.5} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                            <Grid container >
                                <Grid item md={4}>
                                    <HistoryBtn  label={"General Checkup"} />
                                </Grid>
                                <Grid item md={4}>
                                    <HistoryBtn label={"Routine Checkup"} />
                                </Grid>
                                <Grid item md={4}>
                                    <HistoryBtn label={"PostOp Checkup"} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={9} md={4.5} lg={5.5} justifyContent={"start"} paddingLeft={{ sm: "0rem", md: "1rem" }} alignItems={"center"} display={"flex"}>
                            <TextFieldInp label={"Free Text"} backgroundColor={"white"} width={"80%"} />
                        </Grid>
                    </Grid>
                </Stack>
    </>
  )
}

export default Visit