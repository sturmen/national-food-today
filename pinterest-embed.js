const PinterestEmbed = ({ location, size }) => (
	<div stye="text-align: center;margin: auto;">
		<a data-pin-do="embedPin" data-pin-width={size} href={location}>Pin via Pinterest</a>
	</div>
);
export default PinterestEmbed;