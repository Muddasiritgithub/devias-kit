import React from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../../pages/SidebarLayout/index';  
import Box from '@mui/material/Box';

const Layout = ({ children }) => {
  const router = useRouter();
  const isIndexPage = router.pathname === '/'; 

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        height: '100vh', 
        overflow: 'hidden' 
      }}
    >
      {!isIndexPage && <Sidebar />}  
      <Box
        sx={{
          flexGrow: 1,
          padding: '20px',
          marginLeft: isIndexPage ? 0 : '300px',
          boxSizing: 'border-box',
          overflowX: 'hidden', // Allow vertical scrolling if content exceeds viewport height
        }}
      >
        <Box
          sx={{
            paddingBottom: '20px', // Adds space at the bottom of the content
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
