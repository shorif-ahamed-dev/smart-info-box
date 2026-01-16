import { RichText, useBlockProps } from "@wordpress/block-editor";
import getBackgroundStyle from "../utils/getBackgroundStyle";
import { useAttributes } from "../context/AttributesContext";
import Airplane from "../assets/Airplane";
import RightArrow from "../assets/RightArrow";
import { __ } from "@wordpress/i18n";

const InfoBox = () => {
	const { attributes, setAttributes } = useAttributes();
	const { contentAlignment, layout, styles, content, hoverStyles } = attributes;
	const { title, description } = content
	const {
		borderType,
		borderColor,
		borderWidth,
		borderRadius,
		padding,
		margin,
		boxShadow,
	} = styles;

	const borderRadiusValue = `
  ${borderRadius.topLeft}
  ${borderRadius.topRight}
  ${borderRadius.bottomRight}
  ${borderRadius.bottomLeft}
`;
	const paddingValue = `
  ${padding.top}
  ${padding.right}
  ${padding.bottom}
  ${padding.left}
`;
	const marginValue = `
  ${margin.top}
  ${margin.right}
  ${margin.bottom}
  ${margin.left}
`;

	const handleTitleChange = (title) => {
		setAttributes({ content: { ...content, title: title } })
	}
	const handleDescriptionChange = (description) => {
		setAttributes({ content: { ...content, description: description } })
	}

	return (
		<div {...useBlockProps()}>
			<div
				className={`wp-block-create-block-smart-info-box-container ${layout}`}
				style={{
					justifyItems: contentAlignment,
					borderStyle: borderType,
					borderColor: borderColor,
					borderWidth: borderWidth,
					borderRadius: borderRadiusValue,
					padding: paddingValue,
					margin: marginValue,
					boxShadow,
					...getBackgroundStyle(styles),
				}}
			>
				<Airplane />
				<RichText
					placeholder={__('Title', 'smart-info-box')}
					tagName="h4"
					onChange={handleTitleChange}
					value={title}
					allowedFormats={[]}
				/>
				<RichText
					style={{ textAlign: contentAlignment }}
					placeholder={__('Description', 'smart-info-box')}
					tagName="p"
					onChange={handleDescriptionChange}
					value={description}
					allowedFormats={[]}
				/>
				<a href="https://google.com">
					Learn More <RightArrow />
				</a>
			</div>
		</div>
	);

	// lagacy
	// return (
	// 	<div {...useBlockProps()}>
	// 		<div
	// 			className={`wp-block-create-block-smart-info-box-container ${layout}`}
	// 			style={{
	// 				justifyItems: contentAlignment,
	// 				borderStyle: borderType,
	// 				borderColor: borderColor,
	// 				borderWidth: borderWidth,
	// 				borderRadius: borderRadiusValue,
	// 				padding: paddingValue,
	// 				margin: marginValue,
	// 				boxShadow,
	// 				...getBackgroundStyle(styles),
	// 				'--hover-bg': hoverStyles?.backgroundColor,
	// 				'--hover-border': hoverStyles.borderColor,
	// 			}}
	// 		>
	// 			<Airplane />
	// 			<RichText
	// 				placeholder={__('Title', 'smart-info-box')}
	// 				tagName="h4"
	// 				onChange={handleTitleChange}
	// 				value={title}
	// 				allowedFormats={[]}
	// 			/>
	// 			<RichText
	// 				style={{ textAlign: contentAlignment }}
	// 				placeholder={__('Description', 'smart-info-box')}
	// 				tagName="p"
	// 				onChange={handleDescriptionChange}
	// 				value={description}
	// 				allowedFormats={[]}
	// 			/>
	// 			<a href="https://google.com">
	// 				Learn More <RightArrow />
	// 			</a>
	// 		</div>
	// 	</div>
	// );
};

export default InfoBox;
