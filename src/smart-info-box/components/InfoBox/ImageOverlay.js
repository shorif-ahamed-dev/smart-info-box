import { RangeControl } from "@wordpress/components";
import ResetIcon from "../../assets/ResetIcon";
import ColorControl from "../common/ColorControl";
import { useAttributes } from "../../context/AttributesContext";
export default function ImageOverlay({ }) {
	const { attributes, setAttributes } = useAttributes();
	const { styles, container } = attributes;
	const { imageOverlayOpacity, imageOverlayColor } = container;

	const onOpacityChange = (value) => {
		setAttributes({
			container: {
				...container,
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
				attributesKey="container"
				subKey="imageOverlayColor"
				defaultColor="#cccc"
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
