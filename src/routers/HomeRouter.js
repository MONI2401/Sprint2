import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaymentDashBoard from '../components/payment/PaymentDashBoard';
import AddPayment from '../components/payment/AddPayment';
import UpdatePayment from '../components/payment/UpdatePayment';
import Payment from '../components/payment/Payment';
import AddCustomer from '../components/customer/AddCustomer';
import DashBoard from '../components/customer/DashBoard';
import UpdateCustomer from '../components/customer/UpdateCustomer';
import Customer from '../components/customer/customer';
import OrderDashBoard from '../components/order/OrderDashBoard';
import AddOrder from "../components/order/AddOrder";
import UpdateOrder from "../components/order/UpdateOrder";
import Order from '../components/order/Order';



import Home from '../components/design/Home'

const HomeRouter = () => (
    <BrowserRouter>
         <div>
             <Switch>
                 <Route path="/" component={Home} exact/>
                 <Route path={`/payment`} component={PaymentDashBoard}/>
                 <Route path={`/addPayment`} component={AddPayment} />
                 <Route path={`/updatePayment/:paymentId`} component={UpdatePayment} />
                 <Route path={`/getPaymentById/:paymentId`} component={Payment} />      
                 <Route path={`/customer`} component={DashBoard}/>
                 <Route path={`/addCustomer`} component={AddCustomer}/>
                 <Route path={`/updateCustomer`} component={UpdateCustomer} />
                 <Route path={`/getCustomer/:userId`} component={Customer} />   
                 <Route path={`/order`} component={OrderDashBoard}/>
                 <Route path={`/addOrder`} component={AddOrder} />
                 <Route path={`/updateOrder`} component={UpdateOrder} />
                 <Route path={`/getOrderById/:orderId`} component={Order} />   
             </Switch>
         </div>
    </BrowserRouter>
);

export default HomeRouter;