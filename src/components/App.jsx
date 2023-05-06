import Header from './Header';
import ContactList from './ContactList/ContactList';
import './App.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handlChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
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
        <form className="container-form" onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handlChange}
            value={this.state.name}
            required
          />
          <label htmlFor={this.nameInputId}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handlChange}
            value={this.state.number}
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handlChange}
          />
        </div>
        <Header titleContacts="Contacts" />
        <ContactList contacts={filterContacts} />
      </div>
    );
  }
}

export default App;
