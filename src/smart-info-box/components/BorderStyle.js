import React from 'react'
import SolidBorder from '../assets/styleLayoutIcon/SolidBorder';
import DashBorder from '../assets/styleLayoutIcon/DashBorder';
import DottedBorder from '../assets/styleLayoutIcon/DottedBorder';
import DoubleBorder from '../assets/styleLayoutIcon/DoubleBorder';
import { useAttributes } from '../context/AttributesContext';

export default function BorderStyle() {

    const { attributes, setAttributes } = useAttributes();
    const { borderType, borderColor, borderWidth } = attributes.styles;

    const borderButtons = [
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

    const handleBorderChange = (type) => {
        setAttributes({
            styles: {
                ...attributes.styles,
                borderType: type,
            },
        });
    };
    return (
        <div className="transparent-style">
            <p>Border</p>
            <div className="style-border-buttons">
                {borderButtons.map(({ type, label, icon: Icon }) => (
                    <button
                        key={type}
                        type="button"
                        className={borderType === type ? "is-active" : ""}
                        aria-pressed={borderType === type}
                        onClick={() => handleBorderChange(type)}
                    >
                        {Icon ? <Icon /> : label}
                    </button>
                ))}
            </div>
        </div>
    )
}
