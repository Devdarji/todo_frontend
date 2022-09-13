import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Modal } from "@mui/material";
import React, { useState } from "react";
import { Button, Card, Container, Form, InputGroup, Nav } from "react-bootstrap";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import serviceEndpoints from "../serviceEndpoints";
// import { todoService } from "../../../axiosInstance";
// import axios from "axios";
import http from '../../../axiosInstance'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderColor: "grey.500",
};

function TodoCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cardItem, setCardItem] = useState({});



  const fetchCardItems = async () => {
    try {
      let res = await http.get(
        `todo/card-items/`,
        );

      console.log("++++++++++++++++++++> ", res);
      setCardItem(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  fetchCardItems();
  return (
    <Container className="mt-4">
      <Button variant="primary" onClick={handleOpen}>
        Add Todo Card
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputGroup className="my-3 p-3">
            <Form.Control aria-label="Card Name" placeholder="Enter Card Name" />
            <Button>Add Card</Button>
          </InputGroup>

          <Box sx={{ borderTop: 1, borderColor: "grey.500", p: 2 }}>
            <InputGroup className="my-3">
              <Form.Control aria-label="Task Item" placeholder="Enter Task Name" />
              <Button>Add Task</Button>
            </InputGroup>
          </Box>
        </Box>
      </Modal>

      <Grid container spacing={2} className="mt-2">
        <Grid item xs={4}>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    Card Title
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "right" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={5}>
                        <EditIcon />
                      </Grid>
                      <Grid item xs={5}>
                        <DeleteIcon />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Card.Title>

              <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="#">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Pending</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Completed </Nav.Link>
                </Nav.Item>
              </Nav>

              <Grid container spacing={2} className="mt-2">
                <Grid item xs={8}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="This is a Task List." />
                  </FormGroup>
                </Grid>

                <Grid item xs={4} style={{ textAlign: "right" }}>
                  <MoreHorizIcon />
                </Grid>
              </Grid>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    Card Title
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "right" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={5}>
                        <EditIcon />
                      </Grid>
                      <Grid item xs={5}>
                        <DeleteIcon />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Card.Title>

              <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="#">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Pending</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Completed </Nav.Link>
                </Nav.Item>
              </Nav>

              <Grid container spacing={2} className="mt-2">
                <Grid item xs={8}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="This is a Task List." />
                  </FormGroup>
                </Grid>

                <Grid item xs={4} style={{ textAlign: "right" }}>
                  <MoreHorizIcon />
                </Grid>
              </Grid>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    Card Title
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "right" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={5}>
                        <EditIcon />
                      </Grid>
                      <Grid item xs={5}>
                        <DeleteIcon />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Card.Title>

              <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="#">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Pending</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Completed </Nav.Link>
                </Nav.Item>
              </Nav>

              <Grid container spacing={2} className="mt-2">
                <Grid item xs={8}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="This is a Task List." />
                  </FormGroup>
                </Grid>

                <Grid item xs={4} style={{ textAlign: "right" }}>
                  <MoreHorizIcon />
                </Grid>
              </Grid>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TodoCard;
