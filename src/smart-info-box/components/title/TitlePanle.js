import ColorControl from "../common/ColorControl";
import CustomRangeControl from "../common/CustomRangeControl";

const TitlePanle = () => {
	return (
		<>
			<CustomRangeControl
				label="Title Font Size"
				attributeKey="title"
				subKey="fontSize"
				resetValue={18}
				marks={false}
				min={10}
				max={100}
				step={1}
			/>
			<ColorControl
				label="Title Color"
				attributesKey="title"
				subKey="color"
				defaultColor="black"
			/>
		</>
	);
};

export default TitlePanle;
