import React, { Component } from 'react';
import './App.css';
import { getData, addNewList, makeUpdate } from '../helpers/database';
import Header from './Header';
import AddList from './AddList';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSave: false,
      showEditTask: null,
      textEntered: "",
      taskText: "",
      listsData: [],
      tasksData: []
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

  patchTask = (itemId, task) => {
    makeUpdate(itemId, task)
    .then(() => {
      this.onClickCancelTask();
      this.updateTasks();
    });
  }

  onClickCancelTask = () => {
    this.setState({
      taskText: "",
      showEditTask: null
    });
  }

  editTask = (id, value) => {
    this.setState({ showEditTask: id, taskText: value });
  }

  handleTaskText = (value) => {
    this.setState({ taskText: value });
  }

  render() {
    const { textEntered, showSave, listsData, tasksData, showEditTask, taskText } = this.state;
    return (
      <div>
        <Header title="Mellow" />
        <div className="all-lists-container">
          {listsData && tasksData &&
          listsData.map((item, index) =>
            <List
              key={index}
              listTitle={item.list.list_name}
              listId={item.id}
              tasks={tasksData.filter(taskItem => taskItem.task.list_id === item.id)}
              updateTasks={this.updateTasks}
              editTask={this.editTask}
              handleTaskText={this.handleTaskText}
              showEditTask={showEditTask}
              taskText={taskText}
              patchTask={this.patchTask}
              onClickCancelTask={this.onClickCancelTask}
            />
          )}
          <AddList
            textEntered={ textEntered }
            onFocus={ () => this.setState({ showSave: true })}
            onChange={ (value) => this.setState({ textEntered: value }) }
            onClickSave={ this.onClickSave }
            onClickCancel={ () => this.setState({ textEntered: "", showSave: false }) }
            showSave={showSave}
          />
        </div>
      </div>
    );
  }
}

export default App;
