import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropdownBtn({ inputLabel, menuItems,style }) {
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <FormControl sx={{ m: 0, width: "100%" }}>
      <InputLabel id="demo-simple-select-label" size="small">
        {inputLabel}
      </InputLabel>
      <Select
        sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={select}
        label={inputLabel}
        onChange={handleChange}
        size="small"
        style={style}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
