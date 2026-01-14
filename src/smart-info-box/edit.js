import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { PanelBody, TabPanel } from "@wordpress/components";
import SettingsIcon from "./assets/SettingsIcon";
import AppearenceIcon from "./assets/AppearenceIcon";
import LayoutSettings from "./components/LayoutSettings";
import StyleSettings from "./components/StyleSettings";
import { airplane, arrowRightAlt } from "@wordpress/icons";
import Airplane from "./assets/Airplane";
import RightArrow from "./assets/RightArrow";
import { AttributesProvider } from "./context/AttributesContext";
import getBackgroundStyle from "./utils/getBackgroundStyle";
import InfoBox from "./components/InfoBox";

export default function Edit({ attributes, setAttributes }) {
	const onSelect = (value) => {};
	return (
		<AttributesProvider attributes={attributes} setAttributes={setAttributes}>
			<InspectorControls>
				<PanelBody title="Info Box">
					<TabPanel
						className="my-tab-panel"
						activeClass="active-tab"
						onSelect={onSelect}
						tabs={[
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
							{
								name: "layout",
								title: (
									<span>
										{" "}
										<SettingsIcon />
										Layout
									</span>
								),
								className: "tab-one",
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
				</PanelBody>
			</InspectorControls>
			<InfoBox />
		</AttributesProvider>
	);
}
