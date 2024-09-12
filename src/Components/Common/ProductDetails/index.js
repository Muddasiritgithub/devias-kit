'use client';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Paper, Typography } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';

const columns = [
  { field: 'Name', headerName: 'Name', width: 150 },
  { field: 'Title', headerName: 'Title', width: 150 },
  { field: 'Price', headerName: 'Price', width: 250 },
  { field: 'Discription', headerName: 'Discription', width: 150 },
  { field: 'Model', headerName: 'Model', width: 150 },
  { field: 'Camera', headerName: 'Camera', width: 150 },
  { field: 'Ram', headerName: 'RAM', width: 150 },
  { field: 'Company', headerName: 'Company', width: 150 },
  { field: 'MadeIn', headerName: 'Made In', width: 150 },
  { field: 'Proccessor', headerName: 'Proccessor', width: 150 }, // Make sure field name matches
  { field: 'Quantity', headerName: 'Quantity', width: 150 },
  { 
    field: 'Image',   
    headerName: 'Image', 
    width: 150,
    renderCell: (params) => (
      <Image 
        src={params.value} 
        alt="Product" 
        width={50}
        height={50}
      />
    )
  },
];

function DataTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getAllProducts`);
        console.log('Muddasir:',response.data.data);
   
        // Check if response.data.products is an array
        if (Array.isArray(response.data.data)) {
          const transformedData = response.data.data.map((item) => ({
            id: item._id,
            Name: item.Name,
            Title: item.Title,
            Price: item.Price,
            Discription: item.Discription,
            Model: item.Model,
            Camera: item.Camera,
            Ram: item.Ram,
            Company: item.Company,
            MadeIn: item.MadeIn,
            Proccessor: item.Proccessor,
            Quantity: item.Quantity,
            Image: item.image
          }));
      console.log("Transformdata",transformedData)
          setRows(transformedData);
        } else {
          console.error('Expected an array for products, got:', typeof response.data.products);
          setError('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  console.log('Rows:', rows);  

  return (
    <Container>
      {error && <Typography color="error">{error}</Typography>}
      <Paper style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} loading={loading} />
      </Paper>
    </Container>
  );
}

export default DataTable;
