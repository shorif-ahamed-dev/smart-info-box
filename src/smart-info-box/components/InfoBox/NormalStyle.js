import BorderStyle from "./BorderStyle";
import BoxShadow from "./BoxShadow";
import BackgroundStyle from "./BackgroundStyle";
import CustomBoxControls from "../common/CustomBoxControls";

export default function NormalStyle() {
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
