import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import Image from "next/image";
import logodropbox from '../../../../public/Images/logodropbox.png';

const SimpleCard = ({}) => {
  return (
    <Card variant="outlined" sx={{ padding: "32px 24px", borderRadius: "25px", width: 250, margin: "20px auto", textAlign: "center", border: "1px solid #e0e0e0" }}>
      <Image src={logodropbox} width={40} height={40} />
      <>
        <Typography variant="h5" component="div" gutterBottom sx={{fontWeight:"500",fontSize:"1.5rem",fontFamily:"Poppins-Medium"}}>
          DropBox
        </Typography>
        <Typography variant="body2"  sx={{fontWeight:"400",fontSize:"1rem",fontFamily:"Poppins-Regular"}}>
          Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.
        </Typography>
      </>
      <Divider sx={{ width: "819px", margin: "0 auto", marginTop: "16px", marginBottom: "16px", marginLeft: "-444px" }} />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
              sx={{ fontSize: "var(--icon-fontSize-sm)" }}
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "var(--icon-fontSize-sm)", marginLeft: "8px" }}>
              Updated Mar 8, 2024
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
              sx={{ fontSize: "var(--icon-fontSize-sm)" }}
            >
              <path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Zm-117.66-2.34a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,108.69V24a8,8,0,0,0-16,0v84.69L85.66,74.34A8,8,0,0,0,74.34,85.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"></path>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "var(--icon-fontSize-sm)", marginLeft: "8px" }}>
              594 installs
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
