import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";

export default function SelectAutoWidth({
  selectInpLabel,
  height,
  paddingTop,
  labelSpace="Select",
  bgcolor,
  mdFontSize,
  lgFontSize,
  width
}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: "100%" }}>
        <InputLabel sx={{width:"100%",fontSize:{md:mdFontSize, lg:lgFontSize}}}size='small' id="demo-multiple-name-label" >{selectInpLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label={labelSpace}
          size='small' 
          sx={{bgcolor:bgcolor,minWidth:"0px", width:{width}}}
          
          
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}




export function TextFieldInp({
    label,
    width = "100%",
    backgroundColor,
    disabled=false,
    fontSize,
    size="small",
    mdFontSize,
    lgFontSize
}){

return(
    <>
        <TextField fullWidth 
        InputLabelProps={{sx:{fontSize:{md : mdFontSize, lg: lgFontSize}  }}}
         id="outlined-basic" size={size} label={label} variant="outlined" disabled={disabled}
            sx={{width:{width},
            fontSize:{fontSize},
            color:"rgba(105, 105, 105, 0.55)",backgroundColor:{backgroundColor}}}
        />
    </>
)
}


export function TextFieldRefraction({
  label,
  width = "100%",
  backgroundColor,
  disabled=false,
  fontSize,
  size="small",
  mdFontSize,
  lgFontSize
}){

return(
  <>
      <TextField fullWidth 
      InputLabelProps={{sx:{fontSize:{md : mdFontSize, lg: lgFontSize}  }}}
       id="outlined-basic" size={size} label={label} variant="outlined" disabled={disabled}
          sx={{width:{width},
          fontSize:{fontSize},
          color:"rgba(105, 105, 105, 0.55)",backgroundColor:{backgroundColor}}}
      />
  </>
)
}
