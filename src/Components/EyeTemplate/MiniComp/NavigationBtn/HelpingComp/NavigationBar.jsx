import { Box } from "@mui/material";
import React from "react";
import ButtonComp from "../../../../HistoryComp/MiniComp/HelpingComp/BasicComp";

function NavigationBar({
    label,
    fontSize,
    onClick
}) {

    return (
        <>
            <Box sx={{
                width: {
                    sm:"9rem",
                    md:"8.5rem",
                    lg:"11.5rem"
                },
                  marginLeft:{
                    sm:"-1.18rem",
                    md:"-1.18rem",
                    lg:"-1.55rem"
                  } ,

                height: "3rem", // Adjust for desired proportions
                clipPath: 'polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)',

            }}
            >
                <ButtonComp onClick={onClick} hover={{color : "white", fontWeight:"550"}} backgroundColor={"white"} smFontSize={"0.7rem"} mdFontSize={"0.7rem"} lgFontSize={"0.75rem"} color={"black"} fontSize={fontSize} label={label} width={"100%"} />
            </Box>
        </>
    )
}

export default NavigationBar;