import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const TodoList = (props) => {
  return (
    <>
      <div
        style={{
          border: "1px solid blue",
          width: 700,
          padding: 5,
        }}
      >
        <Typography style={{ float: "left" }}>
          <li style={{ listStyle: "none" }}>{props.text}</li>
        </Typography>
        <div style={{ float: "right" }}>
          <Button
            // style={{ float: "right" }}
            onClick={() => {
              props.onEdit(props.id);
            }}
          >
            <EditIcon />
          </Button>
          <Button
            // style={{ float: "right" }}
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
