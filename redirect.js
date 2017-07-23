import { Component } from 'preact';
import { route } from 'preact-router';
import Utils from './utils';

export default class Redirect extends Component {
	componentWillMount() {
		let pathString = Utils.dateToPathString(new Date());
		route(pathString);
	}

	render() {
		return null;
	}
}