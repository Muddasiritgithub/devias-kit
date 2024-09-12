'use client'
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

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

const BasicModal = ({ open, handleClose, handleSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    image: null,
    email: "",
    phoneNumber: "",
    city: "",  
    zipCode: "",
    password: "",
  });

  // Log form data whenever it changes
  console.log("Form Data:", formData);

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
    console.log("Image File:", e.target.files[0]); // Log the selected image file
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    console.log("Form Data on Submit:", formData); // Log the form data on submit
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
                id="first name"
                label="First Name"
                name="firstName"
                value={formData.firstName}
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="last name"
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="phone number"
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phoneNumber"
                value={formData.phoneNumber}
                margin="normal"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="city"
                label="City"
                variant="outlined"
                fullWidth
                name="city"
                value={formData.city}
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="zip code"
                label="Zip Code"
                variant="outlined"
                fullWidth
                name="zipCode"
                value={formData.zipCode}
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
                name="password"
                value={formData.password}
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
