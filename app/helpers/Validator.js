const dateRegex = /^[1-9][0-9]?\/[1-9][0-9]?\/[1-9][0-9]*$/;

export default class Validator {
    static validDate(date) {
		return typeof date === 'string' && dateRegex.test(date);
	}

	static validDays(days) {
		try {
			days = parseInt(days, 10);
			return typeof days === 'number' && days >= 0;
		} catch(error) {
			console.log(error);
			return false;
		}
	}

	static validCode(code) {
		return typeof code === 'string' && code;
	}
}