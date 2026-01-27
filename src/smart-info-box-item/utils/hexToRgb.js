const hexToRgb = (hex, opacity) => {
    const cleaned = hex.replace("#", "");
    const bigint = parseInt(cleaned, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    if (opacity !== undefined) {
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return `${r}, ${g}, ${b}`;
};

export default hexToRgb;