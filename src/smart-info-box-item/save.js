import { useBlockProps, RichText } from "@wordpress/block-editor";
import RightArrow from "./assets/RightArrow";
import Airplane from "./assets/Airplane";
import getBackgroundStyle from "../smart-info-box/utils/getBackgroundStyle";

export default function save({ attributes }) {
	const {
		content,
		styles = {},
		layout = "default",
		contentAlignment = "center",
	} = attributes;
	const { icon, title, description, buttonText, badgeText } = content || {};

	const {
		borderType,
		borderColor,
		borderWidth,
		boxShadow,
		iconSize,
		titleFontSize,
		borderRadius = {},
		descriptionFontSize,
		buttonFontSize,
		padding = {},
		margin = {},
		badge,
		badgePosition,
		descriptionColor,
		buttonTextColor,
		titleColor,
		badgeColor
	} = styles;

	const borderRadiusValue = `${borderRadius.topLeft || 0} ${borderRadius.topRight || 0
		} ${borderRadius.bottomRight || 0} ${borderRadius.bottomLeft || 0}`;
	const paddingValue = `${padding.top || 0} ${padding.right || 0} ${padding.bottom || 0
		} ${padding.left || 0}`;
	const marginValue = `${margin.top || 0} ${margin.right || 0} ${margin.bottom || 0
		} ${margin.left || 0}`;
	const blockProps = useBlockProps.save({});

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
					borderColor,
					borderWidth,
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

				<RichText.Content
					tagName="h4"
					value={title}
					style={{ fontSize: `${titleFontSize}px`, color: titleColor }}
				/>

				<RichText.Content
					tagName="p"
					value={description}
					style={{
						textAlign: contentAlignment,
						fontSize: `${descriptionFontSize}px`,
						color: descriptionColor,
					}}
				/>

				<a href="#">
					<RichText.Content
						tagName="span"
						value={buttonText}
						style={{ fontSize: `${buttonFontSize}px`, fontWeight: 600, color: buttonTextColor }}
					/>
					<RightArrow />
				</a>

				{badge && (
					<div
						className="badge"
						style={{
							...badgePositionStyles[styles.badgePosition],
							background: badgeColor
						}}
					>
						<RichText.Content
							tagName="p"
							value={badgeText}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
