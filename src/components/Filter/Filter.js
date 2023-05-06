import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
