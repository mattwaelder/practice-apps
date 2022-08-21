import React from 'react';
import axios from 'axios';

class BillInfo extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        cc: '',
        expDate: '',
        cvv: '',
        billZip: ''
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    let value = e.target.name;
    this.setState({[value]: e.target.value})
  }

  render() {
    return(
      <div className="bill_info">
      <form>
        <input type="text" placeholder="card number" name="cc" value={this.state.cc} onChange={(e) => this.handleChange(e)}></input>

        <span>expiration date</span>
        <input type="text" placeholder="yyyy-mm-dd" name="expDate" value={this.state.expDate} onChange={(e)=>this.handleChange(e)}></input>

        <input type="text" placeholder="security code" name="cvv" value={this.state.cvv} onChange={(e)=>this.handleChange(e)}></input>

        <input type="text" placeholder="billing zip" name="billZip" value={this.state.billZip} onChange={(e)=>this.handleChange(e)}></input>

        <button type="submit" onClick={(e)=>this.props.handleClick(e, this.state)}>Submit</button>
      </form>
    </div>
    )
  }
}

export default BillInfo;