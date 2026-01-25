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
	setAttributes,
}) {
	const { content } = attributes;
	const { icon, title, description, buttonText, badgeText } = content;
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
		badge,
		badgePosition,
		overlayColor,
		descriptionColor,
		titleColor,
		buttonTextColor,
		badgeColor,
	} = styles;
	const contentAlignment = context["smartInfoBox/contentAlignment"] || "center";
	const borderRadiusValue = `${styles.borderRadius.topLeft} ${styles.borderRadius.topRight} ${styles.borderRadius.bottomRight} ${styles.borderRadius.bottomLeft}`;
	const paddingValue = `${styles.padding.top} ${styles.padding.right} ${styles.padding.bottom} ${styles.padding.left}`;
	const marginValue = `${styles.margin.top} ${styles.margin.right} ${styles.margin.bottom} ${styles.margin.left}`;

	const blockProps = useBlockProps({});

	const badgePositionStyles = {
		"top-left": { top: 0, left: 0 },
		"top-right": { top: 0, right: 0 },
		"bottom-left": { bottom: 0, left: 0 },
		"bottom-right": { bottom: 0, right: 0 },
	};

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
					// style={{
					// 	backgroundColor: "black",
					// 	borderRadius: 8,
					// }}
				>
					<span
						style={{
							width: iconSize ?? 45,
							height: iconSize ?? 45,
							// padding: "12px",
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
					style={{
						fontSize: `${titleFontSize}px`,
						border: "1px solid transparent",
						boxSizing: "border-box",
						color: titleColor,
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.borderColor = "#9051efff";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.borderColor = "transparent";
					}}
				/>
				<RichText
					style={{
						textAlign: contentAlignment,
						fontSize: `${descriptionFontSize}px`,
						color: descriptionColor,
						border: "1px solid transparent",
						boxSizing: "border-box",
					}}
					placeholder={__("Description", "smart-info-box")}
					tagName="p"
					onChange={handleDescriptionChange}
					value={description}
					allowedFormats={[]}
					onMouseEnter={(e) => {
						e.currentTarget.style.borderColor = "#9051efff";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.borderColor = "transparent";
					}}
				/>
				m
				<a href="#">
					<RichText
						style={{
							fontSize: `${buttonFontSize}px`,
							fontWeight: 600,
							color: buttonTextColor,
						}}
						placeholder={__("Button Text", "smart-info-box")}
						tagName="span"
						onChange={handleButtonTextChange}
						value={buttonText}
						allowedFormats={[]}
					/>
					<RightArrow />
				</a>
				{badge && (
					<div
						className="badge"
						style={{
							...badgePositionStyles[styles.badgePosition],
							background: badgeColor,
						}}
					>
						<RichText
							placeholder={__("Badge", "smart-info-box")}
							tagName="p"
							onChange={(value) =>
								setAttributes({
									content: {
										...content,
										badgeText: value,
									},
								})
							}
							value={badgeText}
							allowedFormats={[]}
							style={{
								border: "1px solid transparent",
								boxSizing: "border-box",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.borderColor = "#9051efff";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.borderColor = "transparent";
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
