import React from 'react';
import axios from 'axios';

class BillInfo extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        cc: '',
        cvv: '',
        zip: ''
      }
  }

  render() {
    return(
      <div className="bill_info">
      <form>
        <input type="text" placeholder="card number"></input>
        <span>expiration date</span>
        <input type="text" placeholder="yyyy-mm-dd"></input>
        <input type="text" placeholder="security code"></input>
        <input type="text" placeholder="billing zip"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
  }
}

export default BillInfo;