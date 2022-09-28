import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { todoService } from "../../../axiosInstance";
import serviceEndpoints from "../serviceEndpoints";

function TodoItem() {
  const [todoItems, setTodoItems] = useState([]);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  const myArray = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

  const addTodoTask = async () => {
    if (!todo) {
      setError(true);
      return false;
    }

    try {
      const addTodoItems = await todoService.post(serviceEndpoints.createTodoItem, { title: todo });
      setTodoItems(addTodoItems.data.data);
      console.log(addTodoItems.data);
    } catch (err) {
      console.log(err);
    }
  };

  const todoList = async () => {
    try {
      const todoItems = await todoService.get(serviceEndpoints.todoItems);
      setTodoItems(todoItems.data.data);
      console.log(todoItems.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodoItem = async (id) => {
    try {
      const todoOtherItems = await todoService.delete(serviceEndpoints.deleteTodoItem.replace(':id', id));
      // setTodoItems(todoOtherItems.data.data);
      todoList();
      console.log(todoOtherItems.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    todoList();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h2>Add Todo Tasks</h2>
          </Col>
        </Row>

        <hr />

        <Form>
          <Row>
            <Col xs={8} sm={8} md={8} lg={10}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  size="lg"
                  className="rounded-0"
                  type="text"
                  placeholder="Enter Task Name"
                  onChange={(e) => setTodo(e.target.value)}
                  value={todo}
                />
                {error && !todo && <span className="invalid-input">Enter valid Todo</span>}
              </Form.Group>
            </Col>
            <Col xs={4} sm={4} md={4} lg={2}>
              <Button size="lg" variant="dark" className="float-end rounded-0" onClick={addTodoTask}>
                Add Task
              </Button>
            </Col>
          </Row>
        </Form>

        <hr />

        <Card className="rounded-0 border-0">
          <Card.Header className="text-center ">
            <h4 className="m-0">Todo Tasks</h4>
          </Card.Header>
          <Card.Body className="p-0">
            {todoItems.map((todo, key) => (
              <Row className="mt-3" key={key}>
                <Col xs={8} sm={8} md={8} lg={10}>
                  <Alert
                    className="rounded-0 m-2"
                    variant="dark"
                    // key={myArray[Math.floor(Math.random() * myArray.length)]}
                    // variant={myArray[Math.floor(Math.random() * myArray.length)]}
                  >
                    {todo.title}
                  </Alert>
                </Col>
                <Col xs={4} sm={4} md={4} lg={2}>
                  <IconButton color="error" className="edt-icon-btn float-end" onClick={() => deleteTodoItem(todo.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton className="edt-icon-btn float-end">
                    <EditIcon />
                  </IconButton>
                </Col>
              </Row>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default TodoItem;
