import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import { Avatar, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';



export default function BasicCard(props) {

    BasicCard.propTypes = {
        statusImage: PropTypes.element,
        statusImage2: PropTypes.element
      };

  return (
    
    
    <Card sx={{ minWidth: 225 }} >
      <Stack direction="row" spacing={1}>
        <Box>  <CardActions>  
      <IconButton aria-label="share">
          {props.Icon}
        </IconButton>

      </CardActions></Box>
    <Box>
      <CardContent>
      <Typography variant="" component="div" sx={{ fontSize: 14 ,color:'#838996' }}>
      
        {props.name}
        </Typography>
        <Typography sx={{ fontSize: 16,fontWeight:5  , fontWeight: 'bold' }}  variant='h1' >    
            {props.number} 

        </Typography>
      {/* <Typography variant="" component="div" sx={{ fontSize: 14 ,color:'#838996' }}>
        <IconButton aria-label="">
          {props.sicon }
        </IconButton>
        {props.content}
        </Typography> */}
      </CardContent>
      <Grid container sx={{ color: 'text.primary', mb:2 }}>
     
      <Grid item xs={3}>
        
      {props.sicon}
       
      </Grid>
      <Grid item >
      <Typography variant="" component="div" sx={{ fontSize: 12 ,color:'green' }}>{props.growth}</Typography>
        </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontSize: 10 ,color:'#838996' }}> {props.content}</Typography>
      </Grid>
      </Grid>
       {/* <Avatar img={props.img} />      */}
       </Box>
      </Stack>
      
    </Card>
   
  );
}