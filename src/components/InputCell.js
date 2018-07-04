import React from 'react';

const InputCell = (props) => (
  <td>
    <input 
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    />
  </td>
);


export default InputCell;