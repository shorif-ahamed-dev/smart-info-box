import BorderType from "./BorderType";
import ColorControl from "../common/ColorControl";
import CustomBoxControls from "../common/CustomBoxControls";
import StyleRangeControl from "../common/StyleRangeControl";
export default function BorderStyle() {

	return (
		<>
			<BorderType label="Border Type" />
			<ColorControl
				label="Border Color"
				attributesKey="container"
				subKey="borderColor"
				defaultColor="#cccc"
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
