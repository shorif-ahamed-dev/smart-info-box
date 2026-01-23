import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { AttributesProvider } from "./context/AttributesContext";
import InspectorContainer from "./components/InspectorContainer";

export default function Edit({ attributes, setAttributes }) {
	const { columns, columnsGap } = attributes;
	const onSelect = (value) => { };

	const blockProps = useBlockProps({
		className: `has-${columns}-columns`,
		style: {
			'--columns-gap': `${columnsGap}px`,
		}
	});

	return (
		<AttributesProvider attributes={attributes} setAttributes={setAttributes}>
			<InspectorContainer attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={['create-block/smart-info-box-item']}
					template={[
						['create-block/smart-info-box-item'],
					]}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</div>
		</AttributesProvider>
	);
}