import React from "react";
import {
  Card,
  Box,
  InputBase,
  Badge,
  Tooltip,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import girl from "../../../../public/Images/girl.png";

const HeaderCard = () => {
  const theme = useTheme();

  return (
    <Card>
      <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
        {/* Left side: Search bar icon */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            fill={`rgba(0, 0, 0, 0.54)`} // Set fill color to rgba(0, 0, 0, 0.54)
            viewBox="0 0 256 256"
            style={{ marginRight: "8px" }} // Adjusting right margin for spacing
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
          </svg>
          <InputBase
             sx={{ ml: 1, flexGrow: 1 }}
          />
        </Box>

        {/* Right side: Icons and image */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          {/* Contact icon */}
          <Tooltip title="Contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              fill={`rgba(0, 0, 0, 0.54)`} // Set fill color to rgba(0, 0, 0, 0.54)
              viewBox="0 0 256 256"
              style={{ marginRight: "36px" }} 
            >
              <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
            </svg>
          </Tooltip>

          {/* Notification icon (active) */}
          <Badge color="secondary" variant="dot" style={{ marginRight: "26px" }} >
            <Tooltip title="Notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                fill={`rgba(0, 0, 0, 0.54)`} // Set fill color to rgba(0, 0, 0, 0.54)
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
              </svg>
            </Tooltip>
          </Badge>

          {/* Image */}
          <Image src={girl} width={60} height={60} style={{ borderRadius: "50%", marginLeft: "16px" }} />
        </Box>
      </Box>
    </Card>
  );
};

export default HeaderCard;
