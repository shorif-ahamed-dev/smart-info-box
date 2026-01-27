import { useState } from "@wordpress/element";
import { useAttributes } from "../../context/AttributesContext";

export default function ScaleImage() {
	const { attributes, setAttributes } = useAttributes();
	const { container } = attributes;
	const { image } = container;
	const [toggleStyleMode, setToggleStyleMode] = useState(image.size);

	const onImageScaleSelect = (scale) => {
		setToggleStyleMode(scale);
		setAttributes({
			container: {
				...container,
				image: {
					...container.image,
					size: scale,
				},
			},
		});
	};
	return (
		<div className="style-hover-buttons">
			<button
				type="button"
				className={toggleStyleMode === "auto" ? "is-active" : ""}
				onClick={() => onImageScaleSelect("auto")}
			>
				None
			</button>

			<button
				className={toggleStyleMode === "cover" ? "is-active" : ""}
				onClick={() => onImageScaleSelect("cover")}
			>
				Cover
			</button>
			<button
				className={toggleStyleMode === "contain" ? "is-active" : ""}
				onClick={() => onImageScaleSelect("contain")}
			>
				Contain
			</button>
		</div>
	);
}
