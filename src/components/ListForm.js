import React, { Component } from 'react';

class ListForm extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { onClickSave, onClickCancel, onFocus, onChange, textEntered, showSave } = this.props;
    return (
      <div className="new-list indigo lighten-5">
        <input className="new-list-input"
          onFocus={ onFocus }
          onChange={ (e) => onChange(e.target.value) }
          placeholder="Add a list..."
          value={ textEntered } />
        {showSave &&
        <div>
          <span className="save-button btn-small green" onClick={ onClickSave }>Save</span>
          <span className="cancel-button cursor-pointer" onClick={ onClickCancel }><i className="close-icon grey-text material-icons">close</i></span>
        </div>}
      </div>
    )
  }
}

export default ListForm;
