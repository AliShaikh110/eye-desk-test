import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import tick from "./ErrorImg/tick.png"
import ErrorComp from './HelpingComp/ErrorComp'

function Error() {
  return (
    <>
        {/* ********Error md and Above******* */}

        <Box marginY={"1.2rem"} display={{ sm: "none", md: "block" }} paddingX={"1rem"}>
                    <Stack flexDirection={"row"} >
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.88rem"} label={"Glasses/lens adviced"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.88rem"} label={"Investigation"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.88rem"} label={"Diagnosis"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.88rem"} label={"Medications"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.88rem"} label={"Procedure(s)"} />
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.88rem"} label={"Follow-up"} />
                        <Box sx={{ borderRight: "0.13rem solid", borderColor: "rgba(217, 217, 217, 1)", marginRight: "1rem" }}></Box>
                        <ErrorComp mdFontSize={"0.75rem"} lgFontSize={"0.88rem"} label={"Not Filled"} />
                        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingRight={"0.7rem"}>
                            <img src={tick} />
                            <Typography sx={{ color: "rgba(2, 184, 1, 1)", fontSize: "0.8rem", paddingX: "0.1rem" }}>Filled</Typography>
                        </Stack>
                    </Stack>
                </Box>

                {/* *********Error SM******** */}

                <Grid container marginY={"1rem"} rowSpacing={0.5} display={{ md: "none" }} paddingX={"0.6rem"}>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Glasses/lens adviced"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Investigation"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Diagnosis"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Medications"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Procedure(s)"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Follow-up"} />
                    </Grid>
                    <Grid item sm={3}>
                        <ErrorComp smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} label={"Not Filled"} />
                    </Grid>
                    <Grid item>

                        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} paddingRight={"0.7rem"}>
                            <img src={tick} />
                            <Typography sx={{ color: "rgba(2, 184, 1, 1)", fontSize: "0.8rem", paddingX: "0.1rem" }}>Filled</Typography>
                        </Stack>
                    </Grid>
                </Grid>
    </>
  )
}

export default Error