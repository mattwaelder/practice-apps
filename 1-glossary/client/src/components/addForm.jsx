import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }

    this.handleWordChange = this.handleWordChange.bind(this)
    this.handleDefChange = this.handleDefChange.bind(this)
  }

  // this.props.addEntry() {
  //   console.log('oi')
  // }

  handleWordChange(e) {
    this.setState({word: e.target.value})
  }
  handleDefChange(e) {
    this.setState({definition: e.target.value})
  }

  render() {
    return(
      <form>
        <input type='text' value={this.state.word} onChange={this.handleWordChange} placeholder="enter word">
        </input>

        <input type='text' value={this.state.definition} onChange={this.handleDefChange} placeholder="enter definition"></input>

        <button type='submit' onClick={(e)=>this.props.addEntry(e, this.state)}>Add/Edit Entry</button>
      </form>
    )
  }
}

export default AddForm;