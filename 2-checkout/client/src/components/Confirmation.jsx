import React from 'react';
import axios from 'axios';

var Confirmation = (props) => {
  return(
  <div>
    <h3>CONFIRM ORDER INFORMATION</h3>

    <div>{props.info.username}</div>
    <div>{props.info.email}</div>
    <div>{`${props.info.address1} ${props.info.address2 ? props.info.address2 : ''}`}</div>
    <div>{props.info.city} {props.info.state}, {props.info.zip}</div>
    <div>{`using card ending with ${props.info.cc.slice(-4)}`}</div>

    <button type="submit" onClick={()=>props.handleClick()}>Confirm Order!</button>
  </div>
  )
}

export default Confirmation;