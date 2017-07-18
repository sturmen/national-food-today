import './style';
import { Component } from 'preact';
import { Result } from './result';
import jsonData from './data.json';

export default class App extends Component {
	
	componentWillMount() {
		this.setState({
			data: jsonData
		});
	}

	render(props, state) {
		let currentDate = new Date();
		let currentHolidays = state.data.filter(holiday => {
			let startDate = new Date(holiday.year, holiday.month - 1, holiday.day);
			let endDate = new Date(holiday.year, holiday.month - 1, holiday.day);
			let durationDays = holiday.duration;
			endDate.setDate(endDate.getDate() + durationDays);
			return startDate <= currentDate && currentDate <= endDate;
		});
		currentHolidays.sort((a,b) => { return a.duration - b.duration; });
		return (
			<div>
				<h1>National Food Today</h1>
				<div class="list">
					{ currentHolidays.map( result => (
						<Result result={result} />
					)) }
				</div>
			</div>
		);
	}
}
