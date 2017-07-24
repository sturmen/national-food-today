import NavigationBar from './navigation-bar';
import HolidayList from './holiday-list';

export const Feed = (props) => {
	let pathDate = new Date();
	if (props.year && props.month && props.day) {
		pathDate = new Date(props.year, props.month - 1, props.day);
	}
	return (
		<div>
			<NavigationBar date={pathDate} />
			<HolidayList data={props.data} date={pathDate} />
		</div>
	);
};