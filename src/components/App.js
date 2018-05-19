import React, { Component } from 'react';
import './App.css';
import { getData, addNewItem } from '../helpers/database';
import Header from './Header';
import ListForm from './ListForm';
import List from './List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSave: false,
      textEntered: ""
    }
  }

  componentDidMount() {
    this.updateLists();
  }

  updateLists = () => {
    getData("lists").then((listsData) => {
      this.setState({ listsData });
    });
  }

  addNewList = (listTitle) => {
    addNewItem("lists", {"list_name": listTitle});
    this.setState({ textEntered: "" });
    this.updateLists();
  }

  render() {
    const { textEntered, showSave, listsData } = this.state;
    return (
      <div className="App">
        <Header title="Mellow" />
        {listsData &&
        listsData.map((item, index) =>
          <List key={index} listTitle={item.list.list_name} />
        )}
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
