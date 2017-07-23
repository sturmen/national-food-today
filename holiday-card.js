export const HolidayCard = ({ holidayObj }) => {
	const holidayName = '' + holidayObj.scope + ' ' + holidayObj.food + ' ' + holidayObj.unit;
	let intro = 'Hi!';
	if (holidayObj.duration > 1) {
		intro = 'This ' + holidayObj.unit.toLowerCase() + ' is ' + holidayName + '!';
	}
	else {
		intro = 'Today is ' + holidayName + '!';
	}
	return (
		<div class="holiday-card">
			<div>
				<h2>
					Happy {holidayName}!
				</h2>
			</div>
			<p>{intro} <a href={'https://www.google.com/search?q=' + holidayObj.food.replace(/\W/g, '+').toLowerCase() + '+recipe'}>Get a {holidayObj.food.toLowerCase()} recipe</a>, whip it up and then tell the world how much you love it. Post it with the hashtag <a href="https://www.instagram.com/explore/tags/nationalfoodtoday/">#nationalfoodtoday</a> on Twitter, Instagram, or Pinterest for a chance to be featured!</p>
			<div align="right">
				<a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-text={'I\'m celebrating ' + holidayObj.scope + ' ' + holidayObj.food + ' ' + holidayObj.unit + '! Find out what day it is today.'} data-url="https://nationalfood.today" data-hashtags="nationalfoodtoday" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8" />
			</div>
		</div>
	);
};
