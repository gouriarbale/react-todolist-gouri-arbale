import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Table, TableBody } from "@mui/material";
import TodoList from "./TodoList";
import index from "../Home";

const Todo = () => {
  const [todo, setTodo] = useState();
  const [items, setItem] = useState([]);
  const [toggelSubmit, setToggelSubmit] = useState(true);
  const [isEditItems, setIsEditItems] = useState(null);
  const handleChange = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  };
  const handleAddTodo = (event) => {
    if (todo && toggelSubmit) {
      const allInputData = { id: new Date().getTime().toString(), name: todo };
      setItem((olditems) => {
        return [...olditems, allInputData];
      });
      setTodo(" ");
    } else {
      setItem(
        items.map((ele) => {
          if (ele.id === isEditItems) {
            return { ...ele, name: todo };
          }
          return ele;
        })
      );
      setToggelSubmit(true);
      setTodo("");
      setIsEditItems(null);
    }
  };
  const handleDelete = (id) => {
    console.log("delete", id);
    setItem((olditems) => {
      console.log("olditems", olditems);
      return olditems.filter((arr) => {
        return arr.id !== id;
      });
    });
  };
  const handleEdit = (id) => {
    console.log("delete", id);
    let editItem = items.find((ele) => {
      return ele.id === id;
    });
    setToggelSubmit(false);
    setTodo(editItem.name);
    setIsEditItems(id);
    // setItem((olditems) => {
    //   console.log("olditems", olditems);
    //   return olditems.filter((arr) => {
    //     return arr.id !== id;
    //   });
    // });
  };
  return (
    <>
      <Grid
        style={{ display: "flex", alignContent: "center", marginBottom: 20 }}
        item
        xs={8}
      >
        <TextField
          autoComplete="todoList"
          name="todoList"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          id="todoList"
          label="Add Task"
          value={todo}
        />

        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          onClick={handleAddTodo}
        >
          {toggelSubmit ? "Add" : "Update Name"}
        </Button>
      </Grid>

      <ol>
        {items.map((val) => {
          return (
            <TodoList
              key={val.id}
              text={val.name}
              id={val.id}
              onSelect={handleDelete}
              onEdit={handleEdit}
            />
          );
        })}
      </ol>
    </>
  );
};

export default Todo;
