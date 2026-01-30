import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { PanelBody } from "@wordpress/components";
import InfoBoxPanel from "./InfoBox/InfoBoxPanel";
import IconImagePanel from "./Icon-Image/IconImagePanel";
import TitlePanle from "./title/TitlePanle";
import DescriptionPanel from "./description/DescriptionPanel";
import BadgePanel from "./badge/BadgePanel";
import CtaPannel from "./cta/CtaPannel";

export default function AllPanels() {
	const [openPanel, setOpenPanel] = useState("info");

	const PANELS = [
		{
			key: "info",
			title: "Info Box",
			Component: InfoBoxPanel,
		},
		{
			key: "icon",
			title: "Icon / Image",
			Component: IconImagePanel,
		},
		{
			key: "title",
			title: "Title",
			Component: TitlePanle,
		},
		{
			key: "description",
			title: "Description",
			Component: DescriptionPanel,
		},
		{
			key: "calltoaction",
			title: "Call To Action",
			Component: CtaPannel,
		},
		{
			key: "badge",
			title: "Badge",
			Component: BadgePanel,
		},
	];

	const togglePanel = (key) => {
		setOpenPanel((current) => (current === key ? null : key));
	};
	return (
		<>
			{PANELS.map(({ key, title, Component }) => (
				<PanelBody
					key={key}
					title={title}
					opened={openPanel === key}
					onToggle={() => togglePanel(key)}
				>
					<Component />
				</PanelBody>
			))}
		</>
	);
}
