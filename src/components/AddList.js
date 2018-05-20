import React, { Component } from 'react';
import SaveCancel from './SaveCancel';

const AddList = ({ onClickSave, onClickCancel, onFocus, onChange, textEntered, showSave }) => (
  <div className="list-wrapper">
    <div className="new-list indigo lighten-5">
      <input className="new-list-input"
        onFocus={ onFocus }
        onChange={ (e) => onChange(e.target.value) }
        placeholder="Add a list..."
        value={ textEntered } />
      {showSave &&
      <SaveCancel
        onClickSave={ onClickSave }
        onClickCancel={ onClickCancel } />
      }
    </div>
  </div>
  );

export default AddList;
