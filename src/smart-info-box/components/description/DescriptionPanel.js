import ColorControl from "../common/ColorControl";
import CustomRangeControl from "../common/CustomRangeControl";

const DescriptionPanel = () => {
	return (
		<>
			<CustomRangeControl
				label="Title Font Size"
				attributeKey="description"
				subKey="fontSize"
				resetValue={18}
				marks={false}
				min={10}
				max={100}
				step={1}
			/>
			<ColorControl
				label="Description Color"
				attributesKey="description"
				subKey="color"
				defaultColor="#ffffff"
			/>
		</>
	);
};

export default DescriptionPanel;
