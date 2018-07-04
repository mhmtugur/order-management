import React from 'react';
import OrderList from './OrderList';
import AddOrder from './AddOrder';
import Header from './Header';


const DashboardPage = () => (
  <div>
    <Header />
    <AddOrder />
    <OrderList />
  </div>
);

export default DashboardPage;