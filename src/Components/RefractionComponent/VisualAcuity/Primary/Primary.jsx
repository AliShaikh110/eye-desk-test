import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { LabelSelectRefraction } from "../../HelpRefComp/LabelSelectRef";




export function UcvaFirstMaping() {
    const [value, setValue] = useState('');

    const ucva = ["PL-", "PL+", "FL", "HM", "CFCF", "FC", "1/60", "2/60", "3/60", "4/60", "5/60", "6/60", "6/36", "6/24", "6/18", "6/12", "6/9", "6/7.5", "6/6", "6/5"];

    const onSet = (params) => {
        setValue(params);
    }

    return (
        <>
            <Grid container spacing={"0.1rem"}>
                {ucva.map((key, i) => {
                    return (
                        <Grid item sm={1.3333} md={1.5} key={i}>
                            <Button
                                onClick={() => onSet(key)}
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    minWidth : 0,
                                    fontSize : "0.75rem",
                                    color: 'black',
                                    bgcolor: 'white',
                                    '&:hover': {
                                        color: 'white',
                                        fontWeight : 600
                                    },
                                }}
                            >
                                {key}
                            </Button>
                        </Grid>)
                })}
            </Grid>
        </>
    )
}


export function UcvaSecondMaping() {
    const [value, setValue] = useState('');

    const ucvaSecond = ["N4", "N5", "N6", "N8", "N10", "N12", "N14", "N18", "N24", "N26", "N36", "<N36", "<6/60", "6/60", "6/36", "6/24", "6/18", "6/12", "6/9", "6/7.5", "6/6", "6/5"]

    const onSet = (params) => {
        setValue(params);
    }

    return (
        <>
            <Grid container spacing={"0.1rem"}>
                {ucvaSecond.map((key, i) => {
                    return (
                        <Grid item sm={1.3333} md={1.5} key={i}>
                            {/* <ButtonComp hover={{ color: "white", fontWeight: "600" }} smFontSize={"0.75rem"} mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} backgroundColor={"white"} width={"100%"} minWidth={"0px"} onClick={() => onSet(key)} label={key} color={"black"} /> */}
                            <Button
                                onClick={() => onSet(key)}
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    minWidth : 0,
                                    fontSize : "0.75rem",
                                    color: 'black',
                                    bgcolor: 'white',
                                    '&:hover': {
                                        color: 'white',
                                        fontWeight : 600
                                    },
                                }}
                            >
                                {key}
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}


export function ContactLensLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}><Typography sx={{ fontSize: { sm: "0.8rem", md: "0.77rem", lg: "0.77rem" }, fontWeight: 600 }}>Contact Lens</Typography></Grid>
            <Grid item sm={9} md={9}>
                <UcvaFirstMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <Button
                        sx={{
                            hover: { color: "white", fontWeight: "600" },
                            fontSize: { sm: "0.75rem", md: "0.78rem", lg: "0.85rem" },
                            backgroundColor: "white",
                            minWidth: "10px",
                            color: "black",
                        }}
                    >
                        P
                    </Button>
                </Stack>
            </Grid>
        </Grid>

    )
}


export function GlassesLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}><Typography sx={{ fontSize: { sm: "0.8rem", md: "0.77rem", lg: "0.77rem" }, fontWeight: 600 }}>Glasses</Typography></Grid>
            <Grid item sm={9} md={9}>
                <UcvaFirstMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    {/* <ButtonComp hover={{ color: "white", fontWeight: "600" }} smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} /> */}
                    <Button
                        sx={{
                            hover: { color: "white", fontWeight: "600" },
                            fontSize: { sm: "0.75rem", md: "0.78rem", lg: "0.85rem" },
                            backgroundColor: "white",
                            minWidth: "10px",
                            color: "black",
                        }}
                    >
                        P
                    </Button>
                </Stack>
            </Grid>
        </Grid>

    )
}




export function PinholeLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}><Typography sx={{ fontSize: { sm: "0.8rem", md: "0.77rem", lg: "0.77rem" }, fontWeight: 600 }}>Pinhole</Typography></Grid>
            <Grid item sm={9} md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"column"} spacing={0.1} alignItems={"end"}>
                    {/* <ButtonComp hover={{ color: "white", fontWeight: "600" }} smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"0px"} label={"P"} color={"black"} /> */}
                    {/* <ButtonComp hover={{ color: "white", fontWeight: "600" }} smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"9px"} padding={"6px 13.5px"} label={"NI"} color={"black"} /> */}
                    <Button
                        sx={{
                            hover: { color: "white", fontWeight: "600" },
                            fontSize: { sm: "0.75rem", md: "0.78rem", lg: "0.85rem" },
                            backgroundColor: "white",
                            minWidth: "10px",
                            color: "black",
                        }}
                    >
                        P
                    </Button>
                    <Button
                        sx={{
                            hover: { color: "white", fontWeight: "600" },
                            fontSize: { sm: "0.75rem", md: "0.78rem", lg: "0.85rem" },
                            backgroundColor: "white",
                            minWidth: "10px",
                            color: "black",
                        }}
                    >
                        NI
                    </Button>
                </Stack>
            </Grid>
        </Grid>

    )
}



export function FirstUcvaLayout() {

    return (
        <>
            <Grid container rowSpacing={"2rem"}>
                <Grid item sm={1.5} md={1.5}><Typography sx={{ fontSize: { sm: "0.8rem", md: "0.77rem", lg: "0.77rem" }, fontWeight: 600 }} >UCVA</Typography></Grid>
                <Grid item sm={9} md={9}>
                    <UcvaFirstMaping />
                </Grid>
                <Grid item sm={1.5} md={1.5}>
                    <Stack flexDirection={"row"} justifyContent={"end"}>
                        {/* <ButtonComp hover={{ color: "white", fontWeight: "600" }} smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} /> */}
                        <Button
                            sx={{
                                hover: { color: "white", fontWeight: "600" },
                                fontSize: { sm: "0.75rem", md: "0.78rem", lg: "0.85rem" },
                                backgroundColor: "white",
                                minWidth: "10px",
                                color: "black",
                            }}
                        >
                            P
                        </Button>

                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export function SecondUcvaLayout() {

    return (
        <Grid container>
            <Grid item sm={1.5} md={1.5}></Grid>
            <Grid item sm={9} md={9}>
                <UcvaSecondMaping />
            </Grid>
            <Grid item sm={1.5} md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    {/* <ButtonComp hover={{ color: "white", fontWeight: "600" }} smFontSize={"0.75rem"} mdFontSize={"0.78rem"} lgFontSize={"0.85rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} /> */}
                    <Button
                        sx={{
                            hover: { color: "white", fontWeight: "600" },
                            fontSize: { sm: "0.75rem", md: "0.78rem", lg: "0.85rem" },
                            backgroundColor: "white",
                            minWidth: "10px",
                            color: "black",
                        }}
                    >
                        P
                    </Button>
                </Stack>
            </Grid>
        </Grid>

    )
}

// ****** Just inject after ucva **********

export function SelectLabelAfterUcva() {

    return (
        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <Grid item sm={1.5} md={1.5}>

            </Grid>
            <Grid item sm={9} md={9}>
                <Grid container columnSpacing={1.5}>
                    <Grid item sm={1} md={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Typography sx={{ fontSize: { sm: "0.82rem", md: "0.78rem", lg: "0.84rem" }, fontWeight: 550 }} >PR:</Typography>
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"S"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"I"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"N"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                    <Grid item sm={2.75} md={2.75}>
                        <LabelSelectRefraction label={"T"} smSelect={9} smTypo={3} labelSpace={""} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item sm={1.5} md={1.5}>
            </Grid>
        </Grid>
    )
}