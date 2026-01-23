import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { PanelBody, TabPanel } from "@wordpress/components";
import SettingsIcon from "../assets/SettingsIcon";
import StyleSettings from "./StyleSettings";
import StyleRangeControl from "./StyleRangeControl";
import AppearenceIcon from "../assets/AppearenceIcon";
import LayoutSettings from "./LayoutSettings";
import { ToggleControl } from "@wordpress/components";
import ToolbarIcon from "../assets/ToolbarIcon";
import { SelectControl } from "@wordpress/components";
import CustomColorPicker from "./CustomColorPicker";

export default function InspectorContainer({ attributes, setAttributes }) {
	const { styles } = attributes
	const { descriptionColor, titleColor, buttonTextColor, badgeColor } = styles
	const [openPanel, setOpenPanel] = useState("info");
	const onSelect = (value) => { };
	return (
		<InspectorControls>
			<PanelBody
				title="Info Box"
				opened={openPanel === "info"}
				onToggle={() => setOpenPanel(openPanel === "info" ? null : "info")}
			>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					onSelect={onSelect}
					tabs={[
						{
							name: "layout",
							title: (
								<span>
									<SettingsIcon />
									Layout
								</span>
							),
							className: "tab-one",
						},
						{
							name: "style",
							title: (
								<span>
									<AppearenceIcon />
									Style
								</span>
							),
							className: "tab-two",
						},

					]}
				>
					{(tab) => {
						if (tab.name === "layout") {
							return (
								<LayoutSettings
									attributes={attributes}
									setAttributes={setAttributes}
								/>
							);
						}
						if (tab.name === "style") {
							return (
								<StyleSettings
									attributes={attributes}
									setAttributes={setAttributes}
								/>
							);
						}
					}}
				</TabPanel>
			</PanelBody>
			<PanelBody
				title="Icon/Image"
				opened={openPanel === "icon"}
				onToggle={() => setOpenPanel(openPanel === "icon" ? null : "icon")}
			>
				<div className="inspector-section">
					<StyleRangeControl
						label="Icon Size"
						attributeKey="iconSize"
						marks={false}
						min={25}
						max={100}
						step={1}
					/>
				</div>
			</PanelBody>
			<PanelBody
				title="Title"
				opened={openPanel === "title"}
				onToggle={() => setOpenPanel(openPanel === "title" ? null : "title")}
			>
				<div className="inspector-section">
					<StyleRangeControl
						label="Title Font Size"
						attributeKey="titleFontSize"
						marks={false}
						min={10}
						max={100}
						step={1}
					/>
				</div>
				<CustomColorPicker
					label="Title Color"
					value={titleColor}
					onChange={(color) =>
						setAttributes({
							styles: {
								...styles,
								titleColor: color,
							},
						})
					}
					onReset={() =>
						setAttributes({
							styles: {
								...styles,
								titleColor: "#000000ff",
							},
						})
					}
				/>
			</PanelBody>
			<PanelBody
				title="Description"
				opened={openPanel === "description"}
				onToggle={() =>
					setOpenPanel(openPanel === "description" ? null : "description")
				}
			>
				<div className="inspector-section">
					<StyleRangeControl
						label="Description Font Size"
						attributeKey="descriptionFontSize"
						marks={false}
						min={10}
						max={100}
						step={1}
					/>
				</div>
				<CustomColorPicker
					label="Description Color"
					value={descriptionColor}
					onChange={(color) =>
						setAttributes({
							styles: {
								...styles,
								descriptionColor: color,
							},
						})
					}
					onReset={() =>
						setAttributes({
							styles: {
								...styles,
								descriptionColor: "#ffffff",
							},
						})
					}
				/>
			</PanelBody>
			<PanelBody
				title="Call To Action"
				opened={openPanel === "calltoaction"}
				onToggle={() =>
					setOpenPanel(openPanel === "calltoaction" ? null : "calltoaction")
				}
			>
				<div className="inspector-section">
					<StyleRangeControl
						label="Button Font Size"
						attributeKey="buttonFontSize"
						marks={false}
						min={10}
						max={100}
						step={1}
					/>
					<CustomColorPicker
						label="Button Text Color"
						value={buttonTextColor}
						onChange={(color) =>
							setAttributes({
								styles: {
									...styles,
									buttonTextColor: color,
								},
							})
						}
						onReset={() =>
							setAttributes({
								styles: {
									...styles,
									buttonTextColor: "#000000ff",
								},
							})
						}
					/>
				</div>
			</PanelBody>
			<PanelBody
				title="Badge"
				opened={openPanel === "badge"}
				onToggle={() =>
					setOpenPanel(openPanel === "badge" ? null : "badge")
				}
			>
				<div className="components-header inspector-section">
					<p>Badge</p>
					<span>
						<ToggleControl checked={styles.badge} onChange={(value) => {
							setAttributes({
								styles: {
									...styles,
									badge: value,
								},
							})


						}} />
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
						<CustomColorPicker
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
			</PanelBody>
		</InspectorControls>
	);
}
