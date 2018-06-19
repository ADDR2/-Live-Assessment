import React, { Component } from "react";

export class ValidDayComponent extends Component {
	render() {
        const { day, weekend } = this.props;

        return (
            <td className={weekend? 'valid-weekend-day': 'valid-week-day'}>
                <b>{day}</b>
            </td>
        );
	}
}

export default ValidDayComponent;