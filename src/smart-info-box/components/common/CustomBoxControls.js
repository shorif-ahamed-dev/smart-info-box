import { useEffect, useState } from "@wordpress/element";
import { dispatch, useSelect } from "@wordpress/data";
import "../../assets/css/customBoxControls.scss";
import { useAttributes } from "../../context/AttributesContext";
import ResetIcon from "../../assets/ResetIcon";
import PixelIcon from "../../assets/PixelIcon";
import Responsive from "../Responsive";

const expand = (v = "") => {
	// Handle empty or invalid values
	if (!v || typeof v !== 'string') {
		return [0, 0, 0, 0];
	}

	const p = v.split(" ").map((x) => parseInt(x) || 0);
	return p.length === 1
		? [p[0], p[0], p[0], p[0]]
		: p.length === 2
			? [p[0], p[1], p[0], p[1]]
			: p.length === 3
				? [p[0], p[1], p[2], p[1]]
				: p.length === 4
					? p
					: [0, 0, 0, 0];
};

export default function CustomBoxControls({
	label,
	attributeKey,
	subKey,
	min = 0,
	max = 100,
	step = 1,
	unit = "px",
	isResponsive = false,
}) {
	const { attributes, setAttributes } = useAttributes();
	const isSiteEditor = document.body.classList.contains("site-editor");
	const store = isSiteEditor ? "core/edit-site" : "core/edit-post";
	const deviceType = useSelect(
		(select) =>
			select(store)?.__experimentalGetPreviewDeviceType?.(),
		[]
	);
	const getStyleValue = () => {
		if (isResponsive) {
			const responsiveValue = attributes[attributeKey]?.[subKey]?.[deviceType];
			return typeof responsiveValue === 'string' ? responsiveValue : "";
		} else {
			const directValue = attributes[attributeKey]?.[subKey];
			return typeof directValue === 'string' ? directValue : "";
		}
	};

	const style = getStyleValue();
	const [values, setValues] = useState([0, 0, 0, 0]);
	const [linked, setLinked] = useState(true);

	useEffect(() => setValues(expand(style)), [style, deviceType]);

	const update = (v) => {
		const newValue = v.map((n) => `${n}${unit}`).join(" ");

		if (isResponsive) {
			setAttributes({
				[attributeKey]: {
					...attributes[attributeKey],
					[subKey]: {
						...(attributes[attributeKey]?.[subKey] || {}),
						[deviceType]: newValue,
					},
				},
			});
		} else {
			setAttributes({
				[attributeKey]: {
					...attributes[attributeKey],
					[subKey]: newValue,
				},
			});
		}
	};

	const change = (i, val) => {
		const n = Math.min(max, Math.max(min, +val || 0));
		const next = linked
			? [n, n, n, n]
			: values.map((x, idx) => (idx === i ? n : x));

		setValues(next);
		update(next);
	};

	const reset = () => {
		const resetValues = [0, 0, 0, 0];
		setValues(resetValues);
		update(resetValues);
	};




	const setDevice = (device) => {
		dispatch(store).__experimentalSetPreviewDeviceType(device);
	};

	return (
		<>
			<div className="components-header">
				<p>
					{label}
					<Responsive deviceType={deviceType} setDevice={setDevice} />
				</p>
				<span onClick={reset}>
					<ResetIcon />
					<PixelIcon />
				</span>
			</div>

			<div className="stepper-container">
				<div className="stepper-box-groups">
					{values.map((v, i) => (
						<div className="stepper-box" key={i}>
							<input
								type="number"
								min={min}
								max={max}
								step={step}
								value={v}
								onChange={(e) => change(i, e.target.value)}
							/>
							<div
								className={
									subKey === "borderRadius"
										? `counter-corner-${i}`
										: `padding-margin-indicator-${i}`
								}
							/>
						</div>
					))}
				</div>

				<button
					className={`link-button ${!linked ? "active" : ""}`}
					onClick={() => setLinked((l) => !l)}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M15.6 7.2H14v1.5h1.6a3.7 3.7 0 010 7.4H14v1.5h1.6a5.2 5.2 0 000-10.4ZM4.7 12.4a3.7 3.7 0 013.7-3.7H10V7.2H8.4a5.2 5.2 0 000 10.4H10v-1.5H8.4a3.7 3.7 0 01-3.7-3.7ZM9.3 13.3h5.3v-1.5H9.3v1.5Z" />
					</svg>
				</button>
			</div>
		</>
	);
}