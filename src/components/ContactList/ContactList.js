import React from 'react';

const ContactList = ({ contacts }) => (
  <ul className="contacts">
    {contacts.map(({ name, id, number }) => (
      <li className="contacts__item" key={id}>
        <p className="contacts__text">
          {name}: {number}
        </p>
      </li>
    ))}
  </ul>
);
export default ContactList;
