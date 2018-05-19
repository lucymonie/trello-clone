import React, { Component } from 'react';
import './App.css';
import { getLists, addNewList } from '../helpers/database';
import Header from './Header';
import ListForm from './ListForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSave: false,
      textEntered: ""
    }
  }

  getAllLists = () => {
    getLists().then((listsData) => {
      this.setState({ listsData });
    });
  }

  addNewList = (listTitle) => {
    addNewList({"list_name": listTitle});
    this.setState({ textEntered: "" })
  }

  render() {
    const { textEntered, showSave } = this.state;
    return (
      <div className="App">
        <Header title="Mellow" />
        <ListForm
          textEntered={ textEntered }
          onFocus={ () => this.setState({ showSave: true })}
          onChange={ (value) => this.setState({ textEntered: value }) }
          onClickSave={ () => this.addNewList(textEntered) }
          onClickCancel={ () => this.setState({ textEntered: "", showSave: false }) }
          showSave={showSave}
        />
      </div>
    );
  }
}

export default App;
