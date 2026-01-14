import { useState } from "@wordpress/element";

import "../assets/css/customBoxControls.scss";

export default function CustomBoxControls() {
	const [values, setValues] = useState([0, 0, 0, 0]);

	const updateValue = (index, delta) => {
		setValues((prev) =>
			prev.map((v, i) => (i === index ? Math.max(0, v + delta) : v)),
		);
	};

	return (
		<div className="stepper-container">
			{values.map((value, index) => (
				<div className="stepper-box" key={index}>
					<input value={value} readOnly />
					<div className="stepper-buttons">
						<button onClick={() => updateValue(index, 1)}>▲</button>
						<button onClick={() => updateValue(index, -1)}>▼</button>
					</div>
					<div className="counter-corner" />
				</div>
			))}

			<button className="link-button">🔗</button>
		</div>
	);
}
