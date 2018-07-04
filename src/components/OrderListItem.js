import React from 'react';

const OrderListItem = ({ customerName, productName, amount }) => (
  <div>
  <h3>{customerName}</h3>
  <p>{productName} , {amount}</p>
  </div>
);

export default OrderListItem;
