import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import SideBar from '../components/courses/Sidebar';
import Courselist from '../components/courses/Courselist';


const CoursesPage = () => {
  return (
    <Box p={5}>
      <Grid container spacing={3}>
        <SideBar />
        <Courselist />
      </Grid>
    </Box>
  );
    
};

export default CoursesPage;
