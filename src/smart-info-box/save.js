import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { infoBox } = attributes;
    const blockProps = useBlockProps.save({
        style: {
            "--columns-desktop": infoBox.columns?.Desktop,
            "--columns-tablet": infoBox.columns?.Tablet,
            "--columns-mobile": infoBox.columns?.Mobile,
            "--columns-gap": `${infoBox.gap}px`,
        },
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
}