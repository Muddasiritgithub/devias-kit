'use client'
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField, Box, Typography, Grid } from "@mui/material";
 
 
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800, // Increased width for better layout
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({open,handleClose,handleSubmit}) => {
    const [formData, setFormData] = useState({
    Name: "",
    Title: "",
    image: null,
    Price:"",
    Discription:"",
    Model:"",
    Company:"",
    Ram:"",
    Camera:"",
    MadeIn:"",
    Proccessor:"",
    Quantity: 0,
  });

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };
  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
     
 
    });
  };
  const onSubmit = () => {
    handleSubmit(formData);
    handleClose();
   };

  
  return (
    <div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="name"
                label="Name"
                name="Name"
                value={formData.Name}
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                name="Title"
                value={formData.Title}
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="discription"
                label="Discription"
                variant="outlined"
                name="Discription"
                value={formData.Discription}
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="model"
                label="Model"
                variant="outlined"
                fullWidth
                name="Model"
                value={formData.Model}
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="camera"
                label="Camera"
                variant="outlined"
                fullWidth
                name="Camera"
                value={formData.Camera}
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="ram"
                label="Ram"
                variant="outlined"
                fullWidth
                name="Ram"
                value={formData.Ram}
                margin="normal"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="company"
                label="Company"
                variant="outlined"
                fullWidth
                name="Company"
                value={formData.Company}
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="madeIn"
                label="Made In"
                variant="outlined"
                fullWidth
                name="MadeIn"
                value={formData.MadeIn}
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="processor"
                label="Processor"
                variant="outlined"
                name="Proccessor"
                value={formData.Proccessor}
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="quantity"
                label="Quantity"
                variant="outlined"
                name="Quantity"
                value={formData.Quantity}
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="price"
                label="Price"
                variant="outlined"
                name="Price"
                value={formData.Price}
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <input
                style={{
                  padding: "15px",
                  border: "1px solid rgb(118, 118, 118)",
                  marginTop: "17px",
                }}
                onChange={handleImageChange}
                type="file"
               />
            </Grid>
          </Grid>
          <Button variant="outlined" onClick={onSubmit}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;