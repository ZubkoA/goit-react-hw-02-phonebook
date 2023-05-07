import React from 'react';
import './ContactList.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className="contacts">
    {contacts.map(({ name, id, number }) => (
      <li className="contacts__item" key={id}>
        <p className="contacts__text">
          {name}: {number}
        </p>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
export default ContactList;
