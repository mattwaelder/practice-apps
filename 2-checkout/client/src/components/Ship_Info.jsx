import React from 'react';
import axios from 'axios';

class ShipInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // form: 1,
      address: '',
      phoneNumber: ''
    }
  }

  render() {
    return(
      <div className="ship_info">
      <form>
        <input type="text" placeholder="address line 1"></input>
        <input type="text" placeholder="address line 2"></input>
        <input type="text" placeholder="city"></input>
        <input type="text" placeholder="state"></input>
        <input type="text" placeholder="zip code"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
  }
}

export default ShipInfo;