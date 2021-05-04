import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from "../../actions/order/OrderActionType";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const OrderListing = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrders.orders);

  const fetchOrders = async () => {
    const result = await axios.get('http://localhost:9082/api/cars24/getAllOrder').catch((err) => { console.log("Error ", err); });
    console.log(result);
    dispatch(getOrders(result.data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  console.log("Orders :", orders);

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Order Id</StyledTableCell>
                <StyledTableCell>Amount</StyledTableCell>
                <StyledTableCell>Billing Date</StyledTableCell>
                <StyledTableCell>User Id</StyledTableCell>
               
                {/* <StyledTableCell>Payment Id</StyledTableCell> */}
                <StyledTableCell>View</StyledTableCell>
                {/* <StyledTableCell>Update</StyledTableCell> */}
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                orders.map((order) => {
                  const { orderId,amount,billingDate,customer} = order;
                  return (
                    <StyledTableRow key={orderId}>
                      <td>{orderId}</td>
                      <td>{amount}</td>
                      <td>{billingDate}</td>
                      <td>{customer.userId}</td>
                   
                      {/* <td>{paymentMethod.paymentId}</td> */}
                      <td><Link to={`/getOrderById/${orderId}`}><Button color="primary" variant="contained" className="btn btn-info">View </Button></Link></td>
                      {/* <td><Link to={`/updateOrder/${orderId}`}><Button color="primary" variant="contained" className="btn btn-info">Update </Button></Link></td> */}
                      <td><Link to={`/getOrderById/${orderId}`}><Button color="secondary" variant="contained" className="btn btn-secondary" >Delete </Button></Link> </td>
                    </StyledTableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

    </div>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default OrderListing;