import { Button } from "@wordpress/components";
import "./dashicon-picker.scss";
import { DASHICONS } from "./dashicons";

export default function DashiconPicker({ value, onChange }) {
	return (
		<div className="sib-dashicon-picker">
			{DASHICONS.map((icon) => (
				<Button
					key={icon}
					isPressed={value === icon}
					onClick={() => onChange(icon)}
					className="sib-dashicon-btn"
				>
					<span className={`dashicons ${icon}`}></span>
				</Button>
			))}
		</div>
	);
}
