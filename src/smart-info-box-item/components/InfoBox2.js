import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { useBlockProps } from "@wordpress/block-editor";
import Airplane from "../assets/Airplane";
import RightArrow from "../assets/RightArrow";
import CSSVars from "../utils/CSSVars";
import getBackgroundStyle from "../utils/getBackgroundStyle";

export default function InfoBox2({ attributes }) {
	const isSiteEditor = document.body.classList.contains("site-editor");
	const store = isSiteEditor ? "core/edit-site" : "core/edit-post";
	const deviceType = useSelect(
		(select) => select(store)?.__experimentalGetPreviewDeviceType?.(),
		[],
	);
	const cssVars = CSSVars(attributes);

	const blockProps = useBlockProps({
		style: {
			...cssVars[deviceType],
		},
	});
	const backgroundStyles = getBackgroundStyle(attributes.container);

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
				{attributes?.featuredContainer?.badge === true ? (
					<div className="featuredContainer">
						<p>Featured</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
