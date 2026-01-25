import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { AttributesProvider } from "./context/AttributesContext";
import AllPanels from "./components/AllPanels";

export default function Edit({ attributes, setAttributes }) {
	const { columns, columnsGap } = attributes;

	const blockProps = useBlockProps({
		className: `has-${columns}-columns`,
		style: {
			"--columns-gap": `${columnsGap}px`,
		},
	});

	return (
		<AttributesProvider attributes={attributes} setAttributes={setAttributes}>
			{/* Inspector Controls  */}
			<InspectorControls>
				<AllPanels />
			</InspectorControls>
			{/* Editor Content */}
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
