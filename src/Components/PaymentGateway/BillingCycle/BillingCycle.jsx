import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Radio from "../../../SubComponent/SignupRadio/RadioBtnSignup";
import PaymentLists from "../../../SubComponent/PaymentLists/PaymentLists";
import { Link } from "react-router-dom";

const BillingCycle = () => {
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "rgba(249, 249, 249, 1)" }}>
        <Stack sx={{ paddingBottom: "2rem" }}>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(99, 99, 99, 1)",
              fontWeight: { sm: "600", md: "500" },
              fontSize: { sm: "1.8rem" },
            }}
          >
            Confirm Plan :
          </Typography>
        </Stack>
        <Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            paddingBottom={"1rem"}
          >
            <Typography
              sx={{
                fontWeight: { sm: "600", md: "500" },
                fontSize: { sm: "1.5rem" },
              }}
              color={"rgba(101, 101, 101, 1)"}
            >
              Billing cycle
            </Typography>
          </Stack>
          <Grid container marginBottom={"2rem"}>
            <Grid item md={4} sm={4}>
              <Radio
                buttonName={"Monthly"}
                fontWeight={500}
                fontSize={"0.8rem"}
                color={"rgba(55, 55, 55, 1)"}
              />
            </Grid>
            <Grid item md={4} sm={4}>
              <Radio
                buttonName={"Quarterly"}
                fontWeight={500}
                fontSize={"0.8rem"}
                color={"rgba(55, 55, 55, 1)"}
              />
            </Grid>
            <Grid item md={4} sm={4}>
              <Radio
                buttonName={"Yearly"}
                fontWeight={500}
                fontSize={"0.8rem"}
                color={"rgba(55, 55, 55, 1)"}
              />
            </Grid>
          </Grid>
          {/* <Stack sx={{width:"100%", display:"flex", alignItems:"center", paddingBottom:"5rem"}}>
                    <Paper sx={{width:"80%", bgcolor:"rgba(245, 240, 240, 1)", paddingY:"0.5rem"}}>
                        <Grid container paddingX={"1.5rem"} rowSpacing={"1rem"}>
                            <Grid item md={6} sm={6}>
                                <Stack>
                                    <Typography variant="subtitle1">Payment 1</Typography>
                                    <Typography variant="body2">1 User x 12 Months</Typography>
                                </Stack>

                            </Grid>
                            <Grid item md={6} sm={6}>
                                <Stack alignItems={"center"} flexDirection={"row"} justifyContent={"end"} >
                                    <Typography>₹15,000</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Paper>
                </Stack> */}
          <PaymentLists />

          <Stack flexDirection={"row"} justifyContent={"end"} padding={"2rem"}>
            <Link to="/Dashboard">
              <Button
                sx={{
                  paddingX: { sm: "5rem", ms: "3.5rem" },
                  paddingTop: "0.4rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
                variant="contained"
              >
                Pay
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default BillingCycle;
