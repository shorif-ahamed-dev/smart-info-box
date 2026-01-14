import Box1 from '../assets/Box1';
import Box2 from '../assets/Box2';
import Box3 from '../assets/Box3';
import Box4 from '../assets/Box4';
import Box5 from '../assets/Box5';

export default function LayoutSettings({ attributes, setAttributes }) {
    const { layout, contentAlignment } = attributes;

    const layouts = [
        { id: 'default', label: 'Icon Top', icon: Box1 },
        { id: 'icon-left', label: 'Icon Left', icon: Box2 },
        { id: 'icon-solo', label: 'Icon Solo', icon: Box3 },
        { id: 'icon-link', label: 'Icon Link', icon: Box4 },
        { id: 'icon-top', label: 'Icon Top', icon: Box5 },
    ];

    return (
        <>
            {/* Info Box Layout */}
            <div className="inspector-section">
                <p>Info Box Layout</p>

                <div className="layout-grid">
                    {layouts.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                role="button"
                                className={`layout-card ${layout === item.id ? 'is-active' : ''}`}
                                onClick={() => setAttributes({ layout: item.id })}
                                aria-pressed={layout === item.id}
                            >
                                <Icon active={layout === item.id} />
                            </div>
                        );
                    })}
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
    );
}
