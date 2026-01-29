import { RichText, useBlockProps } from "@wordpress/block-editor";
import { Dashicon } from "@wordpress/components";
import RightArrow from "./assets/RightArrow";
import Airplane from "./assets/Airplane";
import CSSVars from "./utils/CSSVars";
import getBackgroundStyle from "./utils/getBackgroundStyle";

export default function save({ attributes }) {
	const { icon, title, description, buttonText } = attributes.content;
	const blockId = attributes?.blockId;
	const cssVars = CSSVars(attributes);
	const backgroundStyles = getBackgroundStyle(attributes.container);

	const generateStyleString = (vars) => {
		return Object.entries(vars)
			.map(([key, value]) => `${key}: ${value};`)
			.join("\n\t\t");
	};

	return (
		<>
			<style>{`
				#${blockId} {
					${generateStyleString(cssVars.Desktop)}
				}
				
				@media (max-width: 1024px) {
					#${blockId} {
						${generateStyleString(cssVars.Tablet)}
					}
				}
				
				@media (max-width: 768px) {
					#${blockId} {
						${generateStyleString(cssVars.Mobile)}
					}
				}
			`}</style>

			<div {...useBlockProps.save()} id={blockId}>
				<div
					className={`smart-info-box-item-container ${attributes?.infoBox?.layout}`}
					style={backgroundStyles}
				>
					<div className="mediaContainer">
						{/* <Airplane /> */}
						{icon.dashIcon && <Dashicon icon={"airplane"} size={28} />}
					</div>
					<RichText.Content tagName="h4" value={title} className="title" />
					<RichText.Content
						tagName="p"
						value={description}
						className="description"
					/>
					<a className="cta" href="google.com">
						<RichText.Content tagName="p" value={buttonText} />
						<RightArrow />
					</a>
					{attributes?.featuredContainer?.badge === true && (
						<div className="featuredContainer">
							<p>Featured</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
