import React from 'react';
import OrderList from './OrderList';
import AddOrder from './AddOrder';
import Header from './Header';


const DashboardPage = () => (
	<div>
		<AddOrder />
		<OrderList />
	</div>
);

export default DashboardPage;