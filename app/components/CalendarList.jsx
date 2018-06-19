import React, { Component } from "react";

import Validator from 'Validator';
import Calculator from 'Calculator';
import CalendarComponent from 'CalendarComponent';

export class CalendarList extends Component {

	constructor() {
		super();

		this.calculator = new Calculator();

		this.state = {
			display: false
		};
	}

	componentWillMount() {
		const { location: { search } } = this.props;
		const parser = new URLSearchParams(search);
		const date = parser.get('date');
		const days = parser.get('days');
		const { validDate, validDays, validCode } = Validator;

		if( validDate(date) && validDays(days) && validCode(parser.get('code')) ) {
			const stringDate = date.split('/');

			this.setState({
				display: true,
				months: this.calculator.calculateDistance(
					{
						day: parseInt(stringDate[0], 10),
						month: parseInt(stringDate[1], 10),
						year: parseInt(stringDate[2], 10)
					},
					parseInt(days, 10)
				)
			});
		} else this.setState({ display: false });
	}

	render() {
		const { display, months } = this.state;

		const monthComponents = () => months.map( (month, index) => <CalendarComponent {...month} key={index}/> );

		if(display) {
			return (
				<div className="calendar-list-wrapper">
					<h1>Resulting Calendar</h1>
					{ monthComponents() }
				</div>
			);
		} else {
			return (
				<div className="alert">Not valid data</div>
			);
		}
	}
}

export default CalendarList;