import { Popover, ColorPicker } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { useAttributes } from "../context/AttributesContext";
import ResetIcon from "../assets/ResetIcon";

export default function StyleColorControl({
    label,
    attributeKey, // "borderColor"
}) {
    const [isOpen, setIsOpen] = useState(false);
    const { attributes, setAttributes } = useAttributes();
    const value = attributes.styles?.[attributeKey];

    const handleChange = (color) => {
        setAttributes({
            styles: {
                ...attributes.styles,
                [attributeKey]: color,
            },
        });
    };

    const handleReset = () => {
        setAttributes({
            styles: {
                ...attributes.styles,
                [attributeKey]: "",
            },
        });
    };

    return (
        <>
            <div className="color-picker-container">
                <p>{label}</p>

                <span>
                    <button onClick={handleReset}>
                        <ResetIcon />
                    </button>

                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            backgroundColor: value,
                            height: 24,
                            width: 24,
                            borderRadius: "50%",
                            border: "2px solid #DDD",
                            cursor: "pointer",
                        }}
                    />
                </span>
            </div>

            {isOpen && (
                <Popover position="middle left">
                    <ColorPicker
                        color={value}
                        onChangeComplete={(v) => handleChange(v.hex)}
                        disableAlpha
                    />
                </Popover>
            )}
        </>
    );
}
