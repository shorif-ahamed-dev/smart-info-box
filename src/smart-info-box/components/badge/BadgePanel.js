import ToolbarIcon from "../../assets/ToolbarIcon";
import { useSelect } from "@wordpress/data";
import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import { ToggleControl, SelectControl } from "@wordpress/components";
import CustomBoxControls from "../common/CustomBoxControls";
const BadgePanel = () => {
	const { attributes, setAttributes } = useAttributes();
	const isSiteEditor = document.body.classList.contains("site-editor");
	const store = isSiteEditor ? "core/edit-site" : "core/edit-post";
	const deviceType = useSelect(
		(select) => select(store)?.__experimentalGetPreviewDeviceType?.(),
		[],
	);
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
						label="Background Color"
						attributesKey="featuredContainer"
						subKey="backgroundColor"
						defaultColor="#ffffff"
					/>
					<ColorControl
						label="Text Color"
						attributesKey="featuredContainer"
						subKey="color"
						defaultColor="#ffffff"
					/>
					<CustomBoxControls
						label="Border Radius"
						attributeKey="featuredContainer"
						subKey="borderRadius"
						deviceType={deviceType}
						min={0}
						max={100}
						isResponsive={true}
					/>
					<CustomBoxControls
						label="Padding"
						attributeKey="featuredContainer"
						subKey="padding"
						deviceType={deviceType}
						min={0}
						max={100}
						isResponsive={true}
					/>
					<CustomBoxControls
						label="Margin"
						attributeKey="featuredContainer"
						subKey="margin"
						deviceType={deviceType}
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
