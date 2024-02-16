import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export function SelectInp({
  selectInpLabel,
  labelSpace="Select",
  bgcolor,
  smFontSize="0.9rem",
  mdFontSize="0.85rem",
  lgFontSize="0.95rem",
  width
}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: "100%" }} size='small'>
        <InputLabel  style={{fontSize:{sm:"0.9rem", md:"0.85rem"},}}  sx={{width:"100%",fontSize:{sm:smFontSize, md:mdFontSize, lg:lgFontSize}, marginTop:"0.1rem"}}size='small' id="demo-multiple-name-label" >{selectInpLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label={labelSpace}
          size='small' 
          sx={{bgcolor:bgcolor,minWidth:"0px", width:{width},height:"2.5rem", fontSize:{md:"0.85rem", lg: "0.9rem"}}}
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
