import { RangeControl } from "@wordpress/components";
import ResetIcon from "../../assets/ResetIcon";
import ColorControl from "../common/ColorControl";
import { useAttributes } from "../../context/AttributesContext";
export default function ImageOverlay({}) {
	const { attributes, setAttributes } = useAttributes();
	const { styles } = attributes;
	const { imageOverlayOpacity, imageOverlayColor } = styles;

	const onOpacityChange = (value) => {
		setAttributes({
			styles: {
				...styles,
				imageOverlayOpacity: value,
			},
		});
	};
	return (
		<>
			<br />
			<br />
			<ColorControl
				label="Overlay Color"
				value={imageOverlayColor}
				onChange={(color) =>
					setAttributes({
						styles: {
							...styles,
							imageOverlayColor: color,
						},
					})
				}
				onReset={() =>
					setAttributes({
						styles: {
							...styles,
							imageOverlayColor: "#ddd",
						},
					})
				}
			/>

			<div className="components-header">
				<p>Overlay Opacity</p>
				<button>
					<ResetIcon />
				</button>
			</div>
			<RangeControl
				value={imageOverlayOpacity}
				min={0}
				max={100}
				step={1}
				initialPosition={50}
				onChange={onOpacityChange}
				color="#884AE3"
			/>
		</>
	);
}
