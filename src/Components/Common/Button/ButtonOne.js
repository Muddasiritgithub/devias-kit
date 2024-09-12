import React from 'react'
import {Button} from '@mui/material';
 
const ButtonOne =({
   handleSubmit, btnText

})=> {
  return (
   <Button
   type="button"
   variant="contained"
   onClick={handleSubmit}
   sx={{
    width:"100%",
    height:"48px",
    borderRadius:"15px",
     fontFamily:"Poppins-Regular",
    color:"#ffffff",
    textTransform:"capitalize",
    backgroundColor:"#635bff"
}}
   >
{btnText}
    </Button>
  )
}

export default ButtonOne