import {
    Grid
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import OrderListing from './OrderListing';
import Box from '@material-ui/core/Box';
import Footer from '../design/Footer';

import Button from '../Buttons/Button'



function DashBoard() {

   const history = useHistory();
   return (
        <div>
        <Box color="danger.main" component="div" display="inline"  > <h3><br/>ORDER DETAILS:</h3></Box> <br/>
       <Grid   >
           <OrderListing />
       </Grid>
       <div style={{textAlign:"center"}}>
       <Box color="primary.main"  component="div" display="inline"  > <h3>
<Button text="Add Order"  onClick={() => history.push("/addOrder")}></Button><br/></h3>
       </Box></div>
       <br/>
    <Footer/>  
</div>

   );
}


export default DashBoard;