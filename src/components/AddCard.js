import React, { Component } from 'react';
import SaveCancel from './SaveCancel';
import { addNewItem, getData } from '../helpers/database';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false,
      textEntered: ""
    }
  }

  componentDidMount() {
    this.updateTasks()
  }

  addNewTask = (taskText) => {
    addNewItem("tasks", {"task_text": taskText});
    this.setState({ textEntered: "", showAdd: false });
    this.updateTasks();
  }

  updateTasks = () => {
    getData("tasks").then((tasksData) => {
      this.setState({ tasksData });
    });
  }

  render() {
    const { showAdd, textEntered } = this.state;
      return (
      <div>
        {!showAdd &&
        <div className="add-card grey-text cursor-pointer"
          onClick={ () => this.setState({ showAdd: true }) }
        >Add a card...</div>}
        {showAdd &&
        <div>
          <textarea className="card-input white"
            rows={3}
            onChange={ (e) => this.setState({textEntered: e.target.value} )}
            value={textEntered}
          />
          <SaveCancel
            onClickCancel={() => this.setState({ textEntered: "", showAdd: false }) }
            onClickSave={this.addNewTask} />
        </div>
        }
      </div>
    )
  }
}

export default AddCard;
