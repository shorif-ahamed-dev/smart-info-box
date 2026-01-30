import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import AddButton from "../../assets/styleLayoutIcon/AddButton";
import { useAttributes } from "../../context/AttributesContext";
import ScaleImage from "./ScaleImage";
import ImageOverlay from "./ImageOverlay";

export default function SelectImage() {
	const { attributes, setAttributes } = useAttributes();
	const { container } = attributes;
	const { image } = container;

	const onImageSelect = (media) => {
		setAttributes({
			container: {
				...container,
				image: {
					...container.image,
					id: media.id,
					url: media.url,
					alt: media.alt,
				},
			},
		});
	};
	const handleRemoveImage = () => {
		setAttributes({
			container: {
				...container,
				image: {
					...container.image,
					id: "",
					url: "",
					alt: "",
				},
			},
		});
	};

	return (
		<>
			<div className="image-upload-box">
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={["image"]}
						// value={image?.id}
						onSelect={onImageSelect}
						render={({ open }) => (
							<>
								{image?.url ? (
									<div className="image-preview">
										<img
											src={image.url}
											alt={image.alt || ""}
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
												onClick={handleRemoveImage}
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
			{image.url && (
				<>
					<ScaleImage />
					<ImageOverlay />
				</>
			)}
		</>
	);
}
