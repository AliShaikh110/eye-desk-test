import Button from '@mui/material/Button'
import React from 'react'

export function toggleBtn({
    onClick,
    label,
    backgroundColor,
    color,
    hover
}){

return(
    <>
        {/* <Button 
            
            startIcon={startIcon}
            endIcon={endIcon} 
            sx={{width:{width}, 
            minWidth:{minWidth},
            borderRadius:{borderRadius},
            fontSize:{md:mdFontSize, lg:lgFontSize, sm:smFontSize},
            height:{height},
            fontWeight:{fontWeight},
            bgcolor:{backgroundColor},
            color:{color},
            padding:{padding},
            margin:{margin},
            "&:hover":{backgroundColor:hover},
            // "&:active":{color:"white"},
        
        }}  variant="contained" onClick={onClick} >{label}</Button> */}
        <Button
            sx={{ 
            minWidth:0,
            borderRadius:"0.3rem",
            fontSize:"0.75rem",
            height:"1.7rem",
            fontWeight:600,
            bgcolor:{backgroundColor},
            color:{color},
            padding:"0rem 1.1rem",
            "&:hover":{hover},
            minHeight:0
        
        }}  variant="contained" onClick={onClick} >{label}</Button>




    </>
)
}