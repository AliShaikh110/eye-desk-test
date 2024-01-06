import { Box } from "@mui/material";
import React from "react";
import DrugAllergies from "./AllergiesComponents/DrugAllergies";
import ContactAllergies from "./AllergiesComponents/ContactAllergies";
import FoodAllergies from "./AllergiesComponents/FoodAllergies";

const AllergiesTab = () => {
  return (
    <>
      <Box sx={{}}>
        <Box
          sx={{ paddingX: "1rem", paddingTop: "1rem", marginBottom: "15px" }}
        >
          <div
            style={{
              padding: "1rem",
            }}
          >
            <DrugAllergies />
            <ContactAllergies />
            <FoodAllergies />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AllergiesTab;
