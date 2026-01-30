import { useState } from "@wordpress/element";
import { ColorPicker, Popover } from "@wordpress/components";
import ResetIcon from "../../assets/ResetIcon";
import { useAttributes } from "../../context/AttributesContext";

const ColorControl = ({
	label = "Color",
	attributesKey,
	defaultColor = "#ffffff",
	subKey,
	placement = "left-start",
}) => {
	const { attributes, setAttributes } = useAttributes();
	const value = attributes[attributesKey]?.[subKey];
	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleColorChange = (color) => {
		setAttributes({
			[attributesKey]: {
				...attributes[attributesKey],
				[subKey]: color.hex,
			},
		});
	};

	const handleResetColor = () => {
		setAttributes({
			[attributesKey]: {
				...attributes[attributesKey],
				[subKey]: defaultColor,
			},
		});
	};

	return (
		<>
			<div className="components-header">
				<p>{label}</p>
				<span>
					<button role="button" cursor="pointer" onClick={handleResetColor}>
						<ResetIcon />
					</button>
					<svg
						onClick={() => setIsPickerOpen((prev) => !prev)}
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						style={{ cursor: "pointer" }}
					>
						<circle cx="12" cy="12" r="11.5" fill={value} stroke="#DDDDDD" />
					</svg>
				</span>
			</div>

			{isPickerOpen && (
				<Popover
					placement={placement}
					offset={8}
					onFocusOutside={() => setIsPickerOpen(false)}
				>
					<ColorPicker
						color={value}
						onChangeComplete={handleColorChange}
						disableAlpha
					/>
				</Popover>
			)}
		</>
	);
};

export default ColorControl;