import { Button, ButtonGroup } from '@wordpress/components';
import Box1 from '../assets/Box1';

export default function LayoutSettings({ attributes, setAttributes }) {
    const { layout, contentAlignment } = attributes;

    const layouts = [
        { id: 'icon-top', label: 'Icon Top' },
        { id: 'icon-left', label: 'Icon Left' },
        { id: 'icon-right', label: 'Icon Right' },
        { id: 'icon-center', label: 'Center' },
    ];
    return (
        <>
            {/* Info Box Layout */}
            <div className="inspector-section">
                <p>Info Box Layout</p>
                <div className="layout-grid">
                    {layouts.map((item) => (
                        <div
                            role='button'
                            key={item.id}
                            className={`layout-card ${layout === item.id ? 'is-active' : ''
                                }`}
                            onClick={() => setAttributes({ layout: item.id })}
                            aria-pressed={layout === item.id}
                        >
                            <Box1 active={layout === item.id} />


                        </div>
                    ))}
                </div>
            </div>

            {/* Content Alignment */}
            <div className="inspector-section">
                <p>Content Alignment</p>

                <div className="alignment-buttons">
                    <button
                        type="button"
                        className={contentAlignment === 'left' ? 'is-active' : ''}
                        aria-pressed={contentAlignment === 'left'}
                        onClick={() => setAttributes({ contentAlignment: 'left' })}
                    >
                        <span className="dashicons dashicons-editor-alignleft" />
                    </button>

                    <button
                        type="button"
                        className={contentAlignment === 'center' ? 'is-active' : ''}
                        aria-pressed={contentAlignment === 'center'}
                        onClick={() => setAttributes({ contentAlignment: 'center' })}
                    >
                        <span className="dashicons dashicons-editor-aligncenter" />
                    </button>

                    <button
                        type="button"
                        className={contentAlignment === 'right' ? 'is-active' : ''}
                        aria-pressed={contentAlignment === 'right'}
                        onClick={() => setAttributes({ contentAlignment: 'right' })}
                    >
                        <span className="dashicons dashicons-editor-alignright" />
                    </button>
                </div>
            </div>
        </>
    )
}
