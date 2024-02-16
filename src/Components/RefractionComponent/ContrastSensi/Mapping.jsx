import Grid from "@mui/material/Grid";
import React, {useState} from "react";
import ButtonComp from "../HelpRefComp/HelpRefComp";

export  function ContrastSensiMaping() {
    const [value, setValue] = useState('');
    const start = 2.25;
    const end = 0.00;
    const decrement = 0.15;
    const numbersArray = [];

    for (let i = start; i >= end; i -= decrement) {
        numbersArray.push(i.toFixed(2));
    }

    const onSet = (params) => {
        setValue(params);
    }

    return (
        <>
            <Grid container spacing={"0.1rem"}>
                {numbersArray.map((key, i) => {
                    return (
                        <Grid item sm={1.5} md={1.5} key={i}>
                            <ButtonComp hover={{color:"white", fontWeight:600}} smFontSize={"0.75rem"} mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} backgroundColor={"white"} width={"100%"} minWidth={"0px"} onClick={() => onSet(key)} label={key} color={"black"} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}