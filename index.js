import './style';
import Router from 'preact-router';
import { Feed } from './feed';
import jsonData from './data.json';

const App = (props) => (
	<div>
		<div>
			<h1>National Food Today</h1>
		</div>
		<Router>
			<Feed path="/" data={jsonData} />
			<Feed path="/date/:year/:month/:day" data={jsonData} />
		</Router>
		<p style="text-align: center;"><a href="mailto:admin@nationalfood.today">submissions/contact</a> | <a target="_blank" rel="noopener noreferrer" href="https://congressfor.me/">Check out my other site!</a></p>
	</div>
);

export default App;