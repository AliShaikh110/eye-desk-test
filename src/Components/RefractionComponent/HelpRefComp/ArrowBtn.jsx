import React from "react";
import ButtonComp from "./HelpRefComp";

export default function ArrowBtn({
    label,
    padding="0.25rem 0.95rem",
    mdFontSize="0.75rem",
    lgFontSize="0.75rem",
    smFontSize="0.75rem",
    backgroundColor="#1976d2",
    hover,
    onClick,
    fontWeight=600,
    width
    

    }){

return(
    <>
        <ButtonComp width={width}  onClick={onClick} fontWeight={fontWeight} hover={hover} backgroundColor={backgroundColor} smFontSize={smFontSize} mdFontSize={mdFontSize} lgFontSize={lgFontSize} label={label} height={"auto"}   padding={padding} borderRadius={"0.3rem"} minWidth={0}/>
    </>
)
}