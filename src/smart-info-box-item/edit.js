import { __ } from "@wordpress/i18n";
import "./editor.scss";
import { useEffect } from "@wordpress/element";
import InfoBox2 from "./components/InfoBox2";

export default function Edit({ attributes, setAttributes, context }) {
	const { content } = attributes;

	// 🔥 Parent attributes via context
	const infoBox = context["smartInfoBox/infoBox"];
	const container = context["smartInfoBox/container"];
	const mediaContainer = context["smartInfoBox/mediaContainer"];
	const iconImage = context["smartInfoBox/iconImage"];
	const title = context["smartInfoBox/title"];
	const description = context["smartInfoBox/description"];
	const cta = context["smartInfoBox/cta"];
	const featuredStyle = context["smartInfoBox/featured"];

	const handleTitleChange = (newTitle) => {
		setAttributes({
			content: {
				...content,
				title: newTitle,
			},
		});
	};

	const handleDescriptionChange = (newDescription) => {
		setAttributes({
			content: {
				...content,
				description: newDescription,
			},
		});
	};

	const handleButtonTextChange = (newButtonText) => {
		setAttributes({
			content: {
				...content,
				buttonText: newButtonText,
			},
		});
	};

	useEffect(() => {
		setAttributes({
			infoBox,
			container,
			mediaContainer,
			iconImage,
			title,
			description,
			cta,
			featuredStyle,
		});
	}, [
		infoBox,
		container,
		mediaContainer,
		iconImage,
		title,
		description,
		cta,
		featuredStyle,
	]);

	return (
		<>
			{/* <InspectorControls>
				<PanelBody title="Content">
					<TextControl
						label="Title"
						onChange={handleTitleChange}
						value={title}
					/>
					<br />
					<TextareaControl
						label={__("Description", "smart-info-box")}
						value={description}
						onChange={handleDescriptionChange}
					/>
					<br />
					<TextControl
						label={__("Button Text", "smart-info-box")}
						onChange={handleButtonTextChange}
						value={buttonText}
					/>
					<p>Icon</p>
					<IconSelect attributes={attributes} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls> */}
			<InfoBox2
				attributes={attributes}
				setAttributes={setAttributes}
				context={context}
				handleTitleChange={handleTitleChange}
				handleDescriptionChange={handleDescriptionChange}
				handleButtonTextChange={handleButtonTextChange}
			/>
		</>
	);
}
