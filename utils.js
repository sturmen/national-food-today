export default class Utils {
	static dateToPathString(inputDate) {
		let currentDate = new Date(inputDate.getTime() + 1000);
		return '/date/' + currentDate.getFullYear() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getDate();
	}

	/**
	 * This converts ISO-8601 date only strings to a Date object using midnight local time
	 * @param {string} dateString MUST be "yyy-MM-dd"
	 * @return {Date} midnight local time for this date
	 */
	static dateStringToLocalDate(dateString) {
		return new Date(dateString + 'T00:00:00');
	}

	static pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}
}