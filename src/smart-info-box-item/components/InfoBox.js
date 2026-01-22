import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import Airplane from "../assets/Airplane";
import RightArrow from "../assets/RightArrow";
import getBackgroundStyle from "../../smart-info-box/utils/getBackgroundStyle";

export default function InfoBox({
	attributes,
	context,
	handleTitleChange,
	handleDescriptionChange,
	handleButtonTextChange,
}) {
	const { content } = attributes;
	const { icon, title, description, buttonText } = content;
	const layout = context["smartInfoBox/layout"] || "default";
	const styles = context["smartInfoBox/styles"] || {};
	const {
		borderType,
		borderColor,
		borderWidth,
		boxShadow,
		iconSize,
		titleFontSize,
		descriptionFontSize,
		buttonFontSize,
	} = styles;
	const contentAlignment = context["smartInfoBox/contentAlignment"] || "center";
	const borderRadiusValue = `${styles.borderRadius.topLeft} ${styles.borderRadius.topRight} ${styles.borderRadius.bottomRight} ${styles.borderRadius.bottomLeft}`;
	const paddingValue = `${styles.padding.top} ${styles.padding.right} ${styles.padding.bottom} ${styles.padding.left}`;
	const marginValue = `${styles.margin.top} ${styles.margin.right} ${styles.margin.bottom} ${styles.margin.left}`;

	const blockProps = useBlockProps({});

	return (
		<div {...blockProps}>
			<div
				className={`wp-block-create-block-smart-info-box-item-container ${layout}`}
				style={{
					justifyItems: contentAlignment,
					textAlign: contentAlignment,
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
				<div
					className="media-container-placeholder"
					style={{
						backgroundColor: "black",
						borderRadius: 8,
					}}
				>
					<span
						style={{
							width: iconSize ?? 45,
							height: iconSize ?? 45,
							padding: "12px",
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							color: "white",
						}}
					>
						{icon.url ? (
							<img src={icon.url} alt="icon" width="100%" height="100%" />
						) : (
							<Airplane className="icon-svg" />
						)}
					</span>
				</div>

				<RichText
					placeholder={__("Title", "smart-info-box")}
					tagName="h4"
					onChange={handleTitleChange}
					value={title}
					allowedFormats={[]}
					style={{ fontSize: `${titleFontSize}px` }}
				/>
				<RichText
					style={{
						textAlign: contentAlignment,
						fontSize: `${descriptionFontSize}px`,
						color: "#757575",
					}}
					placeholder={__("Description", "smart-info-box")}
					tagName="p"
					onChange={handleDescriptionChange}
					value={description}
					allowedFormats={[]}
				/>
				<a href="#">
					<RichText
						style={{ fontSize: `${buttonFontSize}px`, fontWeight: 600 }}
						placeholder={__("Button Text", "smart-info-box")}
						tagName="span"
						onChange={handleButtonTextChange}
						value={buttonText}
						allowedFormats={[]}
					/>
					<RightArrow />
				</a>
			</div>
		</div>
	);
}
