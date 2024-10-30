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
        overflow: 'hidden',
        flexDirection: 'row'
      }}
    >
      {/* Conditionally render Sidebar */}
      {!isIndexPage && (
        <Box
          sx={{
            width: '300px', // Set fixed width for Sidebar
            height: '100vh', // Ensure Sidebar takes full height
            position: 'fixed', // Fix Sidebar position
            overflowX: 'hidden' // Handle overflow within Sidebar
          }}
        >
          <Sidebar />
        </Box>
      )}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: !isIndexPage ? '300px' : 0, // Adjust margin for content
          padding: '20px',
          boxSizing: 'border-box',
          overflowX: 'auto', // Allow vertical scrolling for main content
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
