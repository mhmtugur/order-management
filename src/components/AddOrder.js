import React from 'react';
import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { addOrder } from '../actions/Orders';

const AddOrder = (props) => (
	<div>
		<h3>Add Order</h3>
		<OrderForm 
			onSubmit = {(order) => {
				props.dispatch(addOrder(order));
				console.log(order);
			}}
		/>
	</div>
);


export default connect()(AddOrder);