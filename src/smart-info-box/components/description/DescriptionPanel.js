import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import StyleRangeControl from "../common/StyleRangeControl";

const DescriptionPanel = () => {
	const { attributes, setAttributes } = useAttributes();
	const { styles } = attributes;
	const { descriptionColor } = styles;
	return (
		<>
			<div className="inspector-section">
				<StyleRangeControl
					label="Description Font Size"
					attributeKey="descriptionFontSize"
					marks={false}
					min={10}
					max={100}
					step={1}
				/>
			</div>
			<ColorControl
				label="Description Color"
				value={descriptionColor}
				onChange={(color) =>
					setAttributes({
						styles: {
							...styles,
							descriptionColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						styles: {
							...styles,
							descriptionColor: "#ffffff",
						},
					})
				}
			/>
		</>
	);
};

export default DescriptionPanel;
