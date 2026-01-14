import { useAttributes } from "../context/AttributesContext";
import SolidBorder from "../assets/styleLayoutIcon/SolidBorder";
import DashBorder from "../assets/styleLayoutIcon/DashBorder";
import DottedBorder from "../assets/styleLayoutIcon/DottedBorder";
import DoubleBorder from "../assets/styleLayoutIcon/DoubleBorder";
import ResetIcon from "../assets/ResetIcon";

import { Popover } from "@wordpress/components";
import { ColorPicker } from "@wordpress/components";
import { useState } from '@wordpress/element';
import BorderStyle from "./BorderStyle";
import StyleRangeControl from "./StyleRangeControl";
import StyleColorControl from "./StyleColorControl";
import StyleBoxControl from "./StyleBoxControl";
export default function TransparentStyle() {
    const [isPickerOpen, setIsPickerOpen] = useState(false);
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

    const handleBorderColorChange = (color) => {
        setAttributes({
            styles: {
                ...attributes.styles,
                borderColor: color,
            },
        });
    }
    // return (
    //     <div className="transparent-style">
    //         <p>Border</p>
    //         <div className="style-border-buttons">
    //             {borderButtons.map(({ type, label, icon: Icon }) => (
    //                 <button
    //                     key={type}
    //                     type="button"
    //                     className={borderType === type ? "is-active" : ""}
    //                     aria-pressed={borderType === type}
    //                     onClick={() => handleBorderChange(type)}
    //                 >
    //                     {Icon ? <Icon /> : label}
    //                 </button>
    //             ))}
    //         </div>
    //         <BorderStyle />
    //         <div className='color-picker-container'>
    //             <p>Border Color</p>
    //             <span>
    //                 <ResetIcon />
    //                 <div
    //                     variant="secondary"
    //                     onClick={() => setIsPickerOpen(!isPickerOpen)}
    //                     style={{
    //                         backgroundColor: borderColor,
    //                         height: '24px',
    //                         width: '24px',
    //                         borderRadius: '50%',
    //                         border: '2px solid #DDD',
    //                         cursor: 'pointer',
    //                     }}
    //                 >
    //                 </div>
    //             </span>
    //         </div>
    //         <BorderStyle />
    //         {isPickerOpen && (
    //             <Popover position="middle left">
    //                 <ColorPicker
    //                     color={borderColor}
    //                     onChangeComplete={(value) => {
    //                         // setAttributes({ backgroundColor: value.hex })
    //                         handleBorderColorChange(value.hex)
    //                     }
    //                     }
    //                     disableAlpha
    //                 />
    //             </Popover>
    //         )}
    //     </div>
    // );

    return (<>
        <StyleRangeControl
            label="Border Width"
            attributeKey="borderWidth"
            min={0}
            max={2}
            step={0.5}
        />

        <StyleColorControl
            label="Border Color"
            attributeKey="borderColor"
        />
        <StyleBoxControl
            label="Border Radius"
            attributeKey="margin"
        />

        <StyleRangeControl
            label="Padding"
            attributeKey="padding"
            min={0}
            max={2}
            step={0.5}
        />



        <StyleBoxControl
            label="Margin"
            attributeKey="margin"
        />
    </>)
}
