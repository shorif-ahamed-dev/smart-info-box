import { useState } from '@wordpress/element';
import {
    Button,
    ColorPicker,
    PanelBody,
    Popover,
    RangeControl
} from '@wordpress/components';
import ResetIcon from '../assets/ResetIcon';
import { useAttributes } from '../context/AttributesContext';
export default function ImageOverlay({ }) {
    const { attributes, setAttributes } = useAttributes();
    const { styles } = attributes
    const { backgroundColor, imageOverlayOpacity, imageOverlayColor } = styles;
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    const onColorChange = (value) => {
        setAttributes({
            styles: {
                ...styles,
                imageOverlayColor: value.hex,
            },
        });
    }
    const onOpacityChange = (value) => {
        setAttributes({
            styles: {
                ...styles,
                imageOverlayOpacity: value,
            },
        });
    }
    return (
        <>
            <br />
            <br />
            <div className='color-picker-container'>
                <p>Overlay Color</p>
                <span>
                    <ResetIcon />
                    <div
                        variant="secondary"
                        onClick={() => setIsPickerOpen(!isPickerOpen)}
                        style={{
                            backgroundColor: imageOverlayColor,
                            height: '24px',
                            width: '24px',
                            borderRadius: '50%',
                            border: '2px solid #DDD',
                            cursor: 'pointer',
                        }}
                    >
                    </div>
                </span>
            </div>

            {isPickerOpen && (
                <Popover position="middle left">
                    <ColorPicker
                        color={backgroundColor}
                        onChangeComplete={onColorChange}
                        disableAlpha
                    />
                </Popover>
            )}

            <div className="style-box-control">
                <div className='border-width-heading-container'>
                    <p>
                        Overlay Opacity
                    </p>
                    <div>
                        <ResetIcon />
                    </div>

                </div>
            </div>
            <RangeControl
                __next40pxDefaultSize
                value={imageOverlayOpacity}
                min={0}
                max={100}
                step={1}
                initialPosition={50}
                onChange={onOpacityChange}
                color="#884AE3"
            />
        </>
    );
}
