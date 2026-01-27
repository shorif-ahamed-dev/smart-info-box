import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import Airplane from "../assets/Airplane";
import RightArrow from "../assets/RightArrow";
import Star from "../assets/Star";
import CSSVars from "../utils/CSSVars";
import getBackgroundStyle from "../utils/getBackgroundStyle";

export default function InfoBox2({ attributes, setAttributes, context }) {
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
				<div className="media-container">
					<Airplane />
				</div>
				<h4>Automated AI Chatbots</h4>
				<p className="description">
					Contains a high concentration of botanical, marine, and biological
					extracts. Has no artificial fragrances.
				</p>
				{/* <div className="ratting-container">
					<span className="number">5/5</span>
					<div className="ratting-box">
						<span className="rattings-item">
							<Star />
						</span>
					</div>
				</div> */}
				<a className="cta" href="google.com">
					<p>Learn More</p>
					<RightArrow />
				</a>
				{attributes?.featured?.badge === true ? (<div className="featured-container">
					<p>Featured</p>
				</div>) : null}
			</div>
		</div>
	);
}
