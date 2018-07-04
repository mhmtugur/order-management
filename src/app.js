import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addOrder } from './actions/Orders';

import './styles/styles.scss';




const store = configureStore();
const state = store.getState();
console.log(state);

store.dispatch(addOrder({ customerName: 'Ahmet', productName: 'Laptop', amount: 1 }));
store.dispatch(addOrder({ customerName: 'Mehmet', productName: 'Phone', amount: 2 }));
store.dispatch(addOrder({ customerName: 'Mustafa', productName: 'Elma', amount: 3 }));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
