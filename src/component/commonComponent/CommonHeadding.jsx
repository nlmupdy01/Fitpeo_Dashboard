
import * as React from "react";
import PropTypes from "prop-types";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function CommonHeading(props) {


CommonHeading.propTypes = {
    HeadingIcon: PropTypes.element
  };
  return (
    
     
    <Stack direction="row" spacing={5} sx={{}}>
             
    <Box sx={{width:'60%' ,marginTop:'10px'}}>  
      <Typography>
        {props.HeadingIcon}
        {props.Heading}
        </Typography></Box>
      
  
    
 </Stack>

  );
}

export default CommonHeading;
