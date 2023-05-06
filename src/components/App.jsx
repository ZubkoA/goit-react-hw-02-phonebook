import Header from './Header';
import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AddContacts } from './AddContacts/AddContacts';
import { nanoid } from 'nanoid';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  findFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.findFilter();
    return (
      <div className="container">
        <Header title="Phonebook" />
        <AddContacts addContact={this.addContact} />
        <Filter value={filter} onChange={this.handleChange} />
        <Header titleContacts="Contacts" />
        <ContactList contacts={filterContacts} />
      </div>
    );
  }
}

export default App;
