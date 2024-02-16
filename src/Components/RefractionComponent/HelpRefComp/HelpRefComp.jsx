import Button from "@mui/material/Button";
import React from "react";


export function ButtonComp({
    label,
    width,
    borderRadius,
    fontWeight,
    color ,
    onClick,
    height = "100%",
    padding,
    minWidth,
    margin,
    mdFontSize = "0.75rem",
    lgFontSize,
    smFontSize = "0.75rem",
    backgroundColor,
    startIcon,
    endIcon,
    hover
}){

return(
    <>
        <Button 
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
            "&:hover":{backgroundColor:hover, fontWeight:600},
        
        }}  variant="contained" onClick={onClick} >{label}</Button>
    </>
)
}

export default ButtonComp;




