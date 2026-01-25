import { useState } from "@wordpress/element";
import { ColorPicker, Popover } from "@wordpress/components";
import ResetIcon from "../../assets/ResetIcon";

const ColorControl = ({
	label = "Color",
	value = "#ffffff",
	onChange,
	onReset,
	placement = "left-start",
}) => {
	const [isPickerOpen, setIsPickerOpen] = useState(false);
	const handleColorChange = (color) => {
		onChange?.(color.hex);
	};
	return (
		<>
			<div className="components-header">
				<p>{label}</p>
				<span>
					{onReset && <ResetIcon onClick={onReset} />}
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
