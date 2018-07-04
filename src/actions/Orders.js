import uuid from 'uuid';

export const addOrder = ({
  customerName = '',
  productName = '',
  amount = 0
} = {}) => ({
  type: 'ADD_ORDER',
  order: {
    id: uuid(),
    customerName,
    productName,
    amount
  }
});

export const editOrder = (id, order) => ({
  type: 'EDIT_ORDER',
  id,
  order
});
