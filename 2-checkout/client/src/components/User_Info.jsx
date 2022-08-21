import React from 'react';
import axios from 'axios';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // form: 0,
      username: '',
      password: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = e.target.name;
    e.preventDefault();
    this.setState({[value]: e.target.value})
  }

  render() {
    return(
    <div className="user_info">
      <form>
        <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}></input>

        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}></input>

        <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

        <button type="submit" onClick={(e) => this.props.handleClick(e, this.state)}>Submit</button>
      </form>
    </div>
    )
  }
}

export default UserInfo;