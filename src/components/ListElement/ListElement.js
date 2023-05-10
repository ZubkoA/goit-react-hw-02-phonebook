import React from 'react';
import css from './ListElement.module.css';

const ListElement = ({ onDeleteContact, number, name, id }) => {
  return (
    <>
      <p className={css.contacts__text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.contacts__btn}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ListElement;
