import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import StyleRangeControl from "../common/StyleRangeControl";

const CtaPannel = () => {
	const { attributes, setAttributes } = useAttributes();
	const { styles } = attributes;
	const { buttonTextColor } = styles;
	return (
		<div className="inspector-section">
			<StyleRangeControl
				label="Button Font Size"
				attributeKey="buttonFontSize"
				marks={false}
				min={10}
				max={100}
				step={1}
			/>
			<ColorControl
				label="Button Text Color"
				value={buttonTextColor}
				onChange={(color) =>
					setAttributes({
						styles: {
							...styles,
							buttonTextColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						styles: {
							...styles,
							buttonTextColor: "#000000ff",
						},
					})
				}
			/>
		</div>
	);
};

export default CtaPannel;
