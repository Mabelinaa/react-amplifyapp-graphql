import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import SideNav from '../components/SideNav';
import Content from '../components/Content';

const Dashboard = ({ signOut }) => {
  console.log("Dashboard component mounted");

  return (
    <>
      <Box sx={{display: 'flex'}}>
        <SideNav signOut={signOut}/>
        <Box component="main" sx={{flexGrow:1,p:3,marginTop:"55px"}}>
          <Typography variant='h4'>
            <Content/>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default withAuthenticator(Dashboard);
