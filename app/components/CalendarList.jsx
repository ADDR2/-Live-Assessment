import React, { Component } from "react";
import { connect } from 'react-redux';

export class CalendarList extends Component {

  render() {

    return (
      <div>
        <h1>Amaro's Calendars</h1>
        <p>Calendars</p>
      </div>
    );
  }
}

export default connect()(CalendarList);