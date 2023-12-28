import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { Button, Card as MuiCard, Container, Typography } from "@mui/material";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const [work, setWork] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    setTask([...task, { work }]);
    setWork("");
  };

  const handleDelete = (i) => {
    const updatedTask = task.filter((item) => item.work !== i.work);
    setTask(updatedTask);
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: "#fff" }}>
      <div>
        <form
          onSubmit={submitHandle}
          className="form"
          style={{ padding: "8px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h7" fontWeight={600} align="center" mt={2}>
              Task List
            </Typography>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AddCircleIcon style={{ color: "#1757C2" }} />
              <span style={{ color: "#1757C2", fontWeight: "bold" }}>Add</span>
            </Button>
          </div>
          <input
            type="text"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            placeholder="Add Tasks Here..."
            style={{ height: "30px", border: "none", outline: "none" }}
          />
        </form>
        {task.map((item) => (
          <Card key={item.work} work={item.work} onDelete={handleDelete} />
        ))}
      </div>
    </Container>
  );
};

const Card = ({ work, onDelete }) => {
  const words = work.split(" ");
  const formattedWork = words.reduce((result, word, index) => {
    const lineBreak = index % 5 === 0 && index !== 0 ? "\n" : " ";
    return `${result}${lineBreak}${word} `;
  }, "");

  return (
    <MuiCard
      className="card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: "8px",
        marginBottom: "8px",
        paddingLeft: "5px",
        maxHeight: "100px", 
        overflowY: "auto",
      }}
    >
      <Typography style={{ whiteSpace: "pre-line"}}>
        {formattedWork}
      </Typography>{" "}
      <Button
        variant="outlined"
        color="error"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
        }}
        onClick={() => onDelete({ work })}
      >
        <RemoveCircleIcon style={{ color: "#1757C2" }} />
      </Button>
    </MuiCard>
  );
};

export default TodoList;
