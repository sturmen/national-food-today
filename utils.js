export default class Utils {
	static dateToPathString(inputDate) {
		let currentDate = new Date(inputDate.getTime() + 1000);
		console.log('Utils class: ' + currentDate.toISOString());
		console.log('Current day: ' + currentDate.getDate());
		return '/' + currentDate.getFullYear() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getDate();
	}

	/*
	This converts ISO-8601 date only strings to a Date object using midnight local time
	Input *must* be "yyy-MM-dd"
	Output is a Date object.
	*/
	static dateStringToLocalDate(dateString) {
		return new Date(dateString + 'T00:00:00');
	}
}