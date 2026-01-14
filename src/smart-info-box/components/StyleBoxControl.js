import { RangeControl, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { useAttributes } from "../context/AttributesContext";
import ResetIcon from "../assets/ResetIcon";

const SIDES = ["top", "right", "bottom", "left"];

export default function StyleBoxControl({
    label,
    attributeKey, // "margin" | "padding"
    min = 0,
    max = 100,
    step = 1,
}) {
    const { attributes, setAttributes } = useAttributes();
    const value = attributes.styles?.[attributeKey] || {};
    const [isLinked, setIsLinked] = useState(true);
    const unifiedValue = value.top ?? 0;

    const updateLinked = (newValue) => {
        const updated = {};
        SIDES.forEach((side) => (updated[side] = newValue));
        setAttributes({
            styles: {
                ...attributes.styles,
                [attributeKey]: newValue,
            },
        });
    };

    const updateUnlinked = (side, newValue) => {
        setAttributes({
            styles: {
                ...attributes.styles,
                [attributeKey]: {
                    ...value,
                    [side]: newValue,
                },
            },
        });
    };

    const resetAll = () => updateLinked(0);

    return (
        <div className="style-box-control">
            <div className='border-width-heading-container'>
                <p>
                    {label}
                </p>
                <div>
                    <ResetIcon />
                    <ResetIcon />
                    <ResetIcon />
                </div>

            </div>

            {/* Controls */}
            {isLinked ? (
                <RangeControl
                    __next40pxDefaultSize
                    initialPosition={value}
                    value={value}
                    max={100}
                    min={0}
                    onBlur={() => { }}
                    onChange={updateLinked}
                    onFocus={() => { }}
                    onMouseLeave={() => { }}
                    onMouseMove={() => { }}
                    color="#884AE3"
                />
            ) : (
                SIDES.map((side) => (
                    <RangeControl
                        key={side}
                        label={side}
                        value={value?.[side] ?? 0}
                        onChange={(v) => updateUnlinked(side, v)}
                        min={min}
                        max={max}
                        step={step}

                    />
                ))
            )}
        </div>
    );
}
