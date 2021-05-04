import axios from "../../axios/axios";


const _addOrder = (order) => ({
    type: 'ADD_ORDER',
    order
});

export const addOrder = (orderData = {
    amount: '',
    billingDate: '',
    userId: '',
    paymentId: ''
}) => {
    return (dispatch) => {
        const order = {
            amount: orderData.amount,
            billingDate: orderData.billingDate,
            customer:
            {
            userId: orderData.userId,
            },
            payment:
            {
            paymentId: orderData.paymentId
            }
        
    
        };
        console.log(order);
        return axios.post('/addOrder', order).then(() => {
            dispatch(_addOrder(order));
        }).catch(error => {
            throw (error);
        });
    };
};




const _updateOrder = (orderId,updatedOrder) => ({
    type:"UPDATE_ORDER",
    orderId,
    updatedOrder
});


export const updateOrder = (orderId,updatedOrder) => {
    {
    return (dispatch) => {
        const order = {
            orderId:orderId,
            amount: updatedOrder.amount,
            billingDate: updatedOrder.billingDate,
            customer:
            {
            userId: updatedOrder.userId,
            },
            payment:
            {
            paymentId: updatedOrder.paymentId
            }
        
        };
        console.log(order);
        return axios.put(`/updateOrder/${orderId}`,order).then(() => {
            dispatch(_updateOrder(orderId,order));
        }).catch(error => {
            throw (error);
        });
    }
};

}