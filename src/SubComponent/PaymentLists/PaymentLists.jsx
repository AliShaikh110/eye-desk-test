import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaymentLists = () => {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          paddingBottom: "5rem",
        }}
      >
        <Paper
          sx={{
            width: "80%",
            bgcolor: "rgba(245, 240, 240, 1)",
            paddingY: { sm: "1.2rem", md: "0.5rem" },
          }}
        >
          <Grid
            container
            sx={{ paddingX: { sm: "0.9rem", md: "1.2rem", lg: "1.5rem" } }}
            rowSpacing={"1rem"}
          >
            <Grid item md={6} sm={6}>
              <Stack>
                <Typography sx={{ fontSize: { sm: "1.2rem", md: "0.7rem" } }}>
                  Payment 1
                </Typography>
                <Typography
                  sx={{
                    fontSize: { sm: "0.9rem", md: "0.7rem" },
                    fontWeight: 600,
                  }}
                  variant="body2"
                >
                  1 User x 12 Months
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={6} sm={6}>
              <Stack
                alignItems={"center"}
                flexDirection={"row"}
                justifyContent={"end"}
              >
                <Typography>₹15,000</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </>
  );
};

export default PaymentLists;
