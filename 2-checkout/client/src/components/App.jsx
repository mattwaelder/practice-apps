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

  handleClick(e, input) {
    e.preventDefault();
    //takes in state from whatever form clicked
    if (this.state.currPage < 4) {
      // axios.post('/orders', {
      //   email: input.email,
      //   username: input.username,
      //   password: input.password,
      //   cookie: this.props.cookie,
      // })
      input.cookie = this.props.cookie;
      let stateCopy = this.state;
      for (let [key, value] of Object.entries(input)) {
        stateCopy[key] = value;
      }

      stateCopy.currPage++;
      console.log(stateCopy)
      this.setState(stateCopy)

    } else if (this.state.currPage >= 4) {
      console.log(' > = 4')
      //should now be on confirmation page
      //should render all info from the state
      //upon confirm should post info to db

      // axios.post('/orders', input)
      // .then((data) => console.log('POSTED',data))
      // .then(() =>
      //   //if page < 4 add one to this.state.page
      //   this.setState(stateCopy))
      // .catch((err) => console.log(err))


    }

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