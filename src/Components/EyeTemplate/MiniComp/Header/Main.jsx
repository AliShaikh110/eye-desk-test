import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { SelectInp } from '../../../HistoryComp/MiniComp/HelpingComp/SelectInp'

function Header() {
    return (
        <>
            {/* <Grid container alignItems={"center"} sx={{ borderBottom: { sm: "0.15rem solid rgba(105, 105, 105, 0.5)" }, paddingTop: { md: "0.35rem" }, paddingBottom: { sm: "0.6rem", md: "0.7rem" }, paddingX: "0.6rem" }}>
                <Grid item md={1.7} lg={2} sm={12}>
                    <Typography sx={{ fontSize: { sm: "1.2rem", md: "1.1rem", lg: "1.2rem" }, color: "rgba(164, 164, 164, 1)", paddingTop: { sm: "0.5rem", md: 0 } }}>Eye Template</Typography>
                </Grid>
                <Grid item md={2.1} lg={2} sm={2.8}>
                    <Typography sx={{ color: "rgba(164, 164, 164, 1)", fontSize: { sm: "0.75rem", md: "0.85rem", lg: "1.02rem" } }}>
                        Mr. Ray O’Son/24/Male
                    </Typography>
                </Grid>
                <Grid item md={2.8} lg={2.6} sm={3.2}>
                    <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Typography color={"rgba(55, 55, 55, 1)"} sx={{ fontSize: { sm: "0.75rem", md: "0.85rem", lg: "1.02rem" } }}>Patient ID:</Typography>
                        <Typography sx={{ color: "rgba(164, 164, 164, 1)", fontSize: { sm: "0.75rem", md: "0.85rem", lg: "1.02rem" } }}>AEH-XYZ-123456</Typography>
                    </Stack>
                </Grid>
                <Grid item md={3.2} sx={{ width: "100%" }} sm={3}>
                    <Stack alignItems={"center"} flexDirection={"row"}>
                        <Typography sx={{ color: "rgba(55, 55, 55, 1)", fontSize: { sm: "0.75rem", md: "0.85rem", lg: "1.02rem" } }}>Doctor</Typography>
                        <Box sx={{ width: "100%", marginLeft: "0.7rem" }}>
                            <SelectInp height={"2.5rem"} labelSpace={"Neil Down"} selectInpLabel={"Neil Down"} />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item md={2.2} sm={3}>
                    <Stack justifyContent={"end"} flexDirection={"row"} paddingRight={{ md: "0.4rem" }}>
                        <Box>
                            <Button size="small" sx={{ bgcolor: "rgba(2, 184, 1, 1)", fontSize: { sm: "0.7rem", md: "0.75rem", lg: "0.85rem" }, color: "white", marginRight: "0.4rem", "&:hover": { backgroundColor: "green", } }} variant="contained">Save</Button>
                            <Button size="small" sx={{ fontSize: { sm: "0.7rem", md: "0.75rem", lg: "0.85rem", } }} variant="contained">Close</Button>
                        </Box>
                    </Stack>
                </Grid>
            </Grid> */}



            {/* *********------------********** */}
            <Box sx={{ borderBottom: { sm: "0.15rem solid rgba(105, 105, 105, 0.5)" }, paddingTop: { md: "0.35rem" }, paddingBottom: { sm: "0.6rem", md: "0.6rem" }, paddingX: "1rem" }}>


                <Stack sx={{ flexDirection: "row", justifyContent: "space-between", paddingTop: { sm: "0.75rem", md: 0 }, paddingBottom:{sm:"0.1rem"} }} >

                    <Typography sx={{ fontSize: { sm: "1.2rem", md: "1.1rem", lg: "1.3rem" }, color: "rgba(164, 164, 164, 1)", }}>Eye Template</Typography>
                    <Typography sx={{ fontSize: { sm: "0.95rem", md: "0.965rem", lg: "1.08rem" }, color: "rgba(164, 164, 164, 1)", }}>
                        Mr. Ray O’Son/24/Male
                    </Typography>
                </Stack>
                <Stack sx={{ flexDirection: "row", justifyContent: "space-between", }}  >

                    <Stack flexDirection={"row"} alignItems={"center"} width={'33.3333%'}>
                        <Typography color={"rgba(55, 55, 55, 1)"} sx={{ fontSize: { sm: "0.825rem", md: "0.95rem", lg: "0.985rem" } }}>Patient ID:</Typography>
                        <Typography sx={{ color: "rgba(164, 164, 164, 1)", fontSize: { sm: "0.825rem", md: "0.9rem", lg: "0.95rem" } }}>AEH-XYZ-123456</Typography>
                    </Stack>
                    <Stack alignItems={"center"} flexDirection={"row"} justifyContent={"center"} width={'33.3333%'}>
                        <Typography sx={{ color: "rgba(55, 55, 55, 1)", fontSize: { sm: "0.825rem", md: "0.95rem", lg: "0.985rem" } }}>Doctor</Typography>
                        <Box sx={{ width: "100%", marginLeft: "0.7rem" }}>
                            <SelectInp height={"2.5rem"} labelSpace={"Neil Down"} selectInpLabel={"Neil Down"} />
                        </Box>
                    </Stack>
                    <Stack justifyContent={"end"} alignItems={"center"} flexDirection={"row"} width={'33.3333%'}>
                        <Box>
                            <Button size="small" sx={{ fontWeight: 600, bgcolor: "rgba(2, 184, 1, 1)", fontSize: { sm: "0.725rem", md: "0.75rem", lg: "0.85rem" }, color: "white", marginRight: "0.4rem", "&:hover": { backgroundColor: "green", } }} variant="contained">Save</Button>
                            <Button size="small" sx={{ fontWeight: 600, fontSize: { sm: "0.725rem", md: "0.75rem", lg: "0.85rem", } }} variant="contained">Close</Button>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

export default Header