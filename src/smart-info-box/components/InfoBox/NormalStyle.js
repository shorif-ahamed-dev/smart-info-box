import BorderStyle from "./BorderStyle";
import BoxShadow from "./BoxShadow";
import BackgroundStyle from "./BackgroundStyle";
import CustomBoxControls from "../common/CustomBoxControls";
import { useAttributes } from "../../context/AttributesContext";
import { RangeControl } from "@wordpress/components";

export default function NormalStyle() {
	const { attributes, setAttributes } = useAttributes();
	const { rowGap, columnsGap } = attributes.infoBox;
	return (
		<>
			<BackgroundStyle />
			<BorderStyle />
			<BoxShadow label="Box Shadow" />
			<CustomBoxControls
				label="Padding"
				attributeKey="padding"
				min={0}
				max={200}
			/>
			<br />
			<CustomBoxControls
				label="Margin"
				attributeKey="margin"
				min={0}
				max={200}
			/>
		</>
	);
}
