import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import AddButton from '../assets/AddButton';

export default function IconSelect({ attributes, setAttributes }) {
    const { content } = attributes
    const { icon } = content

    const onIconSelect = (media) => {
        setAttributes({
            content: {
                ...content, icon: {
                    ...content.icon,
                    id: media.id,
                    url: media.url,
                    alt: media.alt,
                }
            }
        });
    }
    const handleRemoveIcon = () => {
        setAttributes({
            content: {
                ...content, icon: {
                    ...content.icon,
                    id: '',
                    url: '',
                    alt: '',
                }
            }
        });
    }

    return (
        <>
            <div className='image-upload-box'>
                <MediaUploadCheck>
                    <MediaUpload
                        allowedTypes={['image']}
                        // value={image?.id}
                        onSelect={onIconSelect}
                        render={({ open }) => (
                            <>
                                {icon?.url ? (
                                    <div className="image-preview">
                                        <img
                                            src={icon.url}
                                            alt={icon.alt || ''}
                                        // onClick={open}
                                        />

                                        <div className="image-actions">
                                            <button
                                                type="button"
                                                className="change-image"
                                                onClick={open}
                                            >
                                                Change Image
                                            </button>

                                            <button
                                                type="button"
                                                className="clear-image"
                                                onClick={handleRemoveIcon}
                                                aria-label="Remove image"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        role='button'
                                        onClick={open}
                                    >
                                        <AddButton />
                                    </button>
                                )}
                            </>
                        )}
                    />
                </MediaUploadCheck>
            </div>
            {/* {image.url && <>
                <ScaleImage />
                <ImageOverlay />
            </>} */}

        </>
    );
}
