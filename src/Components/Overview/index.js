import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardX from "../../../src/Components/Common/CardX"; // Adjust the path as needed
import Chart from "../../../src/Components/Common/Graph/Chart/index";
import PieChart from "../../../src/Components/Common/Graph/PieChart/index";
import LatestOrders from "../../../src/Components/Common/LatestOrders/index";
import LatestProducts from "../../../src/Components/Common/LatestProducts/index";
import { Box, Grid } from "@mui/material";

const Index = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    values: [12, 19, 3, 5, 2, 3],
    colors: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getAllUsers`);
        const transformedData = response.data.map((item) => ({
          id: item._id,
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
          phone: item.phoneNumber,
          city: item.City,
          zipCode: item.zipCode,
          image: item.Image
        }));
        setUserCount(transformedData.length); // Set the count of users
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getAllProducts`);
        console.log('Muddasir:', response.data.data);

        // Check if response.data.data is an array
        if (Array.isArray(response.data.data)) {
          const transformedData = response.data.data.map((item) => ({
            id: item._id,
            Name: item.Name,
            Title: item.Title,
            Price: item.Price,
            Description: item.Description, // Fixed typo
            Model: item.Model,
            Camera: item.Camera,
            Ram: item.Ram,
            Company: item.Company,
            MadeIn: item.MadeIn,
            Processor: item.Processor, // Fixed typo
            Quantity: item.Quantity,
            Image: item.Image
          }));
          setProductCount(transformedData.length); // Set the count of products
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchUserData();
    fetchProductData();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* First row: Cards */}
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardX
            title="Total Users"
            amount="$5,000"
            percentage="12"
            $="$"
            description="Since Last Month"
            count={userCount}
          />
        </Grid>
        <Grid item xs={3}>
          <CardX
            title="Total Customers"
            amount="$8,000"
            percentage="18"
            $="@"
            description="Since Last Month"
            count={productCount} // Changed to product count
          />
        </Grid>
        <Grid item xs={3}>
          <CardX
            title="Total Revenue"
            amount="$2,000"
            percentage="5"
            $="#"
            description="Since Last Month"
            count={0} // Placeholder or actual count if needed
          />
        </Grid>
        <Grid item xs={3}>
          <CardX
            title="Total Profit"
            amount="$6,000"
            percentage="20"
            $="%"
            description="Since Last Month"
            count={0} // Placeholder or actual count if needed
          />
        </Grid>
      </Grid>

      {/* Second row: Pie Charts */}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Chart />
        </Grid>
        <Grid item xs={4}>
          <PieChart data={chartData} />
        </Grid>
      </Grid>

      {/* Third row: Latest Orders */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <LatestOrders />
        </Grid>
        <Grid item xs={8}>
          <LatestOrders />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
