function calculate(year) {
    return (year%4 === 0 && (year%100 !== 0 || year%400 === 0))? 29: 28;
}

const defaultCalendar = {
    1: { name: 'January', days: 31 },
    2: { name: 'February', days: 28, calculate },
    3: { name: 'March', days: 31 },
    4: { name: 'April', days: 30 },
    5: { name: 'May', days: 31 },
    6: { name: 'June', days: 30 },
    7: { name: 'July', days: 31 },
    8: { name: 'August', days: 31 },
    9: { name: 'September', days: 30 },
    10: { name: 'October', days: 31 },
    11: { name: 'November', days: 30 },
    12: { name: 'December', days: 31 },
};

export default class Calculator {
    constructor(calendarSchema = defaultCalendar) {
        this.calendarSchema = calendarSchema;
    }

    calculateDistance({ day, month, year }, totalDays) {
        const result = [];

        while(totalDays > 0) {
            const { name, days, calculate } = this.calendarSchema[month];

            const daysAdded = Math.min( ((calculate && calculate(year)) || days) - day, totalDays );

            result.push({ name, date: { day: day || 1, month, year }, daysAdded });
            totalDays -= daysAdded;

            day = 0;
            year = month === 12? year+1: year;
            month = month === 12? 1: month+1;
        }

        if(result.length) result[0].daysAdded++;

        return (result.length && result) || [{
            name: this.calendarSchema[month].name,
            date: { day, month, year },
            daysAdded: 1
        }];
    }
}