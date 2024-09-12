import React from 'react';
import Card from '../../../src/Components/Common/Card/index';
import { Box, Typography, Button, IconButton, InputBase, Grid, Pagination } from '@mui/material'; // Import Pagination from Material-UI
import { Add as AddIcon, ImportExport as ImportExportIcon, Search as SearchIcon } from "@mui/icons-material";
import logodropbox from '../../../public/Images/logodropbox.png';
import logogithub from '../../../public/Images/logogithub.png';
import logolyft from '../../../public/Images/logolyft.png';
import logoslack from '../../../public/Images/logoslack.png';
import logosquarespace from '../../../public/Images/logosquarespace.png';
import logomedium from '../../../public/Images/logomedium.png';

const Index = () => {
  // Define an array of card data with different props
  const cardData = [
    { title: 'DropBox New', content: 'New content for Dropbox.', image: logodropbox },
    { title: 'Medium New', content: 'New content for Medium.', image: logomedium },
    { title: 'Slack New', content: 'New content for Slack.', image: logoslack },
    { title: 'Lyft New', content: 'New content for Lyft.', image: logolyft },
    { title: 'GitHub New', content: 'New content for GitHub.', image: logogithub },
    { title: 'Squarespace New', content: 'New content for Squarespace.', image: logosquarespace },
    // Add more cards as needed
  ];

  return (
    <Box>
      {/* Title and Add button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: '500',
            fontSize: '2rem',
            fontFamily: 'Poppins-Medium',
          }}
        >
          Integration
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#635bff' }}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Box>

      {/* Import and Export buttons */}
      <Box sx={{ marginBottom: '5px' }}>
        <IconButton>
          <ImportExportIcon style={{ color: 'black' }} />
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '0.875rem',
              fontFamily: 'Poppins-Medium',
              color: 'black',
            }}
          >
            Import
          </Typography>
        </IconButton>
        <IconButton>
          <ImportExportIcon style={{ color: 'black' }} />
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '0.875rem',
              fontFamily: 'Poppins-Medium',
              color: 'black',
            }}
          >
            Export
          </Typography>
        </IconButton>
      </Box>

      {/* Search bar */}
      <Box
        sx={{
          borderRadius: '20px',
          padding: '16px',
          background: 'white',
          marginBottom: '16px',
          boxShadow:
            'rgba(0, 0, 0, 0.04) 0px 5px 22px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            border: '2px solid #635bff',
            height: '60px',
            maxWidth: '500px',
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search Customer"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ ml: 1, flex: 1 }}
          />
        </Box>
      </Box>

      {/* Displaying cards in a grid */}
      <Grid container spacing={3}>
        {cardData.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              title={data.title}
              content={data.content}
              image={data.image}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <Pagination count={3} color="secondary" />
      </Box>
    </Box>
  );
};

export default Index;
