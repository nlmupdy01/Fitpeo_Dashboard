import { useState,  } from 'react';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
import PropTypes from "prop-types";


const CommonTable = (props) => {
  const [facilitiesCount] = useState(0);
  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 10
  });



  const handlePageChange = (event, newPage) => {
    setController({
      ...controller,
      page: newPage
    });
  };

  const handleChangeRowsPerPage = (event) => {
    setController({
      ...controller,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0
    });
  };

  CommonTable.propTypes = {
    viewicon: PropTypes.element,
    Editicon: PropTypes.element,
    Disicon: PropTypes.element
  };

  return (
    <>
   
    <Card sx={{marginTop:'20px'}} >
      <Table >
        <TableHead >
          <TableRow >
            <TableCell >
              <Typography  fontSize={'15px'} sx={{fontWeight:550}}>
              {props.Row1}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography	 fontSize={'15px'} sx={{fontWeight:550}}>
              {props.Row2}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography	 fontSize={'15px'} sx={{fontWeight:550}}>
              {props.Row3}
              </Typography>
            </TableCell>
          
            <TableCell>
              <Typography	 fontSize={'15px'} sx={{fontWeight:550}}>
              {props.Row4}
              </Typography>
            </TableCell>
            {/* <TableCell>
              Name
            </TableCell> */}
            
             
            <TableCell>
              <Typography align='center'   fontSize={'18px'} sx={{fontWeight:550}}	>
              {props.Row5}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align='center'   fontSize={'18px'} sx={{fontWeight:550}}	>
              {props.Row6}
              </Typography>
            </TableCell>
            {/* <TableCell>
              <Typography align='center'   fontSize={'18px'} sx={{fontWeight:550}}	>
              {props.Row7}
              </Typography>
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {facilitiesList.map((passenger) => ( */}
            {/* <TableRow key={passenger._id}> */}
            <TableRow >
                <TableCell>
                {/* {passenger._id} */}
                <Typography> {props.Cell1}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.name} */}
                <Typography> {props.Cell2}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.trips} */}
                <Typography> {props.Cell3}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.trips} */}
                <Typography> {props.Cell4}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.trips} */}
                <Typography> {props.Cell5}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.trips} */}
                <Typography> {props.Cell6}</Typography>
              </TableCell>
           
              
              {/* <TableCell>
              
                
            
                <Box> <Button size="small" > {props.viewicon}</Button>
             
             <Button size="small">   {props.Editicon}</Button>
             <Button size="small">  {props.Disicon}</Button>
             </Box>
              </TableCell> */}
              
             
              <TableCell>
                 {/* <Box> <Button size="small"><AttendancelogView sx={{color:'#7FB3D5	'}} /></Button>
        <Button size="small">
        <AttendencelogEdit sx={{color:'#7FB3D5	'}} /> </Button>
        <Button size="small"> 
       <AttendancelogDisable />
         </Button>
        </Box>  */}
              </TableCell>

              {/* <TableCell>
                {passenger.trips}
              </TableCell> */}
             
            </TableRow>
          {/* ))} */}
        </TableBody>
        <TableBody>
          {/* {facilitiesList.map((passenger) => ( */}
            {/* <TableRow key={passenger._id}> */}
            <TableRow >
                <TableCell>
                {/* {passenger._id} */}
                <Typography>{props.Cell11}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.name} */}
                <Typography>{props.Cell12}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.trips} */}
                <Typography>{props.Cell13}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.name} */}
                <Typography>{props.Cell14}</Typography>
              </TableCell>
             
              <TableCell>
                {/* {passenger.name} */}
                <Typography>{props.Cell15}</Typography>
              </TableCell>
             
              <TableCell>
                {/* {passenger.name} */}
                <Typography>{props.Cell16}</Typography>
              </TableCell>
           
             
{/*              
              <TableCell >
                
              <Box  > <Button size="small"> {props.viewicon1}</Button>
             
             <Button size="small">   {props.Editicon1}</Button>
             <Button size="small">  {props.Disicon1}</Button>
             </Box>
              </TableCell> */}

              {/* <TableCell>
                {passenger.trips}
              </TableCell> */}
             
            </TableRow>

            <TableRow >
                <TableCell>
                {/* {passenger._id} */}
                <Typography>{props.Cell21}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.name} */}
                <Typography>{props.Cell22}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.trips} */}
                <Typography>{props.Cell23}</Typography>
              </TableCell>
              <TableCell>
                {/* {passenger.name} */}
                <Typography>{props.Cell24}</Typography>
              </TableCell>
             
              <TableCell>
                {/* {passenger.name} */}
                <Typography>{props.Cell25}</Typography>
              </TableCell>
             
              <TableCell>
                {/* {passenger.name} */}
                <Typography>{props.Cell26}</Typography>
              </TableCell>
           
             
             
              {/* <TableCell >
                
              <Box  > <Button size="small"> {props.viewicon1}</Button>
             
             <Button size="small">   {props.Editicon1}</Button>
             <Button size="small">  {props.Disicon1}</Button>
             </Box>
              </TableCell> */}

              {/* <TableCell>
                {passenger.trips}
              </TableCell> */}
             
            </TableRow>
          {/* ))} */}
        </TableBody>
       
      </Table>
      <TablePagination
        component="div"
        onPageChange={handlePageChange}
        page={controller.page}
        count={facilitiesCount}
        rowsPerPage={controller.rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
    </>
  )
}

export default CommonTable;