import React from 'react';
import ReactDOM from 'react-dom';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css'; // Import Flatpickr CSS

class DateSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      date: null
    };
  }

  render() {
    return (
      <div>
        <h1>Select Date Range</h1>
        <Flatpickr
          value={this.state.date}
          onChange={(date) => this.setState({ date })}
          options={{
            mode: 'range',
            dateFormat: 'Y-m-d',
          }}
        />
        {this.state.date && <p>Selected dates: {this.state.date.join(' to ')}</p>}
      </div>
    );
  }
}

ReactDOM.render(<DateSelector />, document.getElementById('root'));
