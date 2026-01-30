import hexToRgb from "./hexToRgb";

const getBackgroundStyle = (styles) => {
    if (!styles) return {};
    const bgStyle = {};
    if (styles.backgroundType === 'solid') {
        bgStyle.backgroundColor = styles.backgroundColor;
    } else if (styles.backgroundType === 'gradient') {
        bgStyle.background = styles.gradient;
    } else if (styles.backgroundType === 'image' && styles.image?.url) {
        bgStyle.backgroundImage = `url(${styles.image.url})`;
        bgStyle.backgroundPosition = styles.image.position || 'center';
        bgStyle.backgroundSize = styles.image.size || 'cover';
        bgStyle.backgroundRepeat = styles.image.repeat || 'no-repeat';

        if (styles.imageOverlayColor && styles.imageOverlayOpacity) {
            const opacity = styles.imageOverlayOpacity / 100;
            const overlay = opacity
                ? `linear-gradient(${hexToRgb(styles.imageOverlayColor, opacity)}, ${hexToRgb(styles.imageOverlayColor, opacity)})`
                : '';
            bgStyle.position = 'relative';
            bgStyle.backgroundImage = `${overlay}, url(${styles.image.url})`;
            // bgStyle.backgroundImage = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url(${styles.image.url})`;
        }
    }

    return bgStyle;
};

export default getBackgroundStyle