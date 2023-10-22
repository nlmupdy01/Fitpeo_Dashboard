import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
import { Container, InputAdornment} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SerachBar() {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  return (
    <>


      <Stack direction="row" spacing={2} sx={{marginTop:'10px',marginBottom:'20px' }} >
       
       
      
         
        
        
         
        <Box> 
        <Container maxWidth="md" sx={{ }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        size="small"

        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 300 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon  sx={{color:'#7FB3D5',fontSize:'28px'}}/>
            </InputAdornment>
          ),
        }}
      />
    </Container>
        </Box>
        
      </Stack>
    </>
  );
}