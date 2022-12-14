import React from 'react';

import PropTypes from 'prop-types';

export function Filter({ value, handleFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          onChange={handleFilter}
          value={value}
          type="text"
          name="filter"
          title="Find contacts by name"
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
