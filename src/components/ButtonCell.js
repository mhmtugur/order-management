import React from 'react';

const ButtonCell = ({ onClick, name}) => (
  <td>
    <button onClick={onClick}>{name}</button>
  </td>
);


export default ButtonCell;