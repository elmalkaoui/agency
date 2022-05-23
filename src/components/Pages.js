import { Box, Container, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import Home from '../pages/Home';

const Pages = (props) => {
    return(
        <Box style={{backgroundColor:'transparent', padding:'30px'}}>
            <Home />
        </Box>
    );
}

export default Pages;