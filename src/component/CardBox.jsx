import * as React from 'react';
import BasicCard from './commonComponent/BasicCard';
// import CommonHeading from './commonComponent/CommonHeadding';
import  {Box , Stack } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DescriptionIcon from '@mui/icons-material/Description';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function CardBox() {
 

       
  
  // const data = ['M', 'T', 'W', 'T']

  return (
   
   
   <> 

{/* <Stack direction="row" spacing={1}>
                {data?.map((item, index) => {
                  return (
                    <>
                      {index == 0 || index == 5 ? (<BasicCard sx={{ bgcolor: '#E75480' }} variant="square">
                        {item}
                      </BasicCard>) : (<  BasicCard
                     
                      sx={{ bgcolor: '#EBF4FA' }} variant="square">
                        {item}
                      </BasicCard>)}

                    </>
                  )
                })}

              </Stack> */}
     <Stack
        direction="row" spacing={3}  >

          <Box >
          <BasicCard 
          name="Earing" 
          number="$198 K"
          sicon={<ArrowUpwardIcon sx={{ color:' green',fontSize: 15}} />}
          growth="37.8"
          content="Months"
           Icon={<CurrencyExchangeIcon  sx={{ color:' green',fontSize: 40}}/> }  
          
         
          
          />
     
          
          </Box>
          <Box >
          <BasicCard name="Order" 
          number="$2.5 K"
          sicon={<ArrowUpwardIcon sx={{ color:' green',fontSize: 15}} />}
          growth="37.8"
          content="Yearly "
                    Icon={<DescriptionIcon  sx={{ color:' #C45AEC   ',fontSize: 40}}/> }  

          />

          </Box>
          <Box>
          <BasicCard name="Balance" 
           number="2.6"
           sicon={<ArrowUpwardIcon sx={{ color:' green',fontSize: 15}} />}
           growth="37.8"
           content="Weekly"

                    Icon={<QueryStatsIcon sx={{ color:' #2B547E',fontSize: 40}} /> }  

          />
          
          </Box>
          <Box>
          <BasicCard 
          
          name="Balance" 
          number="$89.3K"
          sicon={<ArrowUpwardIcon sx={{ color:' green',fontSize: 15}} />}
          growth="37.8"
          content="Months"
          Icon={<BusinessCenterIcon sx={{ color:' #FF69B4',fontSize: 40}} /> }  

          />
          
          </Box>
        </Stack> 

</>
  );
}