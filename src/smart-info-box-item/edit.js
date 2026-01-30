import { __ } from "@wordpress/i18n";
import "./editor.scss";
import { useEffect } from "@wordpress/element";
import { PanelBody, TextareaControl, TextControl } from "@wordpress/components";
import InfoBox2 from "./components/InfoBox2";
import { InspectorControls } from "@wordpress/block-editor";
import IconSelect from "./components/IconSelect";

export default function Edit({ attributes, setAttributes, context }) {
	const { content } = attributes;
	const infoBox = context["smartInfoBox/infoBox"];
	const container = context["smartInfoBox/container"];
	const mediaContainer = context["smartInfoBox/mediaContainer"];
	const title = context["smartInfoBox/title"];
	const description = context["smartInfoBox/description"];
	const cta = context["smartInfoBox/cta"];
	const featuredContainer = context["smartInfoBox/featuredContainer"];
	if (!attributes.blockId) {
		setAttributes({
			blockId: `smart-info-box-${Date.now()}-${Math.random()
				.toString(36)
				.substr(2, 9)}`,
		});
	}

	const handleChangeValue = (key, value) => {
		setAttributes({
			content: {
				...content,
				[key]: value,
			},
		});
	};

	useEffect(() => {
		setAttributes({
			infoBox,
			container,
			mediaContainer,
			title,
			description,
			cta,
			featuredContainer,
		});
	}, [
		infoBox,
		container,
		mediaContainer,
		title,
		description,
		cta,
		featuredContainer,
	]);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Content">
					<p>Icon</p>
					<IconSelect attributes={attributes} setAttributes={setAttributes} />
					<br />
					<TextControl
						label="Title"
						onChange={(value) => handleChangeValue("title", value)}
						value={content.title}
					/>
					<br />
					<TextareaControl
						label={__("Description", "smart-info-box")}
						value={content.description}
						onChange={(value) => handleChangeValue("description", value)}
					/>
					<br />
					<TextControl
						label={__("Button Text", "smart-info-box")}
						onChange={(value) => handleChangeValue("buttonText", value)}
						value={content.buttonText}
					/>
					<TextControl
						label={__("Badge Text", "smart-info-box")}
						onChange={(value) => handleChangeValue("badgeText", value)}
						value={content.badgeText}
					/>
				</PanelBody>
			</InspectorControls>
			<InfoBox2
				attributes={attributes}
				setAttributes={setAttributes}
				context={context}
				onChangeValue={handleChangeValue}
			/>
		</>
	);
}
