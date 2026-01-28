import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import CustomBoxControls from "../common/CustomBoxControls";
import CustomRangeControl from "../common/CustomRangeControl";
import { useState } from "@wordpress/element";
const IconImagePanel = () => {
	const { attributes, setAttributes } = useAttributes();
	const { mediaContainer } = attributes;
	const [toggleStyleMode, setToggleStyleMode] = useState(mediaContainer.width);

	return (
		<>
			<div className="inspector-section">
				<div className="style-hover-buttons">
					<button
						type="button"
						className={toggleStyleMode === "100%" ? "is-active" : ""}
						onClick={() => {
							setAttributes({
								mediaContainer: { ...mediaContainer, width: "100%" }
							})
							setToggleStyleMode("100%")
						}}
					>
						Full Width
					</button>

					<button
						className={toggleStyleMode === "min-content" ? "is-active" : ""}

						onClick={() => {
							setAttributes({
								mediaContainer: { ...mediaContainer, width: "min-content", height: 0 }
							})
							setToggleStyleMode("min-content")
						}}
					>
						Min Width
					</button>
				</div>
			</div>
			<br />

			<div className="inspector-section">
				<CustomRangeControl
					label="Container Height"
					attributeKey="mediaContainer"
					subKey="height"
					resetValue="min-content"
					marks={false}
					min={0}
					max={300}
					step={10}
				/>
				<CustomRangeControl
					label="Icon Size"
					attributeKey="mediaContainer"
					subKey="fontSize"
					resetValue={10}
					marks={false}
					min={10}
					max={45}
					step={1}
				/>
				<CustomRangeControl
					label="Padding"
					attributeKey="mediaContainer"
					subKey="padding"
					resetValue={0}
					marks={false}
					min={0}
					max={200}
					step={1}
				/>
				<CustomBoxControls
					label="Margin"
					attributeKey="mediaContainer"
					subKey="margin"
					deviceType={"desktop"}
					min={0}
					max={200}
					isResponsive={true}
				/>
				<br />

				<ColorControl
					label="Background Color"
					value={mediaContainer.backgroundColor}
					onChange={(color) =>
						setAttributes({
							mediaContainer: {
								...mediaContainer,
								backgroundColor: color,
							},
						})
					}
					onReset={() =>
						setAttributes({
							mediaContainer: {
								...mediaContainer,
								backgroundColor: "#ffffff",
							},
						})
					}
				/>
				<ColorControl
					label="Icon Color"
					value={mediaContainer.color}
					onChange={(color) =>
						setAttributes({
							mediaContainer: {
								...mediaContainer,
								color: color,
							},
						})
					}
					onReset={() =>
						setAttributes({
							mediaContainer: {
								...mediaContainer,
								color: "#ffffff",
							},
						})
					}
				/>
			</div>
		</>
	);
};

export default IconImagePanel;
