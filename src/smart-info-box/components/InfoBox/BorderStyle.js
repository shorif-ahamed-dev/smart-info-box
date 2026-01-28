import { useAttributes } from "../../context/AttributesContext";
import BorderType from "./BorderType";
import ColorControl from "../common/ColorControl";
import CustomBoxControls from "../common/CustomBoxControls";
import StyleRangeControl from "../common/StyleRangeControl";
export default function BorderStyle() {
	const { attributes, setAttributes } = useAttributes();
	const { container } = attributes;
	const { borderColor } = container;
	return (
		<>
			<BorderType label="Border Type" />
			<ColorControl
				label="Border Color"
				value={borderColor}
				onChange={(color) =>
					setAttributes({
						container: {
							...container,
							borderColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						container: {
							...container,
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
			<CustomBoxControls
				label="Border Radius"
				attributeKey="container"
				subKey="borderRadius"
				deviceType={"desktop"}
				min={0}
				max={100}
				isResponsive={true}
			/>
			<br />
		</>
	);
}
