import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  Grid,
} from '@mui/material';

const Index = () => {
  return (
    <Card sx={{ borderRadius: "20px", boxShadow: '0 0 10px rgba(0,0,0,0.1)', margin: '0 20px' }}>
      <CardHeader
        title={<Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1.125rem", lineHeight: "1.2", fontFamily: "Poppins-Medium" }}>Notifications</Typography>}
        subheader={<Typography variant="body2">Manage the notifications</Typography>}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}> {/* Adjusted spacing for responsiveness */}
          <Grid item lg={4} md={6} xs={12}> {/* Adjusted item sizes for responsiveness */}
            <div>
              <Typography variant="h6">Email</Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked color="primary" />}
                  label="Product updates"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Security updates"
                />
              </FormGroup>
            </div>
          </Grid>
          <Grid item lg={4} md={6} xs={12}> {/* Adjusted item sizes for responsiveness */}
            <div>
              <Typography variant="h6">Phone</Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked color="primary" />}
                  label="Email"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Security updates"
                />
              </FormGroup>
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <div style={{ padding: '16px', textAlign: 'right' }}>
        <Button variant="contained" sx={{
          backgroundColor: "#635bff",
          borderRadius: "12px",
          padding: "8px 20px",
          minWidth: "64px",
          height: "50px",
          fontWeight: "500",
          fontSize: "0.875rem",
          fontFamily: "Poppins-Medium"
        }} size="medium">Save changes</Button>
      </div>
    </Card>
  );
};

export default Index;
