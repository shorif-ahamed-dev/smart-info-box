import { __ } from "@wordpress/i18n";
import { dispatch, useSelect } from "@wordpress/data";
import { RangeControl } from "@wordpress/components";
import Box1 from "../../assets/Box1";
import Box2 from "../../assets/Box2";
import Box3 from "../../assets/Box3";
import Box4 from "../../assets/Box4";
import Box5 from "../../assets/Box5";
import Responsive from "../Responsive";

export default function LayoutSettings({ attributes, setAttributes }) {
	const { infoBox, container } = attributes;
	const isSiteEditor = document.body.classList.contains("site-editor");
	const store = isSiteEditor ? "core/edit-site" : "core/edit-post";
	const deviceType = useSelect(
		(select) => select(store)?.__experimentalGetPreviewDeviceType(),
		[]
	);
	const { contentAlignment, columnsGap, rowGap } = container;
	const { layout, columns, gap } = infoBox;
	const layouts = [
		{ id: "layout-one", label: "Icon Top", icon: Box1 },
		{ id: "layout-two", label: "Icon Left", icon: Box2 },
		{ id: "layout-three", label: "Icon Solo", icon: Box3 },
		{ id: "layout-four", label: "Icon Link", icon: Box4 },
		{ id: "layout-five", label: "Icon Top", icon: Box5 },
	];

	const setDevice = (device) => {
		dispatch(store).__experimentalSetPreviewDeviceType(device);
	};

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
								className={`layout-card ${layout === item.id ? "is-active" : ""
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
								container: { ...container, contentAlignment: "start" },
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
								container: { ...container, contentAlignment: "center" },
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
								container: { ...container, contentAlignment: "end" },
							})
						}
					>
						<span className="dashicons dashicons-editor-alignright" />
					</button>
				</div>
			</div>
			<br />
			<div className="">
				<RangeControl
					label={
						<div
							style={{
								display: "flex",
								gap: "8px",
								alignItems: "center",
								width: "100%",
							}}
						>
							<span>Columns</span>
							<Responsive deviceType={deviceType} setDevice={setDevice} />
						</div>
					}
					min={1}
					max={6}
					value={infoBox?.columns?.[deviceType]}
					onChange={(value) =>
						setAttributes({
							infoBox: {
								...infoBox,
								columns: {
									...infoBox.columns,
									[deviceType]: value,
								},
							},
						})
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
					min={0}
					max={50}
					value={columnsGap}
					onChange={(value) =>
						setAttributes({
							container: { ...container, columnsGap: value },
						})
					}
					color="#6f22dd"
				/>
			</div>
			<div className="inspector-section">
				<RangeControl
					label="Row Gap"
					min={0}
					max={50}
					value={rowGap}
					onChange={(value) =>
						setAttributes({ container: { ...container, rowGap: value } })
					}
					color="#6f22dd"
				/>
			</div>
		</>
	);
}
