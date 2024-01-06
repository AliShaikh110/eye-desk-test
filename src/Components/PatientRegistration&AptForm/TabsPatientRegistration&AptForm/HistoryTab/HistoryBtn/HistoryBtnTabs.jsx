import React from "react";
import { Grid } from "@mui/material";
import ButtonComponent from "../../ButtonOfPatientRegistrationForm/ButtonComponent";

export function OpthalmicButton() {
  const Array = [
    "Glaucoma",
    "Retinal Detachment",
    "Glass",
    "Eye Disease",
    "Eye Surgery",
    "Uveitis",
    "Retinal Laser",
  ];

  return (
    <>
      {Array.map((key, i) => {
        return (
          <Grid item key={i}>
            <ButtonComponent
              sx={{
                width: "auto",
                fontSize: "10px",
                height: "100%",
                bgcolor: "white",
                color: "black",
                borderRadius: "0%",
                border: "1px solid gray",
              }}
              label={key}
            />
          </Grid>
        );
      })}
    </>
  );
}

export function SystemicButton() {
  const Array = [
    "Diabetes",
    "Hypertension",
    "Alcoholism",
    "Smoking Tobacco",
    "Cardiac Disorder",
    "Drug Abuse",
    "HIV/AIDS",
    "Cancer Tumor",
    "Tuberculosis",
    "Asthma",
    "CNS Disorder Stroke",
    "Hypothyroidism",
    "Hepatitis Cirrhosis",
    "Renal Disorder",
    "Acidity",
    "On Insulin",
    "On Aspirin Blood Thinners",
    "Consanguinity",
    "Thyroid Disorder",
    "Chewing Tobacco",
    "Rheumatoid Arthritis",
    "Benign Prostatic Hyperplasia ( BPH )",
  ];

  return (
    <>
      {Array.map((key, i) => {
        return (
          <Grid item key={i} sx={{ marginTop: "0.05rem" }}>
            <ButtonComponent
              sx={{
                width: "auto",
                fontSize: "10px",
                height: "100%",
                bgcolor: "white",
                color: "black",
                borderRadius: "0%",
                border: "1px solid gray",
              }}
              label={key}
            />
          </Grid>
        );
      })}
    </>
  );
}

export function NutritionalButton() {
  const Array = ["Malnourished", "Well Nourished", "Over Weight", "Obese"];

  return (
    <>
      {Array.map((key, i) => {
        return (
          <Grid item key={i} sx={{ marginTop: "0.05rem" }}>
            <ButtonComponent
              sx={{
                width: "auto",
                fontSize: "10px",
                height: "100%",
                bgcolor: "white",
                color: "black",
                borderRadius: "0%",
                border: "1px solid gray",
              }}
              label={key}
            />
          </Grid>
        );
      })}
    </>
  );
}

export function ImmunizationButton() {
  const Array = ["Complete", "Pending"];

  return (
    <>
      {Array.map((key, i) => {
        return (
          <Grid item key={i} sx={{ marginTop: "0.05rem" }}>
            <ButtonComponent
              sx={{
                width: "auto",
                fontSize: "10px",
                height: "100%",
                bgcolor: "white",
                color: "black",
                borderRadius: "0%",
                border: "1px solid gray",
              }}
              label={key}
            />
          </Grid>
        );
      })}
    </>
  );
}
