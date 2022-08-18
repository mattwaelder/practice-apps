import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  // this.props.addEntry() {
  //   console.log('oi')
  // }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return(
      <form>
        <input type='text' value={this.state.value} onChange={this.handleChange} placeholder="enter 'word,definition'">
        </input>

        <button type='submit' onClick={(e)=>this.props.addEntry(e, this.state.value)}>Add Entry</button>
      </form>
    )
  }
}

export default AddForm;