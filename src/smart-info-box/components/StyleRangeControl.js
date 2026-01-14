import { RangeControl } from "@wordpress/components";
import { useAttributes } from "../context/AttributesContext";
import ResetIcon from "../assets/ResetIcon";

export default function StyleRangeControl({
    label,
    attributeKey,     // "borderWidth" | "borderRadius"
    min = 0,
    max = 50,
    step = 1,
    unit = "px",
}) {
    const { attributes, setAttributes } = useAttributes();
    const value = attributes.styles?.[attributeKey];

    const handleChange = (newValue) => {
        setAttributes({
            styles: {
                ...attributes.styles,
                [attributeKey]: newValue,
            },
        });
    };

    const handleReset = () => {
        setAttributes({
            styles: {
                ...attributes.styles,
                [attributeKey]: 0,
            },
        });
    };

    return (
        <>
            {/* <div className="style-control-header">
                <p>{label}</p>
                <button onClick={handleReset}>
                    <ResetIcon />
                </button>
            </div> */}
            <div className='border-width-heading-container'>
                <p>
                    {label}
                    {/* <span>
                                <DesktopIcon />
                            </span> */}
                </p>
                <div>
                    <ResetIcon />
                    <ResetIcon />
                    <ResetIcon />
                </div>

            </div>
            <RangeControl
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
                step={step}
                marks
            />
        </>
    );
}
