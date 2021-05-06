import {
    Grid
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import PaymentListing from './PaymentListing';
import Box from '@material-ui/core/Box';
import Footer from '../design/Footer';

import Button from '../Buttons/Button'




function DashBoard() {

    const history = useHistory();
    return (
        <div>
                 <Box color="danger.main" component="div" display="inline"  > <h3><br/>PAYMENT DETAILS:</h3></Box> <br/>
                <Grid   >
                    <PaymentListing />
                </Grid>

                <Box color="primary.main"  component="div" display="inline"  >
                <div style={{textAlign:"center"}}> <h3>
        <Button text="Add Payment"  onClick={() => history.push("/addPayment")}></Button></h3></div>
                </Box>
                <br/>
             <Footer/>  
        </div>
    );
}


export default DashBoard;