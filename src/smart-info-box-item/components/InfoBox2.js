import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import Airplane from "../assets/Airplane";
import RightArrow from "../assets/RightArrow";
import CSSVars from "../utils/CSSVars";
import getBackgroundStyle from "../utils/getBackgroundStyle";

export default function InfoBox2({ attributes }) {
	const blockProps = useBlockProps({
		style: CSSVars(attributes),
	});
	const backgroundStyles = getBackgroundStyle(attributes.container)

	return (
		<div {...blockProps}>
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
				{attributes?.featuredContainer?.badge === true ? (<div className="featuredContainer">
					<p>Featured</p>
				</div>) : null}
			</div>
		</div>
	);
}
