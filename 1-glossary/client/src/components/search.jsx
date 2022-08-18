import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return(
      <form>
        <input type="text" value={this.state.value} placeholder="search a word" onChange={(e)=>this.handleChange(e)}></input>

        <button type="submit" onClick={(e) => this.props.handleSearch(e, this.state.value)}>Search!</button>
      </form>
    )
  }
}

export default Search;
