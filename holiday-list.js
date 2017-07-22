import { Component } from 'preact';
import { Result } from './result';


export default class HolidayList extends Component {
	render(props, state) {
		let dateString = '' + props.month + '-' + props.day + '-' + props.year;
		let currentDate = new Date(new Date(dateString).getTime() + 1000);
		let currentHolidays = props.data.filter(holiday => {
			let startDate = new Date(holiday.year, holiday.month - 1, holiday.day);
			let endDate = new Date(holiday.year, holiday.month - 1, holiday.day);
			let durationDays = holiday.duration;
			endDate.setDate(endDate.getDate() + durationDays);
			return startDate <= currentDate && currentDate <= endDate;
		});
		currentHolidays.sort((a, b) => a.duration - b.duration);
		return (
			<div class="list">
				{currentHolidays.map(result => (
					<Result result={result} />
				))}
			</div>
		);
	}
}