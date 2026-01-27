import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import CustomRangeControl from "../common/CustomRangeControl";
import StyleRangeControl from "../common/StyleRangeControl";

const DescriptionPanel = () => {
	const { attributes, setAttributes } = useAttributes();
	const { description } = attributes;
	const { color } = description;
	return (
		<>
			<div className="inspector-section">
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
			</div>
			<ColorControl
				label="Description Color"
				value={color}
				onChange={(color) =>
					setAttributes({
						description: {
							...description,
							color: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						description: {
							...description,
							color: "#ddd",
						},
					})
				}
			/>
		</>
	);
};

export default DescriptionPanel;
