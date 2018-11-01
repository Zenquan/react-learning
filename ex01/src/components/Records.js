import React, { Component } from 'react';
import Record from './Record';

class Records extends Component {
  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <Record />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
