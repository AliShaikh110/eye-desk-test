import React from 'react'
import Header from '../MiniComp/Header/Main'
import Error from '../MiniComp/Error/Error'
import NavigationBtn from '../MiniComp/NavigationBtn/NavigationBtn'
import { Box } from '@mui/material'

function EyeTemplate() {
    return (
        <>
            <Box sx={{ bgcolor: "white", paddingX: "0rem", }}>
                <Header />
                <Error />
                <NavigationBtn />
            </Box>
        </>
    )
}

export default EyeTemplate