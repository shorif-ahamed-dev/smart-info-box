import { ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useAttributes } from '../context/AttributesContext';

export default function BoxShadow({ label }) {
    const { attributes, setAttributes } = useAttributes();
    const { boxShadow } = attributes.styles
    const [value, setValue] = useState(boxShadow === "none" ? false : true);

    const onToggleShadow = () => {
        setValue((state) => !state)
        if (value) {
            setAttributes({
                styles: {
                    ...attributes.styles,
                    boxShadow: "0 0 20px rgba(102, 126, 234, 0.6)"
                },
            });
        } else {
            setAttributes({
                styles: {
                    ...attributes.styles,
                    boxShadow: "none"
                },
            });
        }
    }
    return (
        <div className="components-header">
            <p>{label} </p>
            <span>
                <ToggleControl
                    checked={value}
                    onChange={onToggleShadow}
                />
            </span>
        </div>
    )
}
