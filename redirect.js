import { Component } from 'preact';
import { route } from 'preact-router';

export default class Redirect extends Component {
	componentWillMount() {
		let currentDate = new Date();
		route('/' + currentDate.getFullYear() + '/' + (currentDate.getMonth() + 1) + '/' + (currentDate.getDate()));
	}

	render() {
		return null;
	}
}