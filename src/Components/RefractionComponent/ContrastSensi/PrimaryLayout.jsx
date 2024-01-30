import { Grid } from '@mui/material'
import React from 'react'
import { ContrastSensiMaping } from './Mapping'

export function ContrastSensiLayout() {

    return (
        <Grid container columnSpacing={0.5}>
            <Grid item sm={1.5} md={1.5} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            </Grid>
            <Grid item sm={9.5} md={9.5}>
                <ContrastSensiMaping />
            </Grid>
            <Grid item sm={1} md={1}>
            </Grid>
        </Grid>
    )
}