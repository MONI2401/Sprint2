import { Provider } from 'react-redux';
import store from './store/store'
import CustomerRouter from './routers/customer/CustomerRouter'
import PaymentRouter from './routers/payment/PaymentRouter';
import HomeRouter from './routers/HomeRouter'
import OrderRouter from './routers/order/OrderRouter'


function App() {

    return (
        <div>
            <Provider store={store()}>
               <HomeRouter />

            </Provider>
        </div>

    );


}

export default App;