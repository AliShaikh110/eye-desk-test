import React from "react";
import Task from "../TaskComponent/Task";
import TableCard from "./TableCard";
import cardsData from "./Content";
import { Grid } from "@mui/material";

const Card = () => {
  return (
    <>
      <Grid style={{ display: "flex", backgroundColor: "#F5F5F5" }}>
        <Grid
          container
          item
          p={5}
          sm={12}
          xs={12}
          md={9}
        >
          {cardsData.map((data, index) => (
            <TableCard
              key={index}
              title={data.title}
              tableData={data.tableData}
              headers={data.headers}
            />
          ))}
        </Grid>
        <Grid item xs={12} md={3} sm={12} style={{ margin: "30px" }}>
          <Task />
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
