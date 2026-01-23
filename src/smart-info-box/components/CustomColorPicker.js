import { useState } from "@wordpress/element";
import { ColorPicker, Popover } from "@wordpress/components";
import ResetIcon from "../assets/ResetIcon";

export default function CustomColorPicker({
	label = "Color",
	value = "#ffffff",
	onChange,
	onReset,
	placement = "left-start",
}) {
	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleColorChange = (color) => {
		onChange?.(color.hex);
	};

	return (
		<>
			<div className="components-header">
				<p>{label}</p>
				<span>
					{onReset && (
						<button onClick={onReset}>
							<ResetIcon />
						</button>
					)}

					<div
						onClick={() => setIsPickerOpen((prev) => !prev)}
						style={{
							backgroundColor: value,
							height: "24px",
							width: "24px",
							borderRadius: "50%",
							border: "2px solid #DDD",
							cursor: "pointer",
						}}
					/>
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
}
