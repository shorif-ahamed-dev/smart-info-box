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
				attributesKey="cta"
				subKey="textColor"
				defaultColor="#ffffff"
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
				attributesKey="cta"
				subKey="backgroundColor"
				defaultColor="#ffffff"
			/>
			<ColorControl
				label="Border Color"
				attributesKey="cta"
				subKey="borderColor"
				defaultColor="#ffffff"
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
				deviceType={"desktop"}
				min={0}
				max={100}
				isResponsive={true}
			/>
			<br />
			<CustomBoxControls
				label="Padding"
				attributeKey="cta"
				subKey="padding"
				deviceType={"desktop"}
				min={0}
				max={100}
				isResponsive={true}
			/>
			<br />
			<CustomBoxControls
				label="Margin"
				attributeKey="cta"
				subKey="margin"
				deviceType={"desktop"}
				min={0}
				max={100}
				isResponsive={true}
			/>
		</div>
	);
};

export default CtaPannel;
