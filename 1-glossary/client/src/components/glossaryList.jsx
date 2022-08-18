import React from 'react';
import ListElement from './listElement.jsx'

let GlossaryList = (props) => {

  return (
    <ul className="glossary_list">
      <ListElement glossary={props.glossary} handleDelete={props.handleDelete}/>
    </ul>
  )
}

export default GlossaryList;