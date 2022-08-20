import React from 'react';
import axios from 'axios';

import UserInfo from './User_Info.jsx';
import ShipInfo from './Ship_Info.jsx';
import BillInfo from './Bill_Info.jsx';
import Confirmation from './Confirmation.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, state) {
    e.preventDefault();
    console.log(state);
    //takes in state from whatever form clicked
    //if page < 4 add one to this.state.page
    if (this.state.currPage < 4) {
      axios.post('/orders', state)
      .then((data) => console.log(data))
    }
      //make post req to server with state info
    //else set page to 0
      //
  }

  render() {
    switch(this.state.currPage) {
      case 0:
        return(
          <UserInfo cookie={this.props.cookie} handleClick={this.handleClick}/>
          )
          break;
      case 1:
        return(
          <ShipInfo cookie={this.props.cookie} handleClick={this.handleClick}/>
          )
          break;
      case 2:
        return(
          <BillInfo cookie={this.props.cookie} handleClick={this.handleClick}/>
          )
          break;
      case 3:
        return(
          //might end up doing some other method here handleConfirmClick (?)
          <Confirmation cookie={this.props.cookie} handleClick={this.handleClick}/>
          )
          break;
      default:
        alert('contact matt he F\'d up')
        break;
    }

  }
}

export default App;