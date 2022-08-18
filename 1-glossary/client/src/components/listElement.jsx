import React from 'react';

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state ={value: ''}
  }


  //list rendering, map an arr in render method, call mapped arr in return
  render() {
    let plsRender = this.props.glossary.map((el) => {
      return (
      <div>
        <h4>{el.word}:</h4>
        <p>{el.definition}</p>
        <button type='submit' value={el.word} onClick={(e)=>this.props.handleDelete(e, e.target.value)}>delete</button>
      </div>
      )
    })

    return(
      <div>{plsRender}</div>
    )
  }
}

export default ListElement;