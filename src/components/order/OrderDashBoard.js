import {
    Button, Grid
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import OrderListing from './OrderListing';
import Box from '@material-ui/core/Box';



function DashBoard() {

    const history = useHistory();
    return (
        <div>
                <Box color="primary.main"  component="div"   > <h3>Add Order Detail:
        <Button style={style} onClick={() => history.push("/addOrder")}>Add Order</Button></h3>
                </Box>
                <br/>
                <Box color="primary.main" component="div"   > <h3>List of Order Detail:</h3></Box>
                <Grid   >
                    <OrderListing />
                </Grid>
        </div>

    );
}
const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: "10px",
};



export default DashBoard;