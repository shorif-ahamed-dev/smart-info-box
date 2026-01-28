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
				attributeKey="container"
				subKey="padding"
				deviceType={"desktop"}// Pass current device type from state/context
				min={0}
				max={200}
				step={1}
				unit="px"
				isResponsive={true} // Enable responsive mode
			/>
			<br />
			<CustomBoxControls
				label="Margin"
				attributeKey="container"
				subKey="margin"
				deviceType={"desktop"}
				min={0}
				max={200}
				isResponsive={true}
			/>
		</>
	);
}
