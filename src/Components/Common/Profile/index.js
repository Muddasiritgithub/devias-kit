import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import axios from 'axios';
import girl from '../../../../public/Images/girl.png'; // Default image path

const CustomCard = ({ name, description, text, uploadLink, image }) => {
  return (
    <Card sx={{ maxWidth: 315, marginBottom: '20px', textAlign: "center", padding: "12px 0px", borderRadius: "20px" }}>
      <div style={{ borderRadius: '50%', overflow: 'hidden', width: '80px', height: '80px', margin: 'auto' }}>
        <Image src={image} width={80} height={80} style={{ borderRadius: '50%' }} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "500", fontSize: "1.5rem", fontFamily: "Poppins-Regular", marginBottom: '8px' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>
          {text}
        </Typography>
      </CardContent>
      <Divider />
      <Button href={uploadLink} sx={{ textTransform: 'none', marginTop: '8px', padding: "0px 100px", color: "#635bff", fontWeight: "500", fontSize: "1rem", fontFamily: "Poppins-Medium" }}>
        Upload Picture
      </Button>
    </Card>
  );
};

const Index = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    description: '',
    image: girl, // Default image
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Local storage se email lein
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
          // API call se user data fetch karein
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getUserByEmail`, {
            email: storedEmail
          });

          // State update karein
          setProfileData({
            name: `${response.data.firstName}`,
            description: response.data.City || '', // Default to empty string if city is not available
            image: response.data.Image || girl, // Default image if not available
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div style={{ padding: "20px 0px" }}>
      <CustomCard
        name={profileData.name}
        description={profileData.description}
        text="GTM-7"  
        uploadLink="#"
        image={profileData.image}
      />
    </div>
  );
};

export default Index;
