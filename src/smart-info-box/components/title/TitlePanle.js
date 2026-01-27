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
			<div className="inspector-section">
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
			</div>
			<ColorControl
				label="Title Color"
				value={color}
				onChange={(color) =>
					setAttributes({
						title: {
							...title,
							color: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						title: {
							...title,
							color: "#000000ff",
						},
					})
				}
			/>
		</>
	);
};

export default TitlePanle;
