import React from "react";
// import { render } from "react-dom";
// import ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom';

import Search from './components/search.jsx';
import AddForm from './components/addForm.jsx';
import GlossaryList from './components/glossaryList.jsx';
import ListElement from './components/listElement.jsx';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.addEntry = this.addEntry.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      glossary: [],
    }
  }
  ///////////////////////////  METHODS  //////////////////////////////

  addEntry(e, input) {
    //takes state from AddForm
    //expect input to be word,definition
    let [word, definition] = input.split(',')
    e.preventDefault()
    //makes post req for that word/def
    axios.post('/create', {word: word, definition: definition})
    .then((res) => {
      //make getAll req to refresh state
      this.fetchDB()
    })
    .catch((err) => console.log(err))
  }

  handleSearch(e, input) {
    e.preventDefault()
    //takes in state from search as arg
    //server get req for that word/words
    axios.post('/search', {word: input})
    .then((res) => {
      //set state to just that one term
      let stateCopy = this.state;
      stateCopy.glossary = [{word: res.data.word, definition: res.data.definition}]
      this.setState(stateCopy)

    })
    .catch((err) => console.log(err))
  }


  handleDelete(e, input) {
    e.preventDefault()
    //takes state from listElement
    //makes server call to delete
    axios.post('/delete', {word: input})
    .then((res) => {
      //update state
      this.fetchDB();
    })
    .catch((err) => console.log(err))
  }


  fetchDB() {
    axios.get('/getAll')
    .then((data) => {
      let stateCopy = this.state;
      stateCopy.glossary = data.data;
      this.setState(stateCopy);
    })
    .catch((err) => console.log(err))
  }

  //////////////////////////////////////////////////////////////////

  componentDidMount() {
    this.fetchDB()
  }

  render() {
    return(
      <div>
        <Search handleSearch = {this.handleSearch}/>
        <AddForm addEntry = {this.addEntry}/>
        <GlossaryList glossary={this.state.glossary} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

  // document.getElementById("root")
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(App)
ReactDOM.render(<App />, document.getElementById('root'));