import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import CustomBoxControls from "../common/CustomBoxControls";
import CustomRangeControl from "../common/CustomRangeControl";
import BorderType from "../InfoBox/BorderType";

const CtaPannel = () => {
	const { attributes, setAttributes } = useAttributes();
	const { cta } = attributes;
	const { buttonTextColor, backgroundColor, borderColor } = cta;
	return (
		<div className="inspector-section">
			<CustomRangeControl
				label="Button Font Size"
				attributeKey="cta"
				subKey="fontSize"
				resetValue={18}
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
						cta: {
							...cta,
							textColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						cta: {
							...cta,
							textColor: "#000000ff",
						},
					})
				}
			/>
			<CustomRangeControl
				label="Icon Size"
				attributeKey="cta"
				subKey="iconSize"
				resetValue={18}
				marks={false}
				min={10}
				max={100}
				step={1}
			/>
			<BorderType
				attributePath="cta"
				label="CTA Border"
			/>
			<ColorControl
				label="Background Color"
				value={backgroundColor}
				onChange={(color) =>
					setAttributes({
						cta: {
							...cta,
							backgroundColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						cta: {
							...cta,
							backgroundColor: "#cccc",
						},
					})
				}
			/>
			<ColorControl
				label="Border Color"
				value={borderColor}
				onChange={(color) =>
					setAttributes({
						cta: {
							...cta,
							borderColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						cta: {
							...cta,
							borderColor: "#cccc",
						},
					})
				}
			/>
			<CustomRangeControl
				label="Border Width"
				attributeKey="cta"
				subKey="borderWidth"
				resetValue={1}
				marks={false}
				min={1}
				max={10}
				step={1}
			/>
			<CustomBoxControls
				label="Border Radius"
				attributeKey="cta"
				subKey="borderRadius"
			/>
			<br />
			<CustomBoxControls
				label="Padding"
				attributeKey="cta"
				subKey="padding"
				min={0}
				max={200}
			/>
			<br />
			<CustomBoxControls
				label="Margin"
				attributeKey="cta"
				subKey="margin"
				min={0}
				max={200}
			/>
		</div>
	);
};

export default CtaPannel;
