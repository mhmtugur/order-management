import React from 'react';

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customerName: props.order ? props.order.customerName : '',
      productName: props.order ? props.order.productName : '',
      amount: props.order ? props.order.amount.toString() : ''
    };
  }

  onCustomerNameChange = (e) => {
    const customerName = e.target.value;
    this.setState(() => ({ customerName }));
  };

  onProductNameChange = (e) => {
    const productName = e.target.value;
    this.setState(() => ({ productName }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      customerName: this.state.customerName,
      productName: this.state.productName,
      amount:parseFloat(this.state.amount,10)
    });
  };

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input 
          type="text"
          placeholder="Customer Name"
          autoFocus
          value={this.state.customerName}
          onChange={this.onCustomerNameChange}
        />
        <input 
          type="text"
          placeholder="Product Name"
          value={this.state.productName}
          onChange={this.onProductNameChange}
        />
        <input 
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <button>Add Order</button>
      </form>
      
    </div>
    );
  }
}