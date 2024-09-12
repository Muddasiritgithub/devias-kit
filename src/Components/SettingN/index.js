import React from 'react';
import Notification from '../../../src/Components/Common/Notification/index';
import Password from '../../../src/Components/Common/Password/index';
import { Typography } from '@mui/material';

const Index = () => {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          fontWeight: '500',
          fontSize: '2rem',
          fontFamily: 'Poppins-Medium',
          paddingTop:"30px",
          paddingLeft:"30px",
          paddingBottom:"30px" // Adding margin at the bottom of the heading
        }}
      >
        Setting
      </Typography>
      <div style={{ marginBottom: '40px' }}> {/* Adding margin between components */}
        <Notification />
      </div>
      <Password />
    </div>
  );
};

export default Index;
