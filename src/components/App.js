import React, { Component } from 'react';
import './App.css';
import { getData, addNewList } from '../helpers/database';
import Header from './Header';
import ListForm from './ListForm';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSave: false,
      textEntered: ""
    }
  }

  componentDidMount() {
    this.updateLists();
    this.updateTasks();
  }

  updateLists = () => {
    getData("lists").then((listsData) => {
      this.setState({ listsData });
    });
  }

  updateTasks = () => {
    getData("tasks").then((tasksData) => {
      this.setState({ tasksData });
    });
  }

  addNewList = (listTitle) => {
    addNewList({"list_name": listTitle});
    this.setState({ textEntered: "" });
    this.updateLists();
  }

  onClickSave = () => {
    this.addNewList(this.state.textEntered);
    this.setState({ textEntered: "", showSave: false });
  }

  render() {
    const { textEntered, showSave, listsData, tasksData } = this.state;
    return (
      <div className="App">
        <Header title="Mellow" />
        {listsData && tasksData &&
        listsData.map((item, index) =>
          <List
            key={index}
            listTitle={item.list.list_name}
            listId={item.id}
            tasks={tasksData.filter(taskItem => taskItem.task.list_id === item.id)}
            updateTasks={this.updateTasks} />
        )}
        <ListForm
          textEntered={ textEntered }
          onFocus={ () => this.setState({ showSave: true })}
          onChange={ (value) => this.setState({ textEntered: value }) }
          onClickSave={ this.onClickSave }
          onClickCancel={ () => this.setState({ textEntered: "", showSave: false }) }
          showSave={showSave}
        />
      </div>
    );
  }
}

export default App;
