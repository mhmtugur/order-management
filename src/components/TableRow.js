import React from 'react';
import RowCell from './RowCell';
import ButtonCell from './ButtonCell';
import InputCell from './InputCell';
import { editOrder } from '../actions/Orders';
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
    debugger;
    this.props.dispatch(editOrder(this.state.id,this.state));
    this.setState(() => ({ isEditMode: !this.state.isEditMode }));
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

  handleOnChange = (e) => {
    //const customerName = e.target.value;
    console.log(e);
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
    </tr>
    );
  }
  renderInputs(){
    return (
      <tr>
        <InputCell 
        placeholder="Customer Name"
        value={this.state.customerName}
        onChange={this.handleOnChange}
        />
        
        <td>
          <input 
            type="text"
            placeholder="Customer Name"
            value={this.state.customerName}
            onChange={this.onCustomerNameChange}
          />
        </td>
        <td>
          <input 
            type="text"
            placeholder="Product Name"
            value={this.state.productName}
            onChange={this.onProductNameChange}
          />
        </td>
        <td>
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
        </td>
        <ButtonCell 
        name="Save" 
        onClick={this.saveOnClick} 
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