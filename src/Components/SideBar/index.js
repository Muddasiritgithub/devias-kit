import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import overviewwhite from '../../../public/Images/overviewwhite.svg';
import overviewblack from '../../../public/Images/overviewblack.svg';
import settingwhite from '../../../public/Images/settingwhite.svg';
import settingblack from '../../../public/Images/settingblack.svg';
import integarationwhite from '../../../public/Images/integarationwhite.svg';
import integarationblack from '../../../public/Images/integarationblack.svg';
import customerwhite from '../../../public/Images/customerwhite.svg';
import customerblack from '../../../public/Images/customerblack.svg';
import accountwhite from '../../../public/Images/accountwhite.svg';
import accountblack from '../../../public/Images/accountblack.svg';
import errorwhite from '../../../public/Images/errorwhite.svg';
import errorblack from '../../../public/Images/errorblack.svg';
import logo from '../../../public/Images/logo.png';
import Divider from '@mui/material/Divider';
import deviaskitpro from '../../../public/Images/deviaskitpro.png'

function Sidebar() {
  const path = usePathname();

  const selectedStyle = {
    backgroundColor: '#635bff',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#635bff',
    },
  };

  const nonSelectedStyle = {
    backgroundColor: 'transparent',
    color: 'black', 
    '&:hover': {
      backgroundColor: '#fafaf7',
    },
  };

  return (
    <Card variant="outlined" sx={{ width: 300, paddingBottom: '50px', backgroundColor: '#a1a1a1',position:"fixed",top:0,left:0,right:0,  }}>
      <Box>
        <Box sx={{ paddingLeft: '20px', marginBottom: '40px', marginTop: '20px',   justifyContent: 'center', }}>
          <Image src={logo} width={130} height={35} alt="Logo" />
        </Box>
        <List>
          <Link href="/HoverviewLayout" passHref style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  ...((path === '/HoverviewLayout') ? selectedStyle : nonSelectedStyle),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                }}
              >
                <Image
                  src={path === '/HoverviewLayout' ? overviewwhite : overviewblack}
                  width="32"
                  height="28"
                  alt="Overview Icon"
                />
                <ListItemText
                  primary="Overview"
                  primaryTypographyProps={{
                    style: {
                      color: path === '/HoverviewLayout' ? '#FFFFFF' : 'black',  // Updated text color before selection
                      fontFamily: 'Livvic-Medium',
                      fontSize: '16px',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/CustomerLayout" passHref style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  ...((path === '/CustomerLayout') ? selectedStyle : nonSelectedStyle),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                }}
              >
                <Image
                  src={path === '/CustomerLayout' ? customerwhite : customerblack}
                  width="32"
                  height="28"
                  alt="Customer Icon"
                />
                <ListItemText
                  primary="Customer"
                  primaryTypographyProps={{
                    style: {
                      color: path === '/CustomerLayout' ? '#FFFFFF' : 'black',  // Updated text color before selection
                      fontFamily: 'Livvic-Medium',
                      fontSize: '16px',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/ProductLayout" passHref style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  ...((path === '/ProductLayout') ? selectedStyle : nonSelectedStyle),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                }}
              >
                <Image
                  src={path === '/ProductLayout' ? customerwhite : customerblack}
                  width="32"
                  height="28"
                  alt="Customer Icon"
                />
                <ListItemText
                  primary="Product"
                  primaryTypographyProps={{
                    style: {
                      color: path === '/ProductLayout' ? '#FFFFFF' : 'black',  // Updated text color before selection
                      fontFamily: 'Livvic-Medium',
                      fontSize: '16px',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/IntegrateLayout" passHref style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  ...((path === '/IntegrateLayout') ? selectedStyle : nonSelectedStyle),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                }}
              >
                <Image
                  src={path === '/IntegrateLayout' ? integarationwhite : integarationblack}
                  width="32"
                  height="28"
                  alt="Integration Icon"
                />
                <ListItemText
                  primary="Integration"
                  primaryTypographyProps={{
                    style: {
                      color: path === '/IntegrateLayout' ? '#FFFFFF' : 'black',  // Updated text color before selection
                      fontFamily: 'Livvic-Medium',
                      fontSize: '16px',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/AccountLayout" passHref style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  ...((path === '/AccountLayout') ? selectedStyle : nonSelectedStyle),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                }}
              >
                <Image
                  src={path === '/AccountLayout' ? accountwhite : accountblack}
                  width="32"
                  height="28"
                  alt="Account Icon"
                />
                <ListItemText
                  primary="Account"
                  primaryTypographyProps={{
                    style: {
                      color: path === '/AccountLayout' ? '#FFFFFF' : 'black',  // Updated text color before selection
                      fontFamily: 'Livvic-Medium',
                      fontSize: '16px',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/SettingLayout" passHref style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  ...((path === '/SettingLayout') ? selectedStyle : nonSelectedStyle),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                }}
              >
                <Image
                  src={path === '/SettingLayout' ? settingwhite : settingblack}
                  width="32"
                  height="28"
                  alt="Settings Icon"
                />
                <ListItemText
                  primary="Settings"
                  primaryTypographyProps={{
                    style: {
                      color: path === '/SettingLayout' ? '#FFFFFF' : 'black',  // Updated text color before selection
                      fontFamily: 'Livvic-Medium',
                      fontSize: '16px',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/ErrorLayout" passHref style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  ...((path === '/ErrorLayout') ? selectedStyle : nonSelectedStyle),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                }}
              >
                <Image
                  src={path === '/ErrorLayout' ? errorwhite : errorblack}
                  width="32"
                  height="28"
                  alt="Error Icon"
                />
                <ListItemText
                  primary="Error"
                  primaryTypographyProps={{
                    style: {
                      color: path === '/ErrorLayout' ? '#FFFFFF' : 'black',  // Updated text color before selection
                      fontFamily: 'Livvic-Medium',
                      fontSize: '16px',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px',padding:"20px" }}>
      <Typography sx={{ color: 'white' }}>Need more features?</Typography>
      <Typography sx={{ color: '#8a94a6' }}>Check out our Pro solution template.</Typography>
      <Image src={deviaskitpro} alt='image' width={200} height={200} />
    </Box>
    </Box>
    </Card>
  );
}

export default Sidebar;
