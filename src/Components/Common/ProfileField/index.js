import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, Typography } from '@mui/material';
import axios from 'axios';

const Index = () => { // Changed component name to 'Index'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    zipCode: '',
    City: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const storedEmail = localStorage.getItem('userEmail');
            console.log("Email:", storedEmail);

            if (storedEmail) {
                // Sending email as a query parameter
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getUserByEmail`, {
                  email: storedEmail
                });

                console.log("Response:", response.data);  
                setFormData(response.data);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    fetchUserData();
}, []);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/updateUser`, formData);
      alert('Details saved successfully');
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Failed to save details');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={2}>
      <form onSubmit={handleSubmit}>
        <Card elevation={1} sx={{ padding: 3, margin: 2, borderRadius: "20px" }}>
          <CardHeader
            title={<Typography variant="h6" sx={{ fontWeight: "600", fontSize: "1.125rem", fontFamily: "Poppins-Regular" }}>Profile</Typography>}
            subheader={<Typography variant="body2" color="textSecondary">The information can be edited</Typography>}
          />
          <Divider />
          <CardContent>
            <Box display="flex" flexWrap="wrap" gap={3}>
              <TextField
                fullWidth
                required
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                fullWidth
                required
                label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                fullWidth
                required
                label="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                fullWidth
                label="Phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                fullWidth
                label="Zip Code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                sx={{ flex: '1 1 45%' }}
              />
              <TextField
                fullWidth
                label="City"
                name="City"
                value={formData.City}
                onChange={handleChange}
                sx={{ flex: '1 1 45%' }}
              />
            </Box>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained" sx={{ backgroundColor: "#4e36f5", borderRadius: "10px" }}>Save details</Button>
          </CardActions>
        </Card>
      </form>
    </Box>
  );
};

export default Index;
