import React from "react";
import ButtonComp from "./HelpRefComp";

export default function ArrowBtn({
    label,
    startIcon, 
    endIcon,
    padding="1.5px 15px",
    mdFontSize="0.78rem",
    lgFontSize="0.85rem",
    smFontSize="0.8rem",
    backgroundColor="#1976d2",
    hover,
    onClick
    

    }){

return(
    <>
        <ButtonComp  onClick={onClick} hover={hover} backgroundColor={backgroundColor} smFontSize={smFontSize} mdFontSize={mdFontSize} lgFontSize={lgFontSize} label={label} startIcon={startIcon} endIcon={endIcon}height={"auto"}   padding={padding} borderRadius={"0.75rem"} minWidth={0}/>
    </>
)
}