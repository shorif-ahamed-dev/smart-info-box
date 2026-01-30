import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { InspectorControls } from "@wordpress/block-editor";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { AttributesProvider } from "./context/AttributesContext";
import AllPanels from "./components/AllPanels";

export default function Edit({ attributes, setAttributes }) {
	const isSiteEditor = document.body.classList.contains("site-editor");
	const store = isSiteEditor ? "core/edit-site" : "core/edit-post";
	const deviceType = useSelect(
		(select) => select(store)?.__experimentalGetPreviewDeviceType(),
		[]
	);
	const { infoBox } = attributes;

	const blockProps = useBlockProps({
		className: `has-${infoBox.columns[deviceType]}-columns`,
		style: {
			"--columns-gap": `${infoBox.gap}px`,
		},
	});

	return (
		<AttributesProvider attributes={attributes} setAttributes={setAttributes}>
			<InspectorControls>
				<AllPanels />
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={["create-block/smart-info-box-item"]}
					template={[["create-block/smart-info-box-item"]]}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</div>
		</AttributesProvider>
	);
}
