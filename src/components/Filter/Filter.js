import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </form>
  );
};

export default Filter;
