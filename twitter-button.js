const TweetButton = ({ msg }) => (<span>
	<a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-text={msg} data-url="https://nationalfood.today" data-hashtags="nationalfoodtoday" data-show-count="false">Tweet</a>
</span>);
export default TweetButton;