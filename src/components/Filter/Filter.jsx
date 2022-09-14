import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
  };

  render() {
    const { value, handleFilter } = this.props;
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
}
