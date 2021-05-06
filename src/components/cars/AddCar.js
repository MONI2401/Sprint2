import React from 'react';
import { connect } from "react-redux";
import { addCar } from '../../actions/car/CarAction';
import CarForm from "./CarForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';


const AddCar = (props) => (
    <div>
       
        
        <p>

        </p>
        <div style={{textAlign:"center"}}>
        <Box color="white" bgcolor="#05716c" p={1}> <h2>Add Car</h2></Box>
        <Paper elevation={3} ></Paper>  </div>
        <p>

        </p> 
        <CarForm 
             onSubmitCar={(state) => {
                 props.dispatch(addCar(state));
                 props.history.push('/');
             }} />
        
    </div>
);

export default connect()(AddCar);