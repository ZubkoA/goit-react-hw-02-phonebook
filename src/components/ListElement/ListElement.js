import React from 'react';

const ListElement = ({ onDeleteContact, number, name }) => {
  return (
    <div>
      <p className="contacts__text">
        {name}: {number}
      </p>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default ListElement;
