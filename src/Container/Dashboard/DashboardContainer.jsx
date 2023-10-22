import React, { Component } from 'react'
import SidebarMenu from "../../component/SidebarMenu";
import CardBox from "../../component/CardBox";
import { Box, Card, Grid, Stack } from "@mui/material";
import SidebarChart from "../../Container/ChartContainer/SidebarChart";
import PieChart from "../../Container/ChartContainer/PieChart";

import CommonTable from "../../component/commonComponent/CommonTable";
import SerachBar from '../../component/commonComponent/SerachBar';
import CommonHeading from '../../component/commonComponent/CommonHeadding';

export default class DashboardContainer extends Component {
  render() {
    return (
<>

        <Stack direction={"row"}
        >
       <Box><SidebarMenu /></Box>

       
       <Box sx={{marginLeft:2}}>  
       <Box sx={{ flexGrow: 1 ,mt:1 }}>
             <Grid container spacing={2}>
               <Grid item xs={3}>
                 <Box  mt={2}>
       <CommonHeading Heading="Dashboard"  />
                  </Box>
               </Grid>
               <Grid item xs={6}>
                 <Box>
                 <SerachBar />

                  
                 </Box>
               </Grid>
               <Grid item xs={3}>
                 <Box mt={2}>
Hi User.!
                  
                 </Box>
               </Grid>
              
             </Grid>
           </Box>
       <CardBox /> 
       <Stack direction={"row"}>
         
       </Stack>
     
       <Box sx={{ flexGrow: 1 ,mt:4 }}>
             <Grid container spacing={2}>
               <Grid item xs={8}>
                 <Box>
       <Card> <SidebarChart /></Card>
                  </Box>
               </Grid>
               <Grid item xs={4}>
                 <Box>
                   <Card> <PieChart /></Card>
                  
                 </Box>
               </Grid>
              
              
             </Grid>
           </Box>
       <CommonTable 
       
       
       
                       Row1="Roll No"
                       Row2="Student Name"
                       Row3="Course"
                       Row4="Email Id"
                       Row5="Mobile No"
                       Row6=""
                        Row7="Action"
                       Cell1="001 "
                       Cell2="Chiku Upadhyay"
                       Cell3="B.Tech"
                       Cell4="chiku.up@gmail.com "
                       Cell5="9876543456"
                       //  Cell6="MP Bhopal"
       
                       // viewicon={<ViewStudent sx={{color:'rgb(127, 179, 213)'}} />}
                       // Editicon={<Link  style={{textDecoration:"none"}} to={'/editstudent'}><EditIcon sx={{color:'rgb(127, 179, 213)'}} /> </Link>}
                       // Disicon={<ResponsiveDialog Disable="Are You Sure Disable Student"  sx={{color:'rgb(127, 179, 213)'}}/>}
       
                       Cell11="002"
                       Cell12="Shivam Upadhyay"
                       Cell13="M.Tech"
                       Cell14="Shivam09@gmail.com"
                       Cell15="8717905467"
                       //  Cell16="MP Bhopal Zone 2"
                      
       
                       // viewicon1={<ViewStudent sx={{color:'rgb(127, 179, 213)'}} />}
                      
                      
                       // Editicon1={ <Link  style={{textDecoration:"none"}} to={'/editstudent'}><EditIcon sx={{color:'rgb(127, 179, 213)'}} />  </Link>}
                       // Disicon1={<ResponsiveDialog Disable="dgdgdg" sx={{color:'rgb(127, 179, 213)'}} />}
       
                       Cell21="003"
                       Cell22="Harshit Singh"
                       Cell23="BCA"
                       Cell24="harshit.king01@gmail.com"
                       Cell25="8717756546"
                       //  Cell16="MP Bhopal Zone 2"
                      
       
        />
       
       
       </Box>
        </Stack>
        </>
    )
  }
}
