import React, { Component } from 'react';

import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    handleClickDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        {this.props.contacts.length > 0 && (
          <ul className={s.list}>
            {this.props.contacts.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                name={name}
                number={number}
                handleClickDelete={() => {
                  this.props.handleClickDelete(id);
                }}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}
