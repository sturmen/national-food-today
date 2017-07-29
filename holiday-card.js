import PinterestEmbed from './pinterest-embed';
import TweetButton from './twitter-button';

function checkForVowel(input) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.includes(input.charAt(0).toLowerCase())) {
		return 'an';
	}
	return 'a';
}

const HolidayCard = ({ holidayObj }) => {
	const holidayName = '' + holidayObj.scope + ' ' + holidayObj.food + ' ' + holidayObj.unit;
	let intro = 'Hi!';
	if (holidayObj.duration > 1) {
		intro = 'This ' + holidayObj.unit.toLowerCase() + ' is ' + holidayName + '!';
	}
	else {
		intro = 'Today is ' + holidayName + '!';
	}
	let tweetMsg = 'I\'m celebrating ' + holidayObj.scope + ' ' + holidayObj.food + ' ' + holidayObj.unit + '! Find out what food holiday it is today!';

	return (
		<div class="holiday-card">
			<div>
				<h2>
					Happy {holidayName}!
				</h2>
			</div>
			<p><a href={'https://www.google.com/search?q=' + holidayObj.food.replace(/\W/g, '+').toLowerCase() + '+recipe'}>Get {checkForVowel(holidayObj.food)} {holidayObj.food.toLowerCase()} recipe</a>, whip it up and then tell the world how much you love it. Post it with the hashtag <a href="https://www.instagram.com/explore/tags/nationalfoodtoday/">#nationalfoodtoday</a> on Instagram, Twitter, or Pinterest for a chance to be featured!</p>
			{holidayObj.pinterest_embed &&
				<PinterestEmbed location={holidayObj.pinterest_embed} size="medium" />
			}
			<div align="right">
				<TweetButton msg={tweetMsg} />
			</div>
		</div>
	);
};
export default HolidayCard;
