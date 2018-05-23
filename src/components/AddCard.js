import React, { Component } from 'react';
import SaveCancel from './SaveCancel';
import { addNewTask } from '../helpers/database';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false,
      textEntered: ""
    }
  }

  componentDidMount() {
    this.props.updateTasks();
  }

  addNewTask = (taskText) => {
    addNewTask({"task_text": taskText, "list_id": this.props.listId});
    this.setState({ textEntered: "", showAdd: false });
    this.props.updateTasks();
  }

  onClickSave = () => {
    this.addNewTask(this.state.textEntered);
    this.setState({ showAdd: false, textEntered: "" });
    this.props.updateTasks();
  }

  render() {
    const { showAdd, textEntered } = this.state;
      return (
      <div>
        {!showAdd &&
        <div className="add-card grey-text hover-style cursor-pointer"
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
            onClickSave={ this.onClickSave } />
        </div>
        }
      </div>
    )
  }
}

export default AddCard;
