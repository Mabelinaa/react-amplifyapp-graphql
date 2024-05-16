import React from 'react'
import SideNav from '../components/SideNav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { withAuthenticator } from '@aws-amplify/ui-react';

import Test from '../components/Test';

function List({signOut}) {
  return (
    <>
      <Box sx={{display: 'flex'}}>
        <SideNav signOut={signOut}/>
        <Box component="main" sx={{flexGrow:1,p:3,marginTop:"55px"}}>
          <Typography variant='h4'>
            <Test></Test>
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default withAuthenticator(List);