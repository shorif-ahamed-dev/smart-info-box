import { useBlockProps } from "@wordpress/block-editor";
import RightArrow from "./assets/RightArrow";
import Airplane from "./assets/Airplane";
import CSSVars from "./utils/CSSVars";
import getBackgroundStyle from "./utils/getBackgroundStyle";

export default function save({ attributes }) {
	const cssVars = CSSVars(attributes);
	const backgroundStyles = getBackgroundStyle(attributes.container);

	const blockId = `smart-info-box-${Math.random().toString(36).substr(2, 9)}`;

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
						<Airplane />
					</div>
					<h4 className="title">Automated AI Chatbots</h4>
					<p className="description">
						Contains a high concentration of botanical, marine, and biological
						extracts. Has no artificial fragrances.
					</p>
					<a className="cta" href="google.com">
						<p>Learn More</p>
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
