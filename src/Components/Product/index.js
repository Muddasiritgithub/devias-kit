"use client";
import React, { useState } from "react";
import { Box, Typography, Button, IconButton, InputBase } from "@mui/material";
import {
  Add as AddIcon,
  ImportExport as ImportExportIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import ProductDetails from "../../../src/Components/Common/ProductDetails/index.js";
import Modal from "../../../src/Components/Common/Modal/index.js";
import axios from "axios";
import AddCategoryModel from "../../../src/Components/Common/AddCategoryModal/index.js";

const Index = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryModelOpen, setCategoryModelOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleOpenModalCategory = () => setCategoryModelOpen(true);
  const handleCloseModalCategory = () => setCategoryModelOpen(false);

  const handleSubmit = async (formData) => {
    console.log("formdata", formData);
    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("Title", formData.Title);
    data.append("image", formData.image);
    data.append("Price", formData.Price);
    data.append("Discription", formData.Discription);
    data.append("Model", formData.Model);
    data.append("Camera", formData.Camera);
    data.append("Ram", formData.Ram);
    data.append("Company", formData.Company);
    data.append("MadeIn", formData.MadeIn);
    data.append("Proccessor", formData.Proccessor);
    data.append("Quantity", formData.Quantity);
    data.append("Category", formData.Category);
    data.append("SubCategory", formData.SubCategory);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products/createProduct`,
        data
      );
      console.log("Response:", response.data.data);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };
  const handleCategorySubmit = async (formData) => {
    console.log("formdata", formData);
    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("image", formData.image);
    data.append("Discription", formData.Discription);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/category/createCategory`,
        data
      );
      console.log("Response:", response.data.data);
    } catch (error) {
      console.error("Error uploading data:", error);
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
          Product
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#635bff" }}
          startIcon={<AddIcon />}
          onClick={handleOpenModal} // Open modal on click
        >
          Add
        </Button>
      </Box>

      {/* Import and Export buttons with icons */}
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

      {/* Search bar inside a styled box */}
      <Box
        sx={{
          borderRadius: "20px",
          padding: "16px",
          background: "white",
          marginBottom: "16px",
          boxShadow:
            "rgba(0, 0, 0, 0.04) 0px 5px 22px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            fontWeight: "400",
            fontSize: "1rem",
            boxSizing: "border-box",
            cursor: "text",
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
        <Button
          variant="contained"
          onClick={handleOpenModal}
          sx={{ width: "auto", height: "35px" }}
        >
          Add Product
        </Button>
        <Button
          variant="contained"
          onClick={handleOpenModalCategory}
          sx={{ width: "auto", height: "35px" }}
        >
          Add Category
        </Button>
        <AddCategoryModel
          open={categoryModelOpen}
          handleClose={handleCloseModalCategory}
          handleSubmit={handleCategorySubmit}
        />
        {/* Modal Component */}
        <Modal
          open={modalOpen}
          handleClose={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      </Box>
      <Box>
        <ProductDetails />
      </Box>
    </Box>
  );
};

export default Index;
