import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import razor from "../../../images/razor.png";
import upi from "../../../images/upi.png";
import InputFieldPayment from "../../../SubComponent/PaymentTextFieldInput/InputFieldPayment";

const PaymentDetails = () => {
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "white" }}>
        <Stack alignItems={"center"} sx={{ marginBottom: "2rem" }}>
          <Typography variant="h5" sx={{ color: "#373737" }}>
            Enter Your Payment Details
          </Typography>
        </Stack>
        <Grid container columnSpacing={"1rem"} rowSpacing={"1rem"}>
          <Grid item md={7} sm={12}>
            <InputFieldPayment label={"Card Number"} />
          </Grid>
          <Grid item md={2.5} sm={6}>
            <InputFieldPayment label={"MM/YY"} />
          </Grid>
          <Grid item md={2.5} sm={6}>
            <InputFieldPayment label={"CVV"} />
          </Grid>
          <Grid item md={12} sm={12}>
            <InputFieldPayment label={"Street Address"} />
          </Grid>
          <Grid item md={12} sm={12}>
            <InputFieldPayment label={"Apt, unit, suite, etc. (optional)"} />
          </Grid>
          <Grid item md={12} sm={6}>
            <InputFieldPayment label={"Country"} />
          </Grid>
          <Grid item md={5} sm={6}>
            <InputFieldPayment label={"City"} />
          </Grid>
          <Grid item md={3} sm={6}>
            <InputFieldPayment label={"State"} />
          </Grid>
          <Grid item md={4} sm={6}>
            <InputFieldPayment label={"Zip Code"} />
          </Grid>
        </Grid>

        {/* ***********OR*************** */}

        <Stack alignItems={"center"} marginBottom={"1rem"} marginTop={"1rem"}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            OR
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            Pay With
          </Typography>
        </Stack>
        <Stack alignItems={"center"} spacing={"0.5rem"}>
          <Box sx={{ width: "17rem" }}>
            <img width={"100%"} src={razor} alt="razor" />
          </Box>
          <Box sx={{ width: "5rem" }}>
            <img width={"100%"} src={upi} alt="upi" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PaymentDetails;
