import React from 'react';
import { connect } from "react-redux";
import { addPayment } from '../../actions/payment/PaymentAction';
import AddPaymentForm from "./AddPaymentForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';


const AddPayment = (props) => (
  <div>
       
        
  <p>

  </p>
  <Box color="white" bgcolor="#05716c" p={1}> <h2>Add Payment</h2></Box>
  <Paper elevation={3} ></Paper>  
  <p>

  </p> 
  <AddPaymentForm 
       onSubmitCustomer={(state) => {
           props.dispatch(addPayment(state));
           props.history.push('/');
       }} />
  
</div>
);

export default connect()(AddPayment);