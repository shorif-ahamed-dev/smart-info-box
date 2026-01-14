export function updateStyle(setAttributes, styles, mode, key, value) {
    setAttributes({
        styles: {
            ...styles,
            [mode]: {
                ...styles[mode],
                [key]: value,
            },
        },
    });
}
