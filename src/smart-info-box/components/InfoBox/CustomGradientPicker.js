import { GradientPicker } from "@wordpress/components";
import { useAttributes } from "../../context/AttributesContext";

export default function CustomGradientPicker() {
	const { attributes, setAttributes } = useAttributes();
	const { container } = attributes;
	const { gradient } = container;

	const onColorChange = (value) => {
		setAttributes({
			container: {
				...container,
				backgroundType: "gradient",
				gradient: value,
			},
		});
	};
	return (
		<div className="custom-gradient-picker">
			<GradientPicker
				value={gradient}
				onChange={onColorChange}
				gradients={[
					{
						name: "JShine",
						gradient:
							"linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
						slug: "jshine",
					},
					{
						name: "Moonlit Asteroid",
						gradient: "linear-gradient(#e66465, #9198e5)",
						slug: "moonlit-asteroid",
					},
					{
						name: "Rastafarie",
						gradient:
							"linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
						slug: "rastafari",
					},
					{
						name: "Jhakas",
						gradient:
							"linear-gradient(144deg, rgb(30, 150, 0) 10%, rgb(255, 242, 0) 47%, rgb(255, 0, 0) 57%)",
						slug: "jhakas",
					},
				]}
			/>
		</div>
	);
}
