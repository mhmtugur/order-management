import { createStore } from 'redux';
import ordersReducer from '../reducers/orders';

export default () => {
  const store = createStore(ordersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

return store;
};