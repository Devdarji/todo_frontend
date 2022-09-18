import { Box, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, InputGroup, Nav } from "react-bootstrap";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

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
  const [cardItem, setCardItem] = useState([]);
  const [cardName, setCardName] = useState(false);
  const [editCardName, setEditCardName] = useState(false);
  const [cardNameSaveButton, setCardNameSaveButton] = useState(true)
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (key, value, isChild = false) => {
    const cardInfo = {
      ...cardItem,
    };

    if (key === "card_name") {
      if (
        cardItem.card_item
      ) {
        setCardNameSaveButton(true);
      } else {
        setCardNameSaveButton(false);
      }
    }
  };
  
  const todoCardItem = async () => {
    try {
      const response = await axios.get("http://localhost:8006/todo/card-items/");

      console.log(response.data.data);
      setCardItem(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCard = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8006/todo/${id}/delete-card/`);
      setCardItem(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditableFields = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8006/todo/${id}/update-card/`);
      setCardItem(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const changeCardName = () => {
    setEditCardName(false);
  };

  const handleVerifiedRegistrationNumber = () => {
    let editCardNamePayload = {};

    editCardNamePayload["card_name"] = cardItem.card_name;

    // setEditVerifiedRegistrationNumber(true);
  };

  useEffect(() => {
    todoCardItem();
  }, []);

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
        {cardItem.map((item, key) => (
          <Grid item xs={4} key={key}>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>
                  <Grid container spacing={2}>
                    {cardName ? (
                      <>
                        <Grid item xs={8}>
                          {item.card_name}
                        </Grid>
                        <div className="col-1 ">
                          <IconButton onClick={changeCardName} className="edt-icon-btn">
                            <EditIcon />
                          </IconButton>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-8 mt-3">
                          <TextField
                            required={true}
                            color="secondary"
                            label="Card Name"
                            type="text"
                            onChange={(e) => handleChange("card_name", e.target.value)}
                            value={item?.card_name ? item?.card_name : ""}
                          />
                          {/* <IconButton><DoneIcon variant="contained" onClick={updateClaim}/></IconButton> */}
                        </div>
                        <div className="ml-2 col-2 mt-3">
                          <Button
                            fullWidth={false}
                            onClick={handleVerifiedRegistrationNumber}
                            disabled={cardNameSaveButton}
                          >
                            {item.card_name ? "Update" : "Save"}
                          </Button>
                        </div>
                      </>

                      // <div className="col-3">
                      //   <div className="d-inline-flex Email-edit-btn-fix">
                      //     <Grid item xs={8}>
                      //       {item.card_name}
                      //     </Grid>
                      //     <IconButton size="small" onClick={changeCardName} className="edt-icon-btn">
                      //       <EditIcon />
                      //     </IconButton>
                      //   </div>
                      // </div>
                    )}
                    {/* <Grid item xs={8}>
                      {item.card_name}
                    </Grid> */}
                    {/* <Grid item xs={4} style={{ textAlign: "right" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={5}>
                          <IconButton
                            size="small"
                            onClick={() => handleEditableFields(item.id)}
                            className="edt-icon-btn"
                          >
                            <EditIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={5}>
                          <IconButton variant="contained" color="primary" onClick={() => deleteCard(item.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid> */}
                  </Grid>
                </Card.Title>

                <Nav justify variant="tabs" defaultActiveKey="/home" className="mb-2">
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

                {item.title.map((i, key) => (
                  <Grid container spacing={2} key={key}>
                    <Grid item xs={8}>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox checked={i.is_pending} />} label={i.title} />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "right" }}>
                      <MoreHorizIcon />
                    </Grid>
                  </Grid>
                ))}
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TodoCard;
