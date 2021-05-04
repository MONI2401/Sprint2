import { combineReducers } from "redux";
import  customerReducer  from "./customer/CustomerReducer";
import  paymentReducer  from "./payment/paymentReducer";
import { getCustomerReducer,getCustomersReducer } from "./customer/CustomerReducerType";
import { getPaymentReducer,getPaymentsReducer } from "./payment/PaymentReducerType";
import  orderReducer  from "./order/orderReducer";
import { getOrderReducer,getOrdersReducer } from "./order/OrderReducerType";


const rootReducer = combineReducers({
    paymentReducer,
    allPayments:getPaymentsReducer,
    payment:getPaymentReducer,
    customerReducer,
    allCustomers:getCustomersReducer,
    customer:getCustomerReducer,
    orderReducer,
    allOrders:getOrdersReducer,
    order:getOrderReducer,
});


export default rootReducer;