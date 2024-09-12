'use client';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  TextField,
  Stack,
  Typography,
  Alert,
} from '@mui/material';
import axios from 'axios';

const Index = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Fetch user email from local storage or other source
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    } else {
      setMessage('User email is not available.');
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if (password.trim() === confirmPassword.trim()) {
      try {

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/UpdatePassword`, {
          email: userEmail, // Make sure to include the email field
          newPassword: password,
        });
        console.log('Response data:', response.data);

        setMessage('Password updated successfully!');
        alert('Password updated successfully!');
      } catch (error) {
        if (error.response) {
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
          setMessage('Failed to update password: ' + (error.response.data.message || 'Unknown error'));
        } else if (error.request) {
          console.error('Error request:', error.request);
          setMessage('Failed to update password: No response from server');
        } else {
          console.error('Error message:', error.message);
          setMessage('Failed to update password: ' + error.message);
        }
        alert('Failed to update password!');
      }
    } else {
      setMessage('Passwords do not match!');
      alert('Passwords do not match!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card
        sx={{
          borderRadius: '20px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          margin: '0 20px',
          padding: '20px',
          overflow: 'hidden',
        }}
        variant="outlined"
      >
        <CardHeader
          title={
            <Typography
              variant="h6"
              sx={{
                fontWeight: '500',
                fontSize: '1.125rem',
                lineHeight: '1.2',
                fontFamily: 'Poppins-Medium',
              }}
            >
              Password
            </Typography>
          }
          subheader={<Typography variant="body2">Update password</Typography>}
        />
        <Divider />
        <CardContent>
          <Stack spacing={2}>
          {/* <TextField
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              InputProps={{ sx: { borderRadius: '12px' } }}
              sx={{ width: '100%', maxWidth: '600px' }}
            /> */}
            <TextField
              label="New Password"
              type="password"
              variant="outlined"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{ sx: { borderRadius: '12px' } }}
              sx={{ width: '100%', maxWidth: '600px' }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{ sx: { borderRadius: '12px' } }}
              sx={{ width: '100%', maxWidth: '600px' }}
            />
          </Stack>
          {message && <Alert severity={password.trim() === confirmPassword.trim() ? 'success' : 'error'}>{message}</Alert>}
        </CardContent>
        <Divider sx={{ width: '100%' }} />
        <div style={{ padding: '16px', textAlign: 'right' }}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: '#635bff',
              borderRadius: '12px',
              padding: '8px 20px',
              minWidth: '64px',
              height: '50px',
              fontWeight: '500',
              fontSize: '0.875rem',
              fontFamily: 'Poppins-Medium',
            }}
            size="medium"
          >
            Update
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default Index;
