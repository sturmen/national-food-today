export const Result = ({ result }) => {
	let tweetmessage = 'I\'m celebrating ' + result.scope + ' '+ result.food + ' '+ result.unit + '! Find out what day it is today.';
	// let hashtag = result.food.replace(/\W/g, '').toLowerCase();
	return (
		<div class="result">
			<div>
				<h3>
					Happy {result.scope} {result.food} {result.unit}!
				</h3>
			</div>
			<p>Tell the world you love it!</p>
			<div align="right">
				<a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-text={tweetmessage} data-url="https://nationalfood.today" data-hashtags="nationalfoodtoday" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8" />
			</div>
		</div>
	);
};
