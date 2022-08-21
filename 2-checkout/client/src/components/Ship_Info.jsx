import React from 'react';
import axios from 'axios';

class ShipInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // form: 1,
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let value = e.target.name;
    this.setState({[value]: e.target.value})
  }

  render() {
    return(
      <div className="ship_info">
      <form>
        <input type="text" placeholder="address line 1" name="address1" value={this.state.address1} onChange={(e)=>this.handleChange(e)}></input>

        <input type="text" placeholder="address line 2" name="address2" value={this.state.address2} onChange={(e)=>this.handleChange(e)}></input>

        <input type="text" placeholder="city" name="city" value={this.state.city} onChange={(e)=>this.handleChange(e)}></input>

        <input type="text" placeholder="state" name="state" value={this.state.state} onChange={(e)=>this.handleChange(e)}></input>

        <input type="text" placeholder="zip code" name="zip" value={this.state.zip} onChange={(e)=>this.handleChange(e)}></input>

        <button type="submit" onClick={(e) => this.props.handleClick(e, this.state)}>Submit</button>
      </form>
    </div>
    )
  }
}

export default ShipInfo;