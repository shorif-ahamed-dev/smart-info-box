import { useState } from "@wordpress/element"
import NormalStyle from "./NormalStyle";
import HoverStyle from "./HoverStyle";

export default function StyleSettings({ attributes, setAttributes }) {
    const [toggleStyleMode, setToggleStyleMode] = useState('normal')
    const { contentAlignment } = attributes;
    return (
        <>
            <div className="inspector-section">
                <div className="style-hover-buttons">
                    <button
                        type="button"
                        className={toggleStyleMode === 'normal' ? 'is-active' : ''}
                        aria-pressed={contentAlignment === 'left'}
                        onClick={() => setToggleStyleMode('normal')}
                    >
                        Normal
                    </button>

                    <button
                        className={toggleStyleMode === 'hover' ? 'is-active' : ''}
                        aria-pressed={contentAlignment === 'center'}
                        onClick={() => setToggleStyleMode('hover')}
                    >
                        Hover
                    </button>
                </div>
                {toggleStyleMode === "normal" ? <NormalStyle /> : <HoverStyle />}
            </div>
        </ >
    )
}
