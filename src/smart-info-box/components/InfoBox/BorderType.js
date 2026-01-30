import { useAttributes } from "../../context/AttributesContext";
import SolidBorder from "../../assets/styleLayoutIcon/SolidBorder";
import DashBorder from "../../assets/styleLayoutIcon/DashBorder";
import DottedBorder from "../../assets/styleLayoutIcon/DottedBorder";
import DoubleBorder from "../../assets/styleLayoutIcon/DoubleBorder";
import ToolbarIcon from "../../assets/ToolbarIcon";

export default function BorderType({
	attributePath = "container",
	label = "Border",
	borderOptions = null
}) {
	const { attributes, setAttributes } = useAttributes();

	const defaultBorderButtons = [
		{
			type: "none",
			label: "None",
			icon: null,
		},
		{
			type: "solid",
			icon: SolidBorder,
		},
		{
			type: "dashed",
			icon: DashBorder,
		},
		{
			type: "dotted",
			icon: DottedBorder,
		},
		{
			type: "double",
			icon: DoubleBorder,
		},
	];

	const borderButtons = borderOptions || defaultBorderButtons;
	const currentBorderType = attributes[attributePath]?.borderType;

	const handleBorderChange = (type) => {
		setAttributes({
			[attributePath]: {
				...attributes[attributePath],
				borderType: type,
			},
		});
	};

	return (
		<>
			<div className="components-header">
				<p>{label}</p>
				<span>
					<ToolbarIcon />
				</span>
			</div>

			<div className="style-border-buttons">
				{borderButtons.map(({ type, label: btnLabel, icon: Icon }) => (
					<button
						key={type}
						type="button"
						className={currentBorderType === type ? "is-active" : ""}
						aria-pressed={currentBorderType === type}
						onClick={() => handleBorderChange(type)}
					>
						{Icon ? <Icon /> : btnLabel}
					</button>
				))}
			</div>
			<br />
			<br />
		</>
	);
}