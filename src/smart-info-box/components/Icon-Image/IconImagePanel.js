import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import CustomBoxControls from "../common/CustomBoxControls";
import CustomRangeControl from "../common/CustomRangeControl";
import TabControl from "../InfoBox/TabControl";
const IconImagePanel = () => {
	const { attributes, setAttributes } = useAttributes();
	const { mediaContainer } = attributes;
	const options = [
		{ value: '100%', label: 'Full Width' },
		{ value: 'min-content', label: 'Min Width' },
	]

	const setWidth = (value) => {
		setAttributes({
			mediaContainer: { ...mediaContainer, width: value }
		})
	}
	return (
		<>
			<TabControl options={options} value={mediaContainer.width} onChange={setWidth} />
			<br />
			<CustomRangeControl
				label="Container Height"
				attributeKey="mediaContainer"
				subKey="height"
				resetValue="min-content"
				marks={false}
				min={0}
				max={300}
				step={10}
			/>
			<CustomRangeControl
				label="Icon Size"
				attributeKey="mediaContainer"
				subKey="fontSize"
				resetValue={10}
				marks={false}
				min={10}
				max={45}
				step={1}
			/>
			<CustomRangeControl
				label="Padding"
				attributeKey="mediaContainer"
				subKey="padding"
				resetValue={0}
				marks={false}
				min={0}
				max={200}
				step={1}
			/>
			<CustomBoxControls
				label="Margin"
				attributeKey="mediaContainer"
				subKey="margin"
				deviceType={"desktop"}
				min={0}
				max={200}
				isResponsive={true}
			/>
			<br />
			<ColorControl
				label="Icon Color"
				attributesKey="mediaContainer"
				subKey="color"
				defaultColor="#cccc"
			/>
			<ColorControl
				label="Background Color"
				attributesKey="mediaContainer"
				subKey="backgroundColor"
				defaultColor="#cccc"
			/>

		</>
	);
};

export default IconImagePanel;
