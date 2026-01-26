import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";
import Box1 from "../../assets/Box1";
import Box2 from "../../assets/Box2";
import Box3 from "../../assets/Box3";
import Box4 from "../../assets/Box4";
import Box5 from "../../assets/Box5";

export default function LayoutSettings({ attributes, setAttributes }) {
	const { infoBox } = attributes;
	const { layout, contentAlignment, columns, gap, columnsGap, rowGap } =
		infoBox;
	const layouts = [
		{ id: "layout-one", label: "Icon Top", icon: Box1 },
		{ id: "layout-two", label: "Icon Left", icon: Box2 },
		{ id: "layout-three", label: "Icon Solo", icon: Box3 },
		{ id: "layout-four", label: "Icon Link", icon: Box4 },
		{ id: "layout-five", label: "Icon Top", icon: Box5 },
	];

	return (
		<>
			{/* Info Box Layout */}
			<div className="inspector-section">
				<p>Info Box Layout</p>

				<div className="layout-grid">
					{layouts.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.id}
								role="button"
								className={`layout-card ${
									layout === item.id ? "is-active" : ""
								}`}
								onClick={() =>
									setAttributes({ infoBox: { ...infoBox, layout: item.id } })
								}
								aria-pressed={layout === item.id}
							>
								<Icon active={layout === item.id} />
							</div>
						);
					})}
				</div>
			</div>

			{/* Content Alignment */}
			<div className="inspector-section">
				<p>Content Alignment</p>

				<div className="alignment-buttons">
					<button
						type="button"
						className={contentAlignment === "start" ? "is-active" : ""}
						aria-pressed={contentAlignment === "start"}
						onClick={() =>
							setAttributes({
								infoBox: { ...infoBox, contentAlignment: "start" },
							})
						}
					>
						<span className="dashicons dashicons-editor-alignleft" />
					</button>

					<button
						type="button"
						className={contentAlignment === "center" ? "is-active" : ""}
						aria-pressed={contentAlignment === "center"}
						onClick={() =>
							setAttributes({
								infoBox: { ...infoBox, contentAlignment: "center" },
							})
						}
					>
						<span className="dashicons dashicons-editor-aligncenter" />
					</button>

					<button
						type="button"
						className={contentAlignment === "end" ? "is-active" : ""}
						aria-pressed={contentAlignment === "end"}
						onClick={() =>
							setAttributes({
								infoBox: { ...infoBox, contentAlignment: "end" },
							})
						}
					>
						<span className="dashicons dashicons-editor-alignright" />
					</button>
				</div>
			</div>
			<br />
			<div className="inspector-section">
				<RangeControl
					label={__("Columns", "smart-info-box")}
					min={1}
					max={6}
					value={columns}
					onChange={(value) =>
						setAttributes({ infoBox: { ...infoBox, columns: value } })
					}
					color="#6f22dd"
				/>
			</div>
			<div className="inspector-section">
				<RangeControl
					label={__("Gap", "smart-info-box")}
					min={4}
					max={50}
					value={gap}
					onChange={(value) =>
						setAttributes({ infoBox: { ...infoBox, gap: value } })
					}
					color="#6f22dd"
				/>
			</div>
			<div className="inspector-section">
				<RangeControl
					label="Column Gap"
					min={4}
					max={50}
					value={columnsGap}
					onChange={(value) =>
						setAttributes({
							infoBox: { ...infoBox, columnsGap: value },
						})
					}
					color="#6f22dd"
				/>
			</div>
			<div className="inspector-section">
				<RangeControl
					label="Row Gap"
					min={4}
					max={50}
					value={rowGap}
					onChange={(value) =>
						setAttributes({ infoBox: { ...infoBox, rowGap: value } })
					}
					color="#6f22dd"
				/>
			</div>
		</>
	);
}
