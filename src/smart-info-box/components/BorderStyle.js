
import BorderType from "./BorderType";
import BoxShadow from "./BoxShadow";
import CustomBoxControls from "./CustomBoxControls";
import StyleColorControl from "./StyleColorControl";
import StyleRangeControl from "./StyleRangeControl";
export default function BorderStyle() {
	return (
		<>
			<BorderType label="Border Type" />
			<StyleColorControl
				label="Border Colors"
				attributeKey="borderColor"
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
