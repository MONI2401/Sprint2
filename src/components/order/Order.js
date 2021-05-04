
import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {  getOrderById ,deleteOrderById} from "../../actions/order/OrderActionType";
import { Button, Grid } from '@material-ui/core';
import {Link} from "react-router-dom"

const Order = () => {
    const {orderId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [order,setOrder] = useState({
         amount: '',
         billingDate: '',
         customer: {
             userId: '',
             name: '',
             email: '',
             contactNo: '',
             dob:'' ,
             address: {
                 addressId:'' ,
                 doorNo:'' ,
                 street:'' ,
                 area:'' ,
                 city:'' ,
                 state:'' ,
                 pinCode: '',
             }
         },
        
         payment: {
             paymentId: '',
             type: '',
             status: '',
             card: {
                 id: '',
                 cardName:'',
                 cardNumber: '',
                 cardExpiry:'',
                 cvv: '',
             }
         }
    
     });
     

    useEffect(() => {
        loadOrder();
    },[])

    const loadOrder = async () => 
    {
        const result=await axios.get(`http://localhost:9082/api/cars24/getOrder/${orderId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getOrderById(result.data));
        setOrder(result.data);
    }
    const  deleteOrder = async (orderId) => {
        await axios.delete(`http://localhost:9082/api/cars24/removeOrder/${orderId}`).catch((err) => {console.log("Error" , err);});
       dispatch(deleteOrderById(orderId));
       alert("Deleted Successfully");
       history.push('/order')
     }
     return (
        <div >
        <h1 class="display-4  bg-primary text-white"> Order Detail  </h1> 
        <ul class="list-group-item">
            <li class="list-group-item list-group-item-info"> <h3>Order Id : {orderId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Amount : {order.amount}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Billing Date : {order.billingDate}</h3> </li>

            <li class="list-group-item list-group-item-info"><h3>User Id : {order.customer.userId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Name : {order.customer.name}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Email : {order.customer.email}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Contact No. : {order.customer.contactNo}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>DOB : {order.customer.dob}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Address Id : {order.customer.address.addressId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Door No. : {order.customer.address.doorNo}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Street : {order.customer.address.street}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Area : {order.customer.address.area}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>city : {order.customer.address.city}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>State : {order.customer.address.state}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>PinCode : {order.customer.address.pinCode}</h3> </li>
         
            {/* <li class="list-group-item list-group-item-info"><h3>Payment Id :  {order.payment.paymentId}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Type :  {order.payment.type}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Status :  {order.payment.status}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Card Id :  {order.payment.card.id}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Card Name :  {order.payment.card.cardName}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Card Number :  {order.payment.card.cardNumber}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Card Expiry :  {order.payment.card.cardExpiry}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>CVV :  {order.payment.card.cvv}</h3></li> */}
            
        </ul>
        <Grid container spacing={3}>
        <Grid item xs={3}>
       
        <Button style={style} onClick={ () => deleteOrder (orderId)}>Delete </Button>
        </Grid>
        <Grid item xs={3}>
        <Link to={`/order`}><Button style={style} >Back To Home </Button ></Link>
        </Grid>
        </Grid>

        </div>
    )
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

export default connect()(Order);