import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import DropdownBtn from "../../../../SubComponent/DropdownButton/DropdownBtn";
import { useAppContext } from "../../../../AppContext/AppContext";

const PatientsTab = () => {
  const { name, setName, setMiddleName, middleName,phone,setPhone } = useAppContext();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid
          container
          style={{
            minHeight: "auto",
          }}
        >
          <Grid container>
            <Grid container spacing={3} sx={{ px: "10px", paddingY: "1rem" }}>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                />
              </Grid>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Middle Name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                />
              </Grid>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name "
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ paddingBottom: "1rem" }}>
            <Grid container spacing={3} sx={{ px: "10px" }}>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  type="phone"
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  size="small"
                />
              </Grid>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Secondary Number "
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  size="small"
                />
              </Grid>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container columnSpacing={3} sx={{ px: "10px" }}>
            <Grid item sx={4} xs={12} sm={6} md={4} lg={4}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",
                  position: "relative",
                  marginTop: "5PX",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                Gender
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <Grid container>
                    <Grid item sx={6} xs={12} sm={6} md={7} lg={6}>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </Grid>
                    <Grid item sx={6} xs={12} sm={6} md={5} lg={6}>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",
                  position: "relative",
                  marginTop: "2px",
                  marginBottom: "2px",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                D.O.B
              </Typography>
              <Box components={["DatePicker"]}>
                <DatePicker
                  label="DD/MM/YYYY"
                  slotProps={{ textField: { size: "small" } }}
                  sx={{ backgroundColor: "white" }}
                />
              </Box>
            </Grid>
            <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",
                  position: "relative",
                  marginTop: "3PX",
                  size: "small",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                Patient Type
              </Typography>
              <DropdownBtn
                inputLabel="Select"
                menuItems={[
                  { value: "a", label: "Component 1" },
                  { value: "b", label: "Component 2" },
                  { value: "c", label: "Component 3" },
                ]}
              />
            </Grid>
          </Grid>
          <Grid container columnSpacing={3} sx={{ px: "10px", py: "5px" }}>
            <Grid item sx={8} md={8} lg={8}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",
                  position: "relative",
                  marginTop: "5PX",
                  marginBottom: "5px",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                Address
              </Typography>
              <Grid container spacing={3}>
                <Grid item sx={6} xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                    fullWidth
                    label="Address1"
                    size="small"
                  />
                </Grid>
                <Grid item sx={6} xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                    fullWidth
                    label="Address 2"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",

                  left: "10px",
                  marginTop: "10PX",
                  lineHeight: "",
                  marginBottom: "4px",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                Occupation
              </Typography>
              <Grid xs={12} sm={12} md={12} lg={12}>
                <DropdownBtn
                  inputLabel="Select"
                  menuItems={[
                    { value: "a", label: "Component 1" },
                    { value: "b", label: "Component 2" },
                    { value: "c", label: "Component 3" },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ px: "10px", paddingTop: "1rem" }}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <DropdownBtn
                inputLabel="State"
                menuItems={[
                  { value: "a", label: "Component 1" },
                  { value: "b", label: "Component 2" },
                  { value: "c", label: "Component 3" },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                fullWidth
                style={{ Width: "100px" }}
                label="City"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                fullWidth
                label="Pincode"
                className=""
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                fullWidth
                label="Emplyee (If Any)"
                size="small"
              />
            </Grid>
          </Grid>

          <Grid container sx={{ px: "1px", paddingY: "1rem" }}>
            <Grid item xs={4}>
              <Grid container spacing={3} sx={{ px: "10px" }}>
                <Grid item xs={4} sm={12} md={12} lg={12}>
                  <TextField
                    // style={{ position: "relative", top: "5px" }}
                    fullWidth
                    sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                    label="Medical Record No."
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={1} sx={{ px: "10px" }}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <DropdownBtn
                    inputLabel="Aadhar Card"
                    menuItems={[
                      { value: "a", label: "Component 1" },
                      { value: "b", label: "Component 2" },
                      { value: "c", label: "Component 3" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8}>
                  <TextField
                    style={{
                      width: "100%",
                    }}
                    sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                    label="Government Issued Id"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
};

export default PatientsTab;
