import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import Airplane from "../assets/Airplane";
import RightArrow from "../assets/RightArrow";
import CSSVars from "../utils/CSSVars";
import getBackgroundStyle from "../utils/getBackgroundStyle";

export default function InfoBox2({ attributes, onChangeValue }) {
	const isSiteEditor = document.body.classList.contains("site-editor");
	const store = isSiteEditor ? "core/edit-site" : "core/edit-post";
	const deviceType = useSelect(
		(select) => select(store)?.__experimentalGetPreviewDeviceType(),
		[]
	);
	const cssVars = CSSVars(attributes);
	const blockProps = useBlockProps({
		style: {
			...cssVars[deviceType],
		},
	});
	const { icon, title, description, buttonText, badgeText } = attributes.content;
	const backgroundStyles = getBackgroundStyle(attributes.container);

	const mouseEnter = (e) => {
		e.currentTarget.style.boxShadow = "inset 0 0 0 1px #9051efff";
	}
	const mouseLeave = (e) => {
		e.currentTarget.style.boxShadow = "";
	}
	return (
		<div {...blockProps}>
			<div
				className={`smart-info-box-item-container ${attributes?.infoBox?.layout}`}
				style={backgroundStyles}
			>
				<div className="mediaContainer">
					<Airplane />
				</div>
				<RichText
					tagName="h4"
					className="title"
					value={title}
					onChange={(value) => onChangeValue('title', value)}
					onMouseEnter={mouseEnter}
					onMouseLeave={mouseLeave}
				/>
				<RichText
					tagName="p"
					className="description"
					value={description}
					onChange={(value) => onChangeValue('description', value)}
					onMouseEnter={mouseEnter}
					onMouseLeave={mouseLeave}
				/>
				<a className="cta" >
					<RichText
						tagName="p"
						value={buttonText}
						onChange={(value) => onChangeValue('buttonText', value)}
						onMouseEnter={mouseEnter}
						onMouseLeave={mouseLeave}
					/>
					<RightArrow />
				</a>
				{attributes?.featuredContainer?.badge === true ? (
					<div className="featuredContainer">
						<RichText
							tagName="p"
							value={badgeText}
							onChange={(value) => onChangeValue('badgeText', value)}
							onMouseEnter={mouseEnter}
							onMouseLeave={mouseLeave}
						/>
					</div>
				) : null}
			</div>
		</div>
	);
}
