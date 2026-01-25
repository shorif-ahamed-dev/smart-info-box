import { RangeControl } from "@wordpress/components";
import { useAttributes } from "../../context/AttributesContext";
import ResetIcon from "../../assets/ResetIcon";

export default function StyleRangeControl({
	label,
	attributeKey, // "borderWidth" | "borderRadius"
	min = 0,
	max = 50,
	step = 1,
	marks = true,
	unit = "px",
}) {
	const { attributes, setAttributes } = useAttributes();
	const value = attributes.styles?.[attributeKey];

	const handleChange = (newValue) => {
		setAttributes({
			styles: {
				...attributes.styles,
				[attributeKey]: newValue,
			},
		});
	};

	const handleReset = () => {
		setAttributes({
			styles: {
				...attributes.styles,
				[attributeKey]: attributeKey === "iconSize" ? 45 : 1,
			},
		});
	};

	return (
		<>
			<div className="components-header">
				<p>{label}</p>
				<button onClick={handleReset}>
					<ResetIcon onClick={handleReset} />
				</button>
			</div>
			<RangeControl
				value={value}
				onChange={handleChange}
				min={min}
				max={max}
				step={step}
				color="#884AE3"
				trackColor="#884AE3"
				marks={marks}
			/>
		</>
	);
}
