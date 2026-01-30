import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import CustomRangeControl from "../common/CustomRangeControl";
import StyleRangeControl from "../common/StyleRangeControl";

const TitlePanle = () => {
	const { attributes, setAttributes } = useAttributes();
	const { title } = attributes;
	const { color, fontSize } = title;
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
