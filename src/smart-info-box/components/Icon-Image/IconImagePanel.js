import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import CustomRangeControl from "../common/CustomRangeControl";
import StyleRangeControl from "../common/StyleRangeControl";

const IconImagePanel = () => {
	const { attributes, setAttributes } = useAttributes();
	const { mediaContainer } = attributes;
	return (
		<div className="inspector-section">
			<StyleRangeControl
				label="Icon Size"
				attributeKey="iconSize"
				subKey="size"
				marks={false}
				min={25}
				max={100}
				step={1}
			/>
			<CustomRangeControl
				label="Icon Size"
				attributeKey="iconImage"
				subKey="size"
				resetValue={45}
				marks={false}
				min={10}
				max={100}
				step={1}
			/>
			<CustomRangeControl
				label="Padding"
				attributeKey="mediaContainer"
				subKey="padding"
				resetValue={45}
				marks={false}
				min={0}
				max={100}
				step={1}
			/>
			<br />
			<ColorControl
				label="Background Color"
				value={mediaContainer.backgroundColor}
				onChange={(color) =>
					setAttributes({
						mediaContainer: {
							...mediaContainer,
							backgroundColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						mediaContainer: {
							...mediaContainer,
							backgroundColor: "#ffffff",
						},
					})
				}
			/>
			<ColorControl
				label="Icon Color"
				value={mediaContainer.color}
				onChange={(color) =>
					setAttributes({
						mediaContainer: {
							...mediaContainer,
							color: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						mediaContainer: {
							...mediaContainer,
							color: "#ffffff",
						},
					})
				}
			/>
		</div>
	);
};

export default IconImagePanel;
