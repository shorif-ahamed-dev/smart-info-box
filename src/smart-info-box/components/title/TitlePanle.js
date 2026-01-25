import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import StyleRangeControl from "../common/StyleRangeControl";

const TitlePanle = () => {
	const { attributes, setAttributes } = useAttributes();
	const { styles } = attributes;
	const { titleColor } = styles;
	return (
		<>
			<div className="inspector-section">
				<StyleRangeControl
					label="Title Font Size"
					attributeKey="titleFontSize"
					marks={false}
					min={10}
					max={100}
					step={1}
				/>
			</div>
			<ColorControl
				label="Border Color"
				value={titleColor}
				onChange={(color) =>
					setAttributes({
						styles: {
							...styles,
							titleColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						styles: {
							...styles,
							titleColor: "#000000ff",
						},
					})
				}
			/>
		</>
	);
};

export default TitlePanle;
