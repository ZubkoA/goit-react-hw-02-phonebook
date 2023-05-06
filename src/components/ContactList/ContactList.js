import React from 'react';

const ContactList = ({ contacts }) => (
  <ul className="contacts">
    {contacts.map(({ name, id }) => (
      <li className="contacts__item" key={id}>
        <p className="contacts__text">{name}</p>
      </li>
    ))}
  </ul>
);
export default ContactList;
