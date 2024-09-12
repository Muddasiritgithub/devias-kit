import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Paper } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';  

const columns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'phone', headerName: 'Phone Number', width: 150 },
  { field: 'city', headerName: 'City', width: 150 },
  { field: 'zipCode', headerName: 'Zip Code', width: 150 },
  { 
    field: 'image', 
    headerName: 'Image', 
    width: 150,
    renderCell: (params) => (
      <Image 
      src={params.value}
      alt="User" 
      width={30}
      height={50}
       />
    )
  },
];

function DataTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getAllUsers`);
        // Transform the data to include an 'id' field using '_id'
        const transformedData = response.data.map((item) => ({
          id: item._id, // Use '_id' as 'id' for DataGrid
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
          phone: item.phoneNumber,
          city: item.City,
          zipCode: item.zipCode,
          image: item.Image // Ensure this matches your API response field name
        }));
        setRows(transformedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Paper style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} loading={loading} />
      </Paper>
    </Container>
  );
}

export default DataTable;
