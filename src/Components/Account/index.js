import React from 'react';
import Profile from '../../../src/Components/Common/Profile/index';
import ProfileField from '../../../src/Components/Common/ProfileField/index';
import { Box, Typography } from '@mui/material';

const Index = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: '500',
          fontSize: '2rem',
          fontFamily: 'Poppins-Medium',
          padding: '20px', // Adding padding to the heading for spacing
        }}
      >
        Account
      </Typography>

      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <div style={{  marginRight: '10px' }}>
          <Profile />
        </div>
        <div style={{marginLeft: '10px' }}>
          <ProfileField />
        </div>
      </Box>
    </Box>
  );
};

export default Index;
