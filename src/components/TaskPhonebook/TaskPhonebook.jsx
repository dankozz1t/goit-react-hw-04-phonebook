import React, { Component } from 'react';

import Section from '../Section';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { ContactForm } from '../ContactForm';

import { ConfettiContainer } from '../Confetti';
import { login } from './utils';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import s from './TaskPhonebook.module.css';

export default class TaskPhonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    } else {
      this.setState({
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
          { id: 'id-5', name: 'Sergey Mentor 2', number: '666-66-66' },
        ],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

    if (
      nextContacts.length !== prevContacts.length &&
      prevContacts.length !== 0
    ) {
      login.submit();
    }
  }

  onAddContact = contact => {
    const { contacts } = this.state;

    const searchUnique = contact.name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      Notify.failure(`${contact.name} is already in contacts`);

      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleClickDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    let renderContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    return (
      <div className={s.box}>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.onAddContact} />
        </Section>

        <Section title="Contacts">
          <Filter handleFilter={this.handleFilter} value={filter} />

          <ContactList
            contacts={renderContacts}
            handleClickDelete={this.handleClickDelete}
          />
          <ConfettiContainer />
        </Section>
      </div>
    );
  }
}
