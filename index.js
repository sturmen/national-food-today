import './style';
import { Component } from 'preact';
import Router from 'preact-router';
import { Feed } from './feed';
import Redirect from './redirect';
import jsonData from './data.json';

const App = (props) => (
	<div>
		<div>
			<h1>National Food Today</h1>
		</div>
		<Router>
			<Redirect path="/" />
			<Feed path="/:year/:month/:day" data={jsonData} />
		</Router>
		<p style="text-align: center;"><a href="https://congressfor.me/">Check out my other site!</a></p>
	</div>
);

export default App;