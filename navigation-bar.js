import { Component } from 'preact';
import { route } from 'preact-router';
import Utils from './utils';

export default class NavigationBar extends Component {

	createPathFromDate = (val) => {
		let newPath = Utils.dateToPathString(val);
		route(newPath);
	}

	jumpDays = (days) => {
		let targetDate = this.props.date;
		targetDate.setDate(targetDate.getDate() + days);
		this.createPathFromDate(targetDate);
	}

	jumpToYesterday = (event) => {
		this.jumpDays(-1);
	}

	jumpToTomorrow = (event) => {
		this.jumpDays(1);
	}

	handleChange = (event) => {
		let val = event.target.value;
		if (val) {
			let dateObject = Utils.dateStringToLocalDate(val);
			this.createPathFromDate(dateObject);
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
	}

	render(props, state) {
		return (
			<div id="navigation-bar-container">
				<div>
					<button onclick={this.jumpToYesterday}>Yesterday</button>
				</div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label for="target-day">Jump To Date: </label><input id="target-date" type="date" value={props.date.toISOString().substring(0, 10)} onChange={this.handleChange} />
					</form>
				</div>
				<div>
					<button onclick={this.jumpToTomorrow}>Tomorrow</button>
				</div>
			</div>
		);
	}
}