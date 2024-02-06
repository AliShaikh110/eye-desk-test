import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import ButtonComp from '../../../HistoryComp/MiniComp/HelpingComp/BasicComp'
import NavigationBar from './HelpingComp/NavigationBar'
import HistoryComp from '../../../HistoryComp/Main/HistoryComp'

function NavigationBtn() {
    return (
        <>
            {/* *******Navigation Button********** */}

            

            {/* <Box sx={{ border: "1px solid rgba(105, 105, 105, 0.5)", marginX: "0.9rem", display: { md: "block" }, backgroundColor: "#f3f1f1" }}>

                    

                <Grid container>
                    <Grid item md={12}>

                <Stack flexDirection={"row"} sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)", width: "100%", display: { md: "flex" }, }}>
                    <Grid container>
                        <Grid item md={12}>


                    <Stack flexDirection={"row"}>
                        <Box sx={{
                            width: {
                                md: "8.5rem",
                                lg: "11.5rem"
                            },
                            height: "3rem",
                            background: '#f3f1f1',
                            clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0% 50%, 0% 0%)',
                        }}>
                            <ButtonComp hover={{color : "white", fontWeight:"550"}}  backgroundColor="white" mdFontSize={"0.7rem"} lgFontSize={"0.75rem"} color={"black"} label={"History"} width={"100%"} />
                        </Box>
                        <NavigationBar label={"Refraction"} />
                        <NavigationBar label={"Examination"} />
                        <NavigationBar label={"Investigation"} />
                        <NavigationBar label={"Diagnosis"} />
                        <NavigationBar label={"Advice"} />
                    </Stack>
                        </Grid>
                    </Grid>
                    <Stack flexDirection={"row"} justifyContent={"end"} sx={{ width: "100%" }}>

                        <Stack flexDirection={"row"} justifyContent={"end"}>
                            <Box sx={{
                                clipPath: 'circle(41% at 50% 50%)'
                            }}>
                                <ButtonComp hover={{color : "white", fontWeight:"550"}} backgroundColor={"white"} color={"black"} label={"<"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                            </Box>
                            <Box sx={{

                                clipPath: 'circle(41% at 50% 50%)'
                            }}>
                                <ButtonComp hover={{color : "white", fontWeight:"550"}} backgroundColor={"white"} color={"black"} label={">"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>

                </Grid>
                </Grid>
                
            </Box> */}



            <Box sx={{ border: "1px solid rgba(105, 105, 105, 0.5)", marginX: "0.9rem", display: { sm: "none", md: "block" }, backgroundColor: "#f3f1f1" }}>

                <Stack flexDirection={"row"} sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)", width: "100%", display: { sm: "none", md: "flex" }, }}>

                    <Stack flexDirection={"row"}>
                        <Box sx={{
                            width: {
                                md: "8.5rem",
                                lg: "11.5rem"
                            },
                            height: "3rem",
                            background: '#f3f1f1',
                            clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0% 50%, 0% 0%)',
                        }}>
                            <ButtonComp hover={{color : "white", fontWeight:"550"}}  backgroundColor="white" mdFontSize={"0.7rem"} lgFontSize={"0.75rem"} color={"black"} label={"History"} width={"100%"} />
                        </Box>
                        <NavigationBar label={"Refraction"} />
                        <NavigationBar label={"Examination"} />
                        <NavigationBar label={"Investigation"} />
                        <NavigationBar label={"Diagnosis"} />
                        <NavigationBar label={"Advice"} />
                    </Stack>
                    <Stack flexDirection={"row"} justifyContent={"end"} sx={{ width: "100%" }}>

                        <Stack flexDirection={"row"} justifyContent={"end"}>
                            <Box sx={{
                                clipPath: 'circle(41% at 50% 50%)'
                            }}>
                                <ButtonComp hover={{color : "white", fontWeight:"550"}} backgroundColor={"white"} color={"black"} label={"<"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                            </Box>
                            <Box sx={{

                                clipPath: 'circle(41% at 50% 50%)'
                            }}>
                                <ButtonComp hover={{color : "white", fontWeight:"550"}} backgroundColor={"white"} color={"black"} label={">"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
                <Box item md={12}>

                    <HistoryComp />
                    {/* <Refraction /> */}
                </Box>
            </Box>

            {/* ********sm Navigation Btn******* */}

            <Box paddingX={"0.7rem"}>

                <Grid container display={{ md: "none" }} bgcolor={"#f3f1f1"} sx={{ border: "1px solid rgba(105, 105, 105, 0.5)" }}>
                    <Grid item sm={12} paddingX={"0.6rem"}>
                        <Stack flexDirection={"row"} sx={{ width: "100%", marginTop: "0.7rem" }}>
                            <Stack flexDirection={"row"}>
                                <Box sx={{
                                    width: "9rem",
                                    height: "3rem",
                                    background: 'white',
                                    clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0% 50%, 0% 0%)',
                                }}>
                                    <ButtonComp backgroundColor={"white"} smFontSize={"0.7rem"} mdFontSize={"0.7rem"} lgFontSize={"0.75rem"} color={"black"} label={"History"} width={"100%"} />
                                </Box>
                                <NavigationBar label={"Refraction"} />
                                <NavigationBar label={"Examination"} />
                                <NavigationBar label={"Investigation"} />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item sm={12} paddingX={"0.6rem"} sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)", paddingBottom: "0.8rem" }}>
                        <Stack flexDirection={"row"} sx={{ width: "100%", marginTop: "1rem" }}>
                            <Stack flexDirection={"row"}>
                                <Box sx={{
                                    width: "9rem",
                                    height: "3rem",
                                    background: 'white',
                                    clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0% 50%, 0% 0%)',
                                }}>
                                    <ButtonComp backgroundColor={"white"} smFontSize={"0.7rem"} mdFontSize={"0.7rem"} lgFontSize={"0.75rem"} color={"black"} label={"Diagnosis"} width={"100%"} />
                                </Box>
                                <NavigationBar label={"Advice"} />
                                <Stack flexDirection={"row"} justifyContent={"end"}>
                                    <Box sx={{
                                        clipPath: 'circle(41% at 50% 50%)'
                                    }}>
                                        <ButtonComp backgroundColor={"white"} color={"black"} label={"<"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                                    </Box>
                                    <Box sx={{

                                        clipPath: 'circle(41% at 50% 50%)'
                                    }}>
                                        <ButtonComp backgroundColor={"white"} color={"black"} label={">"} fontWeight={"700"} fontSize={"1.5rem"} width={"100%"} />
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>


                    </Grid>
                    <Grid item sm={12}>

                        <HistoryComp />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default NavigationBtn