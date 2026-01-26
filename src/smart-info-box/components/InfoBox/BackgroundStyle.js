import TransparentBox from "../../assets/styleLayoutIcon/TransparentBox";
import SquareBox from "../../assets/styleLayoutIcon/SquareBox";
import GradiantBox from "../../assets/styleLayoutIcon/GradiantBox";
import ImageBox from "../../assets/styleLayoutIcon/ImageBox";
import { useState } from "@wordpress/element";
import CustomGradientPicker from "./CustomGradientPicker";
import SelectImage from "./SelectImage";
import ColorControl from "../common/ColorControl";
import { useAttributes } from "../../context/AttributesContext";
export default function BackgroundStyle() {
	const { attributes, setAttributes } = useAttributes();
	const { container } = attributes;
	const { backgroundType, backgroundColor } = container;
	const [bgType, setBgType] = useState(backgroundType);

	const backgroundTypes = [
		{ id: 1, type: "transparent", icon: TransparentBox },
		{ id: 2, type: "solid", icon: SquareBox },
		{ id: 3, type: "gradient", icon: GradiantBox },
		{ id: 4, type: "image", icon: ImageBox },
	];

	const onBackgroundTypeChange = (type) => {
		setBgType(type);
		setAttributes({
			container: {
				...container,
				backgroundType: type,
			},
		});
	};
	return (
		<>
			<div className="style-normal-background-types-button">
				<p>Background Type</p>
				<div>
					{backgroundTypes.map((item) => {
						const Icon = item.icon;
						return (
							<button
								role="button"
								key={item.id}
								className={bgType === item.type ? "is-active" : ""}
								onClick={() => onBackgroundTypeChange(item.type)}
							>
								<Icon active={bgType === item.type} />
							</button>
						);
					})}
				</div>
			</div>
			{backgroundType === "solid" && (
				<ColorControl
					label="Solid Color"
					value={backgroundColor}
					onChange={(color) =>
						setAttributes({
							container: {
								...container,
								backgroundType: "solid",
								backgroundColor: color,
							},
						})
					}
					onReset={() =>
						setAttributes({
							container: {
								...container,
								backgroundType: "solid",
								backgroundColor: "#ffffff",
							},
						})
					}
				/>
			)}

			{backgroundType === "gradient" && <CustomGradientPicker />}
			{backgroundType === "image" && <SelectImage />}
		</>
	);
}
