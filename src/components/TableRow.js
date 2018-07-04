import React from 'react';
import RowCell from './RowCell';
import ButtonCell from './ButtonCell';
import InputCell from './InputCell';
import { editOrder, removeOrder } from '../actions/Orders';
import { connect } from 'react-redux';

class TableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id ? props.id : '',
      customerName: props.customerName ? props.customerName : '',
      productName: props.productName ? props.productName : '',
      amount: props.amount ? props.amount : '',
      isEditMode: false
    };
  }

  editOnclick = () => {
    this.setState(() => ({ isEditMode: !this.state.isEditMode }));
  };

  saveOnClick = () => {
    this.props.dispatch(editOrder(this.state.id,this.state));
    this.setState(() => ({ isEditMode: !this.state.isEditMode }));
  };

  removeOnClick = () => {
    this.props.dispatch(removeOrder(this.state.id));
  };

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
    this.setState(() => ({ amount }));
  };

  renderCells() {
    return (
      <tr>
      <RowCell name={this.props.customerName} />
      <RowCell name={this.props.productName} />
      <RowCell name={this.props.amount} />
      <ButtonCell 
        name="Edit" 
        onClick={this.editOnclick} 
      />
      <ButtonCell 
        name="Remove" 
        onClick={this.removeOnClick} 
      />
    </tr>
    );
  }
  renderInputs(){
    return (
      <tr>
        <InputCell 
        placeholder="Customer Name"
        value={this.state.customerName}
        onChange={this.onCustomerNameChange}
        />
        <InputCell 
        placeholder="Product Name"
        value={this.state.productName}
        onChange={this.onProductNameChange}
        />
        <InputCell 
        placeholder="Amount"
        value={this.state.amount}
        onChange={this.onAmountChange}
        />
        <ButtonCell 
        name="Save" 
        onClick={this.saveOnClick} 
        />
        <ButtonCell 
        name="Remove" 
        onClick={this.removeOnClick} 
        />
      </tr>
      );
  }
  render () {

  if(!this.state.isEditMode){
     return this.renderCells();
    } else {
     return this.renderInputs();
    }
  }
}

export default connect()(TableRow);