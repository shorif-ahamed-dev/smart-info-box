import { useAttributes } from "../../context/AttributesContext";
import BorderType from "./BorderType";
import ColorControl from "../common/ColorControl";
import CustomBoxControls from "../common/CustomBoxControls";
import StyleRangeControl from "../common/StyleRangeControl";
export default function BorderStyle() {
	const { attributes, setAttributes } = useAttributes();
	const { styles } = attributes;
	const { borderColor } = styles;
	return (
		<>
			<BorderType label="Border Type" />
			<ColorControl
				label="Border Color"
				value={borderColor}
				onChange={(color) =>
					setAttributes({
						styles: {
							...styles,
							borderColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						styles: {
							...styles,
							borderColor: "#cccc",
						},
					})
				}
			/>
			<StyleRangeControl
				label="Border Width"
				attributeKey="borderWidth"
				min={1}
				max={5}
				step={1}
			/>
			<CustomBoxControls label="Border Radius" attributeKey="borderRadius" />
			<br />
		</>
	);
}
