import './style';
import { Component } from 'preact';
import Router from 'preact-router';
import HolidayList from './holiday-list';
import Redirect from './redirect';
import jsonData from './data.json';


export default class App extends Component {
	
	componentWillMount() {
		this.setState({
			data: jsonData
		});
	}

	render(props, state) {
		return (
			<div>
				<div>
					<h1>National Food Today</h1>
				</div>
				<Router>
					<Redirect path="/" />
					<HolidayList path="/:year/:month/:day" data={state.data} />
				</Router>
				<p style="text-align: center;"><a href="https://congressfor.me/">Check out my other site!</a></p>
			</div>
		);
	}
}
