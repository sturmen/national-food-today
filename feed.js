import NavigationBar from './navigation-bar';
import HolidayList from './holiday-list';

export const Feed = (props) => {
	// todo: derive these from dataset
	const minimumDate = '2017-07-14'; 
	const maximumDate = '2018-07-12';


	let pathDate = new Date();
	if (props.year && props.month && props.day) {
		pathDate = new Date(props.year, props.month - 1, props.day);
	}
	return (
		<div>
			<NavigationBar date={pathDate} min={minimumDate} max={maximumDate} />
			<HolidayList data={props.data} date={pathDate} />
		</div>
	);
};