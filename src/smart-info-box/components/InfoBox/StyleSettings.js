import { useState } from "@wordpress/element";
import NormalStyle from "./NormalStyle";
import HoverStyle from "./HoverStyle";

export default function StyleSettings({ attributes, setAttributes }) {
	const [toggleStyleMode, setToggleStyleMode] = useState("normal");
	return (
		<>
			<div className="inspector-section">
				<div className="style-hover-buttons">
					<button
						type="button"
						className={toggleStyleMode === "normal" ? "is-active" : ""}
						onClick={() => setToggleStyleMode("normal")}
					>
						Normal
					</button>

					<button
						className={toggleStyleMode === "hover" ? "is-active" : ""}
						onClick={() => setToggleStyleMode("hover")}
					>
						Hover
					</button>
				</div>
				{toggleStyleMode === "normal" ? <NormalStyle /> : <HoverStyle />}
			</div>
		</>
	);
}
