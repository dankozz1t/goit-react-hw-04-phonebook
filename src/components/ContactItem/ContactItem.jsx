import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactItem.module.css';

export default class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleClickDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <li className={s.item}>
        <p>
          <span className={s.name}>{this.props.name}</span>: {this.props.number}
        </p>
        <button
          className={s.btn}
          onClick={this.props.handleClickDelete}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  }
}
