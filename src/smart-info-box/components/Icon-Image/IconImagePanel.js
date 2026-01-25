import StyleRangeControl from "../common/StyleRangeControl";

const IconImagePanel = () => {
	return (
		<div className="inspector-section">
			<StyleRangeControl
				label="Icon Size"
				attributeKey="iconSize"
				marks={false}
				min={25}
				max={100}
				step={1}
			/>
		</div>
	);
};

export default IconImagePanel;
