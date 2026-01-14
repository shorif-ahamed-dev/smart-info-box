import TransparentBox from '../assets/styleLayoutIcon/TransparentBox';
import SquareBox from '../assets/styleLayoutIcon/SquareBox';
import GradiantBox from '../assets/styleLayoutIcon/GradiantBox';
import ImageBox from '../assets/styleLayoutIcon/ImageBox';
import CustomColorPicker from "./CustomColorPicker"
import { useState } from "@wordpress/element";
import CustomGradientPicker from "./CustomGradientPicker";
import { useAttributes } from '../context/AttributesContext';
import SelectImage from './SelectImage';
export default function BackgroundType() {
    const { attributes, setAttributes } = useAttributes();
    const { styles } = attributes
    const { backgroundType } = styles;
    const [bgType, setBgType] = useState(backgroundType);

    const backgroundTypes = [
        { id: 1, type: "none", icon: TransparentBox },
        { id: 2, type: "solid", icon: SquareBox },
        { id: 3, type: "gradient", icon: GradiantBox },
        { id: 4, type: "image", icon: ImageBox },
    ]

    const onBackgroundTypeChange = (type) => {
        setBgType(type)
        setAttributes({
            styles: {
                ...styles,
                backgroundType: type,
            },
        });
    }
    return (
        <>
            <div className="style-normal-background-types-button">
                <p>Background Type</p>
                <div>
                    {backgroundTypes.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                role="button"
                                key={item.id}
                                className={bgType === item.type ? "is-active" : ""}
                                onClick={() => onBackgroundTypeChange(item.type)}
                            >
                                <Icon active={bgType === item.type} />
                            </button>
                        );
                    })}
                </div>
            </div>
            {/* {backgroundType === "transparent" && <TransparentStyle />} */}
            {backgroundType === "solid" && <CustomColorPicker />}

            {backgroundType === "gradient" && (
                <CustomGradientPicker />
            )}
            {backgroundType === "image" && (
                <SelectImage />
            )}

        </>
    )
}
