import React from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

//import { Link } from "react-router-dom";



export default class AddOrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    
                amount: "",
                billingDate:  "",
                customer: {
                    userId:  "",
                }
               
                // payment:{
                //     paymentId:  "",
                // },
                // error: ""
            

        }
    }

    onAmountChange = (e) => {
        this.setState({ amount: e.target.value });
    }

    onBillingDateChange = (e) => {
        this.setState({ billingDate: e.target.value });
    }

    onUserIdChange = (e) => {
        this.setState(state =>({customer: {...state.customer,userId:e.target.value}}));
    }

    

    // onPaymentIdChange = (e) => {
    //     this.setState(state =>({payment: {...state.payment,paymentId:e.target.value}}));
    // }

    // onCancel = () => {
    //     this.props.history.push('/order');
    // }

    onSubmit = event => {

        console.log("Submitted");
        alert(this.state);
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitOrder(
            {
                amount: this.state.amount,
                billingDate: this.state.billingDate,
                userId: this.state.customer.userId,
                // paymentId: this.state.payment.paymentId,
               
            }

        );
 
    }


    render() {
        return (
            <div >
            <Container >
            
            <form onSubmit={this.onSubmit}  >
                        <div>
                        <Box color="secondary.main" p={1}> <h2>ORDER DETAILS :</h2></Box>
                       </div>
                       <br />
                <Grid item spacing={3}>
                <FormControl fullWidth>  
                <TextField
                         required id="standard-number" 
                         label="Amount"
                         type="number"
                         color="secondary" 
                         variant="outlined"
                         placeholder="Enter Amount"
                         value={this.state.amount} onChange={this.onAmountChange}/>
                         
                        </FormControl >
                        </Grid>
                    <br />

                    <Grid item spacing={3}>
                    <FormControl fullWidth>
                    <TextField
                        required id="date"
                        label="Billing Date"
                        type="date"
                        color="secondary" 
                        variant="outlined"
                        placeholder="DD/MM/YYYY"
                        className={useStyles.textField}
                        value={this.state.billingDate}
                        onChange={this.onBillingDateChange}
                        InputLabelProps={{
                            shrink: true
                        }} />
                        </FormControl >
                        </Grid>
                    <br />


                    <Grid item spacing={3}>
                    <FormControl fullWidth>
                    <TextField
                        required id="standard-number"
                        label="User Id" 
                        type="number"
                        color="secondary" 
                        variant="outlined"
                        placeholder="Enter User Id"
                        value={this.state.customer.userId} onChange={this.onUserIdChange}
                         />
                        </FormControl >
                        </Grid>
                    <br />


                    {/* <Grid item spacing={3}>
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-number"
                         label="Payment Id"
                         type="number"
                         color="secondary" 
                         variant="outlined"
                         placeholder="Enter Payment Id"
                        // value={this.state.payment.paymentId} onChange={this.onPaymentIdChange}
                         />
                    </FormControl >
                    </Grid> */}
                        <br />
                        
                        {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}

                        <Button style={style} type="submit">Add Order</Button>
                        <Link to={`/order`}><Button style={style} > Cancel</Button></Link>

                    </form>
               
            </Container>
            </div>
        )
    }

}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: "300px",
};

