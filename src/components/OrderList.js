import React from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import uuid from 'uuid';


const OrderList = ({ orders }) => (
  <div>
    <h1>Order List</h1>
    <table>
      <tbody>
        <tr>
          <th>Customer Name</th>
          <th>Product Name</th>
          <th>Amount</th>
        </tr>
        {orders.map((order) => {
          return <TableRow  key={ uuid() } {...order} />;
        })}
      </tbody>
    </table>
  </div>
);


const mapStateToProps = (state) => {
  return { 
    orders: state
  }
};

export default connect(mapStateToProps)(OrderList);