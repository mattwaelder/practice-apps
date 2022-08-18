import React from 'react';
import ListElement from './listElement.jsx'

let GlossaryList = (props) => {

  return (
    <ul className="glossary_list">
      <h2>~~~GLOSSARY~~~</h2>
      <ListElement glossary={props.glossary} handleDelete={props.handleDelete}/>
    </ul>
  )
}

export default GlossaryList;