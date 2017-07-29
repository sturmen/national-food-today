import { Component } from 'preact';
import HolidayCard from './holiday-card';

export default class HolidayList extends Component {
	render(props, state) {
		let currentDate = new Date(props.date.getTime() + 1000);
		let currentHolidays = props.data.filter(holiday => {
			let startDate = new Date(holiday.year, holiday.month - 1, holiday.day);
			let endDate = new Date(holiday.year, holiday.month - 1, holiday.day);
			let durationDays = holiday.duration;
			endDate.setDate(endDate.getDate() + durationDays);
			return startDate <= currentDate && currentDate <= endDate;
		});
		currentHolidays.sort((a, b) => {
			let diff = a.duration - b.duration;
			if (diff === 0) {
				diff = 1 - a.food.localeCompare(b.food);
			}
			return diff;
		});
		return (
			<div class="list">
				{currentHolidays.map(holiday => (
					<HolidayCard holidayObj={holiday} />
				))}
			</div>
		);
	}
}