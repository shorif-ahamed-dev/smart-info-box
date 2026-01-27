import { useEffect, useState } from "@wordpress/element";
import DesktopIcon from "../../assets/styleLayoutIcon/DesktopIcon";
import "../../assets/css/customBoxControls.scss";
import { useAttributes } from "../../context/AttributesContext";
import ResetIcon from "../../assets/ResetIcon";
import PixelIcon from "../../assets/PixelIcon";

const expand = (v = "") => {
	const p = v?.split(" ").map((x) => parseInt(x) || 0);
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
}) {
	const { attributes, setAttributes } = useAttributes();
	const style = attributes[attributeKey]?.[subKey] || "";

	const [values, setValues] = useState([0, 0, 0, 0]);
	const [linked, setLinked] = useState(true);

	useEffect(() => setValues(expand(style)), [style]);

	const update = (v) => {
		setAttributes({
			[attributeKey]: {
				...attributes[attributeKey],
				[subKey]: v.map((n) => `${n}${unit}`).join(" "),
			},
		});
	};

	const change = (i, val) => {
		const n = Math.min(max, Math.max(min, +val || 0));
		setValues((p) => {
			const next = linked
				? [n, n, n, n]
				: p.map((x, idx) => (idx === i ? n : x));
			update(next);
			return next;
		});
	};

	const reset = () => update(setValues([0, 0, 0, 0]) || [0, 0, 0, 0]);

	return (
		<>
			<div className="components-header">
				<p>
					{label} <DesktopIcon />
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
									attributeKey === "borderRadius"
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
