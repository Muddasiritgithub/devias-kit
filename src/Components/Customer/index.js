import React, { useState } from "react";
import { Box, Typography, Button, IconButton, InputBase } from "@mui/material";
import { Add as AddIcon, ImportExport as ImportExportIcon, Search as SearchIcon } from "@mui/icons-material";
import EmailList from "../../../src/Components/Common/EmailList/index"; // Adjust the path as per your project structure
import CustomerModal from "../../../src/Components/Common/CustomerModal/index";
import axios from "axios";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Handle Submit for Modal Form Data
  const handleSubmit = async (formData) => {
    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("image", formData.image); // Ensure this is a File object (image file)
    data.append("phoneNumber", formData.phoneNumber);
    data.append("city", formData.city); // Ensure consistent field name casing
    data.append("zipCode", formData.zipCode);
    data.append("password", formData.password);
    data.append("email", formData.email);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/register`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error(
        "Error uploading data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "500",
            fontSize: "2rem",
            fontFamily: "Poppins-Medium",
          }}
        >
          Customer
        </Typography>
      </Box>

      {/* Import and Export buttons */}
      <Box sx={{ alignItems: "center", marginBottom: "16px" }}>
        <IconButton>
          <ImportExportIcon style={{ color: "black" }} />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "0.875rem",
              fontFamily: "Poppins-Medium",
              color: "black",
            }}
          >
            Import
          </Typography>
        </IconButton>
        <IconButton>
          <ImportExportIcon style={{ color: "black" }} />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "0.875rem",
              fontFamily: "Poppins-Medium",
              color: "black",
            }}
          >
            Export
          </Typography>
        </IconButton>
      </Box>

      {/* Search bar */}
      <Box
        sx={{
          borderRadius: "20px",
          padding: "16px",
          background: "white",
          marginBottom: "16px",
          boxShadow:
            "rgba(0, 0, 0, 0.04) 0px 5px 22px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            fontWeight: "400",
            fontSize: "1rem",
            boxSizing: "border-box",
            display: "inline-flex",
            alignItems: "center",
            width: "100%",
            position: "relative",
            borderRadius: "8px",
            paddingLeft: "14px",
            maxWidth: "500px",
            border: "2px solid #635bff",
            height: "60px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search Product"
            inputProps={{ "aria-label": "search" }}
            sx={{ ml: 1, flex: 1 }}
          />
        </Box>

        {/* Add Customer Button */}
        <Button
          sx={{ width: "104px", height: "47px", backgroundColor: "red" }}
          variant="contained"
          onClick={handleOpenModal}
        >
          Add Customer
        </Button>
      </Box>

      {/* Modal to add customer */}
      <CustomerModal
        open={modalOpen}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
      />

      {/* Email list display */}
      <Box>
        <EmailList />
      </Box>
    </Box>
  );
};

export default Index;
