import { useBlockProps } from "@wordpress/block-editor";
import getBackgroundStyle from "../utils/getBackgroundStyle";
import { useAttributes } from "../context/AttributesContext";
import Airplane from "../assets/Airplane";
import RightArrow from "../assets/RightArrow";

const InfoBox = () => {
	const { attributes } = useAttributes();
	const { contentAlignment, layout, styles } = attributes;
	const {
		borderType,
		borderColor,
		borderWidth,
		borderRadius,
		padding,
		margin,
	} = styles;
	return (
		<div {...useBlockProps()}>
			<div
				className={`wp-block-create-block-smart-info-box-container ${layout}`}
				style={{
					borderStyle: borderType,
					borderColor: borderColor,
					borderWidth: borderWidth,
					borderRadius: borderRadius,
					padding,
					margin,
					...getBackgroundStyle(styles),
				}}
			>
				<Airplane />
				<h4>Automated AI Chatbots</h4>
				<p style={{ textAlign: contentAlignment }}>
					Contains a high concentration of botanical, marine, and biological
					extracts. Has no artificial fragrances.
				</p>
				<a href="https://google.com">
					Learn More <RightArrow />
				</a>
			</div>
		</div>
	);
};

export default InfoBox;
