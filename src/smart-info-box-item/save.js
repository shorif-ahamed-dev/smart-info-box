import { useBlockProps, RichText } from '@wordpress/block-editor';
import RightArrow from './assets/RightArrow';
import Airplane from './assets/Airplane';
import getBackgroundStyle from '../smart-info-box/utils/getBackgroundStyle';

export default function save({ attributes }) {
    const { content, styles = {}, layout = 'default', contentAlignment = 'center' } = attributes;
    const { icon, title, description, buttonText } = content || {};

    const {
        borderType,
        borderColor,
        borderWidth,
        boxShadow,
        iconSize,
        titleFontSize,
        borderRadius = {},
        padding = {},
        margin = {},
    } = styles;

    const borderRadiusValue = `${borderRadius.topLeft || 0} ${borderRadius.topRight || 0} ${borderRadius.bottomRight || 0} ${borderRadius.bottomLeft || 0}`;
    const paddingValue = `${padding.top || 0} ${padding.right || 0} ${padding.bottom || 0} ${padding.left || 0}`;
    const marginValue = `${margin.top || 0} ${margin.right || 0} ${margin.bottom || 0} ${margin.left || 0}`;
    const blockProps = useBlockProps.save({

    });
    return (
        <div {...blockProps}>
            <div
                className={`wp-block-create-block-smart-info-box-item-container ${layout}`}
                style={{
                    justifyItems: contentAlignment,
                    textAlign: contentAlignment,
                    borderStyle: borderType,
                    borderColor,
                    borderWidth,
                    borderRadius: borderRadiusValue,
                    padding: paddingValue,
                    margin: marginValue,
                    boxShadow,
                    ...getBackgroundStyle(styles),
                }}
            >
                {icon?.url ? (
                    <img
                        src={icon.url}
                        alt=""
                        height={iconSize || 45}
                        width={iconSize || 45}
                    />
                ) : (
                    <Airplane />
                )}

                <RichText.Content
                    tagName="h4"
                    value={title}
                    style={{ fontSize: `${titleFontSize}px` }}
                />

                <RichText.Content
                    tagName="p"
                    value={description}
                // style={{ fontSize: `14px` }}
                />

                <a href="#">
                    <RichText.Content
                        tagName="span"
                        value={buttonText}
                    />
                    <RightArrow />
                </a>
            </div>
        </div>
    );
}
