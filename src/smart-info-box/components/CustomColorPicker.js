import { useState } from "@wordpress/element";
import { Button, ColorPicker, PanelBody, Popover } from "@wordpress/components";
import ResetIcon from "../assets/ResetIcon";
import { useAttributes } from "../context/AttributesContext";
export default function CustomColorPicker({}) {
	const { attributes, setAttributes } = useAttributes();
	const { styles } = attributes;
	const { backgroundColor } = styles;
	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const onColorChange = (value) => {
		setAttributes({
			styles: {
				...styles,
				backgroundType: "solid",
				backgroundColor: value.hex,
			},
		});
	};
	return (
		<>
			<div className="components-header">
				<p>Solid Color</p>
				<span>
					<ResetIcon />
					<div
						variant="secondary"
						onClick={() => setIsPickerOpen(!isPickerOpen)}
						style={{
							backgroundColor: backgroundColor,
							height: "24px",
							width: "24px",
							borderRadius: "50%",
							border: "2px solid #DDD",
							cursor: "pointer",
						}}
					></div>
				</span>
			</div>

			{isPickerOpen && (
				<Popover position="middle left">
					<ColorPicker
						color={backgroundColor}
						onChangeComplete={onColorChange}
						disableAlpha
					/>
				</Popover>
			)}
		</>
	);
}
