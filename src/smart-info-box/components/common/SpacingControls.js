import { useEffect, useState } from "@wordpress/element";
import DesktopIcon from "../../assets/styleLayoutIcon/DesktopIcon";
import "../../assets/css/customBoxControls.scss";
import { useAttributes } from "../../context/AttributesContext";
import ResetIcon from "../../assets/ResetIcon";
import PixelIcon from "../../assets/PixelIcon";

export default function SpacingControls({
	label,
	attributeKey = "padding",
	min = 0,
	max = 100,
	step = 4,
	unit = "px",
}) {
	const { attributes, setAttributes } = useAttributes();
	const styleValue = attributes.styles?.[attributeKey];
	const [values, setValues] = useState([0, 0, 0, 0]);
	const [isLinked, setIsLinked] = useState(true);

	const parseValue = (value) => {
		if (!value) return [0, 0, 0, 0];

		const parts = value.split(" ").map((v) => parseInt(v) || 0);

		if (parts.length === 1) return [parts[0], parts[0], parts[0], parts[0]];
		if (parts.length === 2) return [parts[0], parts[1], parts[0], parts[1]];
		if (parts.length === 3) return [parts[0], parts[1], parts[2], parts[1]];

		return parts.slice(0, 4);
	};

	const serializeValue = (vals) => {
		const [t, r, b, l] = vals;

		if (t === r && t === b && t === l) {
			return `${t}${unit}`;
		}
		if (t === b && r === l) {
			return `${t}${unit} ${r}${unit}`;
		}
		if (r === l) {
			return `${t}${unit} ${r}${unit} ${b}${unit}`;
		}
		return `${t}${unit} ${r}${unit} ${b}${unit} ${l}${unit}`;
	};

	useEffect(() => {
		setValues(parseValue(styleValue));
	}, [styleValue, attributeKey]);

	const updateAttributes = (next) => {
		setAttributes({
			styles: {
				...attributes.styles,
				[attributeKey]: serializeValue(next),
			},
		});
	};

	const onChangeValue = (index, value) => {
		const numeric = Math.min(max, Math.max(min, Number(value) || 0));

		setValues((prev) => {
			const next = [...prev];

			if (isLinked) {
				next.fill(numeric);
			} else {
				next[index] = numeric;
			}

			updateAttributes(next);
			return next;
		});
	};

	const toggleLink = () => {
		setIsLinked((prev) => {
			const next = !prev;

			if (next) {
				const unified = values[0] || 0;
				const synced = [unified, unified, unified, unified];
				setValues(synced);
				updateAttributes(synced);
			}

			return next;
		});
	};

	const resetValues = () => {
		const reset = [0, 0, 0, 0];
		setValues(reset);
		updateAttributes(reset);
	};

	return (
		<>
			<div className="components-header">
				<p>
					{label} <DesktopIcon />
				</p>
				<span onClick={resetValues} title="Reset">
					<ResetIcon />
					<PixelIcon />
				</span>
			</div>

			<div className="stepper-container">
				<div className="stepper-box-groups">
					{values.map((value, index) => (
						<div className="stepper-box" key={index}>
							<input
								type="number"
								min={min}
								max={max}
								step={step}
								value={value}
								onChange={(e) => onChangeValue(index, e.target.value)}
							/>
							<div className={`padding-margin-indicator-${index}`} />
						</div>
					))}
				</div>

				<button
					className={`link-button ${!isLinked ? "active" : ""}`}
					onClick={toggleLink}
					title={isLinked ? "Unlink values" : "Link values"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2S18.4 7.2 15.6 7.2ZM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7ZM9.3 13.3h5.3v-1.5H9.3v1.5Z" />
					</svg>
				</button>
			</div>
		</>
	);
}
