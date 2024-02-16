import { Box } from '@mui/material'
import React from 'react'
import Visit from '../MiniComp/Visit/Main'
import Chief from '../MiniComp/Chief/Main'
import Name from '../MiniComp/Name/Main'
import VitalSigns from '../MiniComp/VitalSigns/Main'

function HistoryComp() {
  return (
    <Box sx={{border:"1px solid rgba(105, 105, 105, 0.5)",}} bgcolor={"#f3f1f1"} paddingX={"1rem"} marginBottom={"0.9rem"}>
        <Visit />
        <Chief />
        <Name />
        <VitalSigns />
    </Box>

  )
}

export default HistoryComp