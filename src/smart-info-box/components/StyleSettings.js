import { useState } from "@wordpress/element"
import NormalStyle from "./NormalStyle";
import HoverStyle from "./HoverStyle";

export default function StyleSettings({ attributes, setAttributes }) {
    const [toggleStyleMode, setToggleStyleMode] = useState(false)
    const { layout, contentAlignment } = attributes;
    return (
        <>
            <div className="inspector-section">
                <div className="style-hover-buttons">
                    <button
                        type="button"
                        className={contentAlignment === 'left' ? 'is-active' : ''}
                        aria-pressed={contentAlignment === 'left'}
                        onClick={() => setAttributes({ layout: item.id })}
                    // onClick={() => setToggleStyleMode(!toggleStyleMode)}
                    >
                        Normal
                    </button>

                    <button
                        className={contentAlignment === 'center' ? 'is-active' : ''}
                        aria-pressed={contentAlignment === 'center'}
                        onClick={() => setAttributes({ layout: item.id })}
                    // onClick={() => setToggleStyleMode(!toggleStyleMode)}
                    >
                        Hover
                    </button>
                </div>
                {toggleStyleMode ? <NormalStyle /> : <HoverStyle />}
            </div>
        </ >
    )
}
