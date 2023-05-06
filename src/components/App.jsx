import Header from './Header';
import ContactList from './ContactList/ContactList';
import './App.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
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
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
    });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { contacts } = this.state;
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
            id={this.nameInputId}
            onChange={this.handlChange}
            value={this.state.name}
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <Header titleContacts="Contacts" />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
