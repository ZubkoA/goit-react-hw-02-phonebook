import React from 'react';
import PropTypes from 'prop-types';
import ListElement from '../ListElement/ListElement';
import './ContactList.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className="contacts">
    {contacts.map(({ name, id, number }) => (
      <li className="contacts__item" key={id}>
        <ListElement
          name={name}
          number={number}
          onDeleteContact={() => {
            deleteContact(id);
          }}
        />
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
