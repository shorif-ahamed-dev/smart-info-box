import { TabPanel } from "@wordpress/components";
import SettingsIcon from "../../assets/SettingsIcon";
import AppearenceIcon from "../../assets/AppearenceIcon";
import { useAttributes } from "../../context/AttributesContext";
import LayoutSettings from "./LayoutSettings";
import StyleSettings from "./StyleSettings";

const InfoBoxPanel = () => {
	const { attributes, setAttributes } = useAttributes();

	const onSelect = (value) => {};
	return (
		<TabPanel
			className="my-tab-panel"
			activeClass="active-tab"
			onSelect={onSelect}
			tabs={[
				{
					name: "layout",
					title: (
						<span>
							<SettingsIcon />
							Layout
						</span>
					),
					className: "tab-one",
				},
				{
					name: "style",
					title: (
						<span>
							<AppearenceIcon />
							Style
						</span>
					),
					className: "tab-two",
				},
			]}
		>
			{(tab) => {
				if (tab.name === "layout") {
					return (
						<LayoutSettings
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					);
				}
				if (tab.name === "style") {
					return (
						<StyleSettings
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					);
				}
			}}
		</TabPanel>
	);
};

export default InfoBoxPanel;
