import React, { Component } from "react";

import ValidDayComponent from 'ValidDayComponent';
import InvalidDayComponent from 'InvalidDayComponent';

export class CalendarComponent extends Component {

    constructor() {
        super();

        this.state = {
            days: []
        };
    }

	componentWillMount() {
        const { date: { day, month, year }, daysAdded } = this.props;
        const days = [];
        let currentRow = [];
        let currentWeekDay = (new Date(`${month}/${day}/${year}`)).getDay();

        let counter = 0;
        while(counter < daysAdded) {
            if(currentWeekDay % 7 === 0) {
                days.push(currentRow);
                currentRow = [];
            }

            currentRow[currentWeekDay++ % 7] = day+(counter++);
        }
        
        currentRow[6] = currentRow[6] || undefined;
        days.push(currentRow);
        this.setState({ days });
	}

	render() {
        const { name, date: { year } } = this.props;
        const { days } = this.state;
        
        const generateRows = () => {
            return days.map( (row, index) => {
                const squares = [];

                for(let id = 0; id < row.length; id++) {
                    squares.push(
                        !row[id]?
                            <InvalidDayComponent key={id}/>
                        :
                            <ValidDayComponent key={id} day={row[id]} weekend={id < 1 || id > 5}/>
                    );
                }

                return (<tr key={index}>{ squares }</tr>);
            });
        };

        return (
            <div className="calendar-month">
                <table className="week-days">
                    <tbody>
                        <tr className="month-header">
                            <td><b>S</b></td>
                            <td><b>M</b></td>
                            <td><b>T</b></td>
                            <td><b>W</b></td>
                            <td><b>T</b></td>
                            <td><b>F</b></td>
                            <td><b>S</b></td>
                        </tr>
                        <tr>
                            <th colSpan="7" className="month-name"><b>{ `${name} ${year}` }</b></th>
                        </tr>
                        { generateRows() }
                    </tbody>
                </table>
            </div>
        );
	}
}

export default CalendarComponent;