import { __ } from '@wordpress/i18n';
import './editor.scss';
import InfoBox from './components/InfoBox';
import { InspectorControls } from '@wordpress/block-editor';
import { TextareaControl, InputControl } from '@wordpress/components';
import { PanelBody } from '@wordpress/components';
import { TextControl } from '@wordpress/components';
import IconSelect from './components/IconSelect';
import { useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes, context }) {
    const { content } = attributes;
    const { icon, title, description, buttonText } = content;
    const layout = context['smartInfoBox/layout'] || 'default';
    const styles = context['smartInfoBox/styles'] || {};
    const contentAlignment = context['smartInfoBox/contentAlignment'] || 'center';

    const handleTitleChange = (newTitle) => {
        setAttributes({
            content: {
                ...content,
                title: newTitle
            }
        });
    };

    const handleDescriptionChange = (newDescription) => {
        setAttributes({
            content: {
                ...content,
                description: newDescription
            }
        });
    };

    const handleButtonTextChange = (newButtonText) => {
        setAttributes({
            content: {
                ...content,
                buttonText: newButtonText
            }
        });
    };

    useEffect(() => {
        setAttributes({
            layout,
            styles,
            contentAlignment
        });
    }, [layout, styles, contentAlignment]);


    return (
        <>
            <InspectorControls>
                <PanelBody title="Content">
                    <TextControl
                        label="Title"
                        onChange={handleTitleChange}
                        value={title}
                    />
                    <br />
                    <TextareaControl
                        label={__('Description', 'smart-info-box')}
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <br />
                    <TextControl
                        label={__('Button Text', 'smart-info-box')}
                        onChange={handleButtonTextChange}
                        value={buttonText}
                    />
                    <p>
                        Icon
                    </p>
                    <IconSelect attributes={attributes} setAttributes={setAttributes} />
                </PanelBody>
            </InspectorControls>
            <InfoBox attributes={attributes} setAttributes={setAttributes} context={context} handleTitleChange={handleTitleChange} handleDescriptionChange={handleDescriptionChange} handleButtonTextChange={handleButtonTextChange} />
        </>
    );
}