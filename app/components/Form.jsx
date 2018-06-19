import React, { Component } from "react";
import { connect } from 'react-redux';

import { updateForm } from 'FormReducer';
import Validator from 'Validator';

export class Form extends Component {

	validValues() {
		const { startDate, days, code } = this.props;
		const { validDate, validDays, validCode } = Validator;

		return validDate(startDate) && validDays(days) && validCode(code);
	}

	onInput(key, { target: { value } }) {
		const { updateForm } = this.props;

		updateForm({ [key]: value });
	}

	onSubmit = event => {
		event.preventDefault();
		const { history: { push }, startDate, days, code, updateForm } = this.props;

		if(this.validValues()) {
			updateForm({ error: undefined });
			push(`/calendar?date=${startDate}&days=${days}&code=${code}`);
		} else
			updateForm({ error: 'Not valid data' });
	}

	render() {

		const { startDate, days, code, error } = this.props;
		const { validDate, validDays, validCode } = Validator;

		return (
			<div className="calendar-form-wrapper">
				<h1>Amaro's Calendar</h1>
				<form onSubmit={this.onSubmit} className="calendar-form">
					<input
						type="text"
						placeholder="Start Date (dd/mm/yyyy)"
						onInput={this.onInput.bind(this, 'startDate')}
						value={startDate || ""}
						className={ startDate === undefined? '': (validDate(startDate)? 'success-input': 'error-input') }
					/>
					<br/>
					<input
						type="number"
						placeholder="Days"
						min="0"
						onInput={this.onInput.bind(this, 'days')}
						value={days || ""}
						className={ days === undefined? '': (validDays(days)? 'success-input': 'error-input') }
					/>
					<br/>
					<input
						type="text"
						placeholder="Country Code"
						onInput={this.onInput.bind(this, 'code')}
						value={code || ""}
						className={ code === undefined? '': (validCode(code)? 'success-input': 'error-input') }
					/>
					<br/>
					<button type="submit">Submit</button>
					<br/>
				</form>
				{ error && <div className="calendar-form-alert">{ error }</div> }
			</div>
		);
	}
}

const mS = ({ Form }) => ({ ...Form });

const mD = { updateForm };

export default connect(mS, mD)(Form);