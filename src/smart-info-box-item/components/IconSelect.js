import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import AddButton from "../assets/AddButton";
import DashiconPicker from "./DashiconPicker";
import "./dashicon-picker.scss";

export default function IconSelect({ attributes, setAttributes }) {
	const [toggleType, setToggleType] = useState("libeary");
	const { content } = attributes;
	const { icon } = content;

	const onIconSelect = (media) => {
		setAttributes({
			content: {
				...content,
				icon: {
					...content.icon,
					id: media.id,
					url: media.url,
					alt: media.alt,
				},
			},
		});
	};
	const handleRemoveIcon = () => {
		setAttributes({
			content: {
				...content,
				icon: {
					...content.icon,
					id: "",
					url: "",
					alt: "",
				},
			},
		});
	};

	return (
		<>
			<div className="style-hover-buttons">
				<button
					type="button"
					className={toggleType === "libeary" ? "is-active" : ""}
					onClick={() => setToggleType("libeary")}
				>
					Libeary
				</button>

				<button
					className={toggleType === "custom" ? "is-active" : ""}
					onClick={() => setToggleType("custom")}
				>
					Custom
				</button>
			</div>
			<br />
			<br />
			{toggleType === "custom" ? (
				<div className="image-upload-box">
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							// value={image?.id}
							onSelect={onIconSelect}
							render={({ open }) => (
								<>
									{icon?.url ? (
										<div className="image-preview">
											<img
												src={icon.url}
												alt={icon.alt || ""}
												// onClick={open}
											/>

											<div className="image-actions">
												<button
													type="button"
													className="change-image"
													onClick={open}
												>
													Change Image
												</button>

												<button
													type="button"
													className="clear-image"
													onClick={handleRemoveIcon}
													aria-label="Remove image"
												>
													×
												</button>
											</div>
										</div>
									) : (
										<button role="button" onClick={open}>
											<AddButton />
										</button>
									)}
								</>
							)}
						/>
					</MediaUploadCheck>
				</div>
			) : (
				<DashiconPicker
					value={icon.dashIcon}
					onChange={(value) =>
						setAttributes({
							content: {
								...content,
								icon: {
									...content.icon,
									dashIcon: value,
									id: "",
									url: "",
								},
							},
						})
					}
				/>
			)}

			{/* {image.url && <>
                <ScaleImage />
                <ImageOverlay />
            </>} */}
		</>
	);
}
