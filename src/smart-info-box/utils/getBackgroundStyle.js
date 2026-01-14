import hexToRgb from "./hexToRgb";

const getBackgroundStyle = (styles) => {
    if (!styles) return {};

    switch (styles.backgroundType) {
        case "solid":
            return {
                backgroundColor: styles.backgroundColor
            };

        case "gradient":
            return {
                backgroundImage: styles.gradient
            };

        case "image": {
            const imageUrl = styles.image?.url;
            const overlayColor = styles.imageOverlayColor || "#000000";
            const overlayOpacity =
                styles.imageOverlayOpacity !== undefined
                    ? styles.imageOverlayOpacity / 100
                    : 50;

            const overlay = `linear-gradient(
                rgba(${hexToRgb(overlayColor)}, ${overlayOpacity}),
                rgba(${hexToRgb(overlayColor)}, ${overlayOpacity})
            )`;

            return {
                backgroundImage: imageUrl
                    ? `${overlay}, url(${imageUrl})`
                    : "none",
                backgroundPosition: styles.image?.position || "center",
                backgroundSize: styles.image?.size || "cover",
                backgroundRepeat: styles.image?.repeat || "no-repeat",
            };
        }

        case "none":
        default:
            return {
                background: "none"
            };
    }
};

export default getBackgroundStyle
