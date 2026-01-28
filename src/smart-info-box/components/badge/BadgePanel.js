import ToolbarIcon from "../../assets/ToolbarIcon";
import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import { ToggleControl, SelectControl } from "@wordpress/components";
import CustomBoxControls from "../common/CustomBoxControls";
const BadgePanel = () => {
	const { attributes, setAttributes } = useAttributes();
	const { featuredContainer } = attributes;
	const { backgroundColor, color } = featuredContainer;

	const BADGE_POSITIONS = {
		"top-left": { top: 0, left: 0, right: null, bottom: null },
		"top-right": { top: 0, right: 0, left: null, bottom: null },
		"bottom-left": { bottom: 0, left: 0, top: null, right: null },
		"bottom-right": { bottom: 0, right: 0, top: null, left: null },
	};

	return (
		<>
			<div className="components-header inspector-section">
				<p>Badge</p>
				<span>
					<ToggleControl
						checked={featuredContainer?.badge}
						onChange={(value) => {
							setAttributes({
								featuredContainer: {
									...featuredContainer,
									badge: value,
								},
							});
						}}
					/>
				</span>
			</div>
			{featuredContainer.badge && (
				<>
					<div className="components-header">
						<p>Badge Position</p>
						<span>
							<ToolbarIcon />
						</span>
					</div>

					<SelectControl
						label="Badge Position"
						value={featuredContainer.badgePosition}
						options={[
							{ label: "Top Left", value: "top-left" },
							{ label: "Top Right", value: "top-right" },
							{ label: "Bottom Left", value: "bottom-left" },
							{ label: "Bottom Right", value: "bottom-right" },
						]}
						onChange={(value) => {
							const position = BADGE_POSITIONS[value];

							setAttributes({
								featuredContainer: {
									...featuredContainer,
									badgePosition: value,
									...position,
								},
							});
						}}
					/>
					<br />
					<ColorControl
						label="Badge Color"
						value={backgroundColor}
						onChange={(color) =>
							setAttributes({
								featuredContainer: {
									...featuredContainer,
									backgroundColor: color,
								},
							})
						}
						onReset={() =>
							setAttributes({
								featuredContainer: {
									...featuredContainer,
									backgroundColor: "#ddd",
								},
							})
						}
					/>
					<ColorControl
						label="Text Color"
						value={color}
						onChange={(color) =>
							setAttributes({
								featuredContainer: {
									...featuredContainer,
									color: color,
								},
							})
						}
						onReset={() =>
							setAttributes({
								featuredContainer: {
									...featuredContainer,
									color: "#ddd",
								},
							})
						}
					/>
					<CustomBoxControls
						label="Padding"
						attributeKey="featuredContainer"
						subKey="padding"
						deviceType={"desktop"}
						min={0}
						max={100}
						isResponsive={true}
					/>
				</>
			)}
		</>
	);
};

export default BadgePanel;
