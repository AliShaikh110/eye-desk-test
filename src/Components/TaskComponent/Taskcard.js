import { Card, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import React from "react";

const characters = [
  {
    heading: "Task List",
    button: "ADD",
    icon: <AddCircleIcon /> ,
    span: "No Tasks Added",
  },
  {
    heading: "Today's Reports",
    button: " ",
    icon: <RemoveCircleIcon />,
    span: " ",
  },
  {
    heading: "Total Holidays",
    button: "ADD/EDIT",
    icon: <AddCircleIcon />,
    span: "No Plans Added",
  },

];

const CardListItem = (props) => {
  return (
    <Card style={{ margin: "20px", height: "110px"}}>
      <div
        style={{
          width: "90%",
          margin: "0 10px 0 10px",
          flexShrink: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>{props.character.heading}</h4>
        <IconButton size="small" style={{color:'#1757C2'}}>
          {props.character.icon}
          {props.character.button}
        </IconButton>

      </div>
      <span style={{ color: "lightgrey", marginLeft: "20px" }}>
        {props.character.span}
      </span>
    </Card>
  );
};

const CardList = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {characters.map((character) => {
        return <CardListItem character={character} key={character.id} />;
      })}
    </ul>
  );
};

export default function App() {
  return (
    <div style={{width:'100%'}}>
      <CardList />
    </div>
  );
}

