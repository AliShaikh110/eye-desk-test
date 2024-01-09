import { Button, Container, Grid } from "@mui/material";
import React from "react";
import DropdownBtn from "../../../SubComponent/DropdownButton/DropdownBtn";

const TemplateDetailsPatient = () => {
  return (
    <>
      <Container variant="body10" paragraph>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5>Template Details : </h5>
          <Grid
            container
            spacing={5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item>
              <DropdownBtn
                inputLabel="New"
                menuItems={[
                  { value: "a", label: "Component 1" },
                  { value: "b", label: "Component 2" },
                  { value: "c", label: "Component 3" },
                ]}
                style={ {m: 1, minWidth: 80}}
              />
            </Grid>
            <Grid item>
              <Button
                style={{
                  border: "#1757C2",
                  fontSize: "10px",
                  color: "#1757C2",
                }}
              >
                Consolidate Reports
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default TemplateDetailsPatient;
