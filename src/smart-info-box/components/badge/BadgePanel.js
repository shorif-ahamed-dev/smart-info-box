import ToolbarIcon from "../../assets/ToolbarIcon";
import { useAttributes } from "../../context/AttributesContext";
import ColorControl from "../common/ColorControl";
import { ToggleControl, SelectControl } from "@wordpress/components";
const BadgePanel = () => {
	const { attributes, setAttributes } = useAttributes();
	const { styles } = attributes;
	const { badgeColor } = styles;
	return (
		<>
			<div className="components-header inspector-section">
				<p>Badge</p>
				<span>
					<ToggleControl
						checked={styles.badge}
						onChange={(value) => {
							setAttributes({
								styles: {
									...styles,
									badge: value,
								},
							});
						}}
					/>
				</span>
			</div>
			{styles.badge && (
				<>
					<div className="components-header">
						<p>Badge Position</p>
						<span>
							<ToolbarIcon />
						</span>
					</div>

					<SelectControl
						value={styles.badgePosition}
						options={[
							{ label: "Top Left", value: "top-left" },
							{ label: "Top Right", value: "top-right" },
							{ label: "Bottom Left", value: "bottom-left" },
							{ label: "Bottom Right", value: "bottom-right" },
						]}
						onChange={(value) =>
							setAttributes({
								styles: {
									...styles,
									badgePosition: value,
								},
							})
						}
					/>
					<br />
					<ColorControl
						label="Badge Color"
						value={badgeColor}
						onChange={(color) =>
							setAttributes({
								styles: {
									...styles,
									badgeColor: color,
								},
							})
						}
						onReset={() =>
							setAttributes({
								styles: {
									...styles,
									badgeColor: "#000000ff",
								},
							})
						}
					/>
				</>
			)}
		</>
	);
};

export default BadgePanel;
