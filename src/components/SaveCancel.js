import React from 'react';

const SaveCancel = ({ onClickCancel, onClickSave }) => (
<div>
  <button className="save-button btn-small green" onClick={ onClickSave }>Save</button>
  <span className="cancel-button cursor-pointer" onClick={ onClickCancel }><i className="close-icon grey-text material-icons">close</i></span>
</div>
)

export default SaveCancel;
