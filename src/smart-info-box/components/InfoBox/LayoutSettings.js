import { __ } from "@wordpress/i18n";
import { dispatch, useSelect } from "@wordpress/data";
import { RangeControl } from "@wordpress/components";

import Responsive from "../Responsive";
import Layouts from "./Layouts";
import TabControl from "./TabControl";

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


	const setDevice = (device) => {
		dispatch(store).__experimentalSetPreviewDeviceType(device);
	};
	const onLayoutChange = (value) => {
		setAttributes({ infoBox: { ...infoBox, layout: value } })
	}
	const onAlignMentChange = (value) => {
		setAttributes({
			container: { ...container, contentAlignment: value },
		})
	}
	const options = [
		{ value: 'left', label: 'Align Left', icon: 'dashicons-editor-alignleft' },
		{ value: 'center', label: 'Align Center', icon: 'dashicons-editor-aligncenter' },
		{ value: 'right', label: 'Align Right', icon: 'dashicons-editor-alignright' }
	]

	return (
		<>
			<Layouts layout={layout} onChange={onLayoutChange} />
			<br />
			<TabControl label="Content Alignment" options={options} value={contentAlignment} onChange={onAlignMentChange} />
			<br />
			<div className="components-header">
				<p>
					Columns
					<Responsive deviceType={deviceType} setDevice={setDevice} />
				</p>
			</div>
			<RangeControl
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

		</>
	);
}
