import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const SimpleCard = ({ title, count,  $ }) => {
  return (
    <Card sx={{ width: 180, margin: '20px auto', padding: '20px', borderRadius: '20px' }}>
      <CardContent sx={{ padding: '16px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <Typography variant="h6" component="div" sx={{ color: '#667085', fontWeight: '500', fontSize: '0.75rem', fontFamily: 'Poppins-Regular' }}>
            {title}
          </Typography>
          <Avatar sx={{ bgcolor: '#635bff', height: '56px', width: '56px' }}>{$}</Avatar>
        </Box>
        <Typography variant="h4" component="div" sx={{ fontWeight: '500', fontSize: '2rem', fontFamily: 'Poppins-Medium', marginBottom: '8px' }}>
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
