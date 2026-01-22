import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { columns, columnsGap } = attributes;

    const blockProps = useBlockProps.save({
        className: `has-${columns}-columns`,
        style: {
            '--columns-gap': `${columnsGap}px`,
        },
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
}
