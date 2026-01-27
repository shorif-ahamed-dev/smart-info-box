const CSSVars = (attributes) => {
	const {
		infoBox,
		container,
		mediaContainer,
		iconImage,
		title,
		description,
		cta,
		featured,
	} = attributes;

	const formatSize = (value) => {
		if (typeof value === 'number') return `${value}px`;
		return value;
	};

	return {
		/* layout */
		"--sib-layout": infoBox?.layout,
		"--sib-content-align": infoBox?.contentAlignment,
		"--sib-columns": infoBox?.columns,
		"--sib-columns-gap": `${infoBox?.columnsGap}px`,
		"--sib-row-gap": `${infoBox?.rowGap}px`,

		/* container */
		// "--sib-bg-color": container?.backgroundColor,
		"--sib-text-color": container?.color,
		"--sib-padding": container?.padding,
		"--sib-margin": container?.margin,
		"--sib-border": `${container?.borderWidth}px ${container?.borderType} ${container?.borderColor}`,
		"--sib-border-radius": container?.borderRadius,
		"--sib-shadow": container?.boxShadow,

		/* media */
		"--sib-media-bg": mediaContainer?.backgroundColor,
		"--sib-media-width": mediaContainer?.width,
		"--sib-media-height": formatSize(mediaContainer?.height),
		"--sib-media-padding": `${mediaContainer?.padding}px`,
		"--sib-media-margin": mediaContainer?.margin,
		"--sib-media-radius": mediaContainer?.borderRadius,
		"--sib-media-color": mediaContainer?.color,
		"--sib-icon-color": mediaContainer?.color,
		"--sib-icon-size": `${iconImage?.size}px`,

		/* title */
		"--sib-title-color": title?.color,
		"--sib-title-size": `${title?.fontSize}px`,
		"--sib-title-padding": title?.padding,

		/* description */
		"--sib-desc-color": description?.color,
		"--sib-desc-font-size": `${description?.fontSize}px`,
		"--sib-desc-padding": description?.padding,

		/* CTA */
		"--sib-cta-bg": cta?.backgroundColor,
		"--sib-cta-fontSize": `${cta?.fontSize}px`,
		"--sib-cta-iconSize": `${cta?.iconSize}px`,
		"--sib-cta-border": `${cta?.borderWidth}px ${cta?.borderType} ${cta?.borderColor}`,
		"--sib-cta-border-radius": cta?.borderRadius,
		"--sib-cta-color": cta?.textColor,
		"--sib-cta-padding": cta?.padding,
		"--sib-cta-margin": cta?.margin,
		"--sib-cta-gap": cta?.gap,

		/* featured */
		"--sib-featured-bg": featured?.backgroundColor,
		"--sib-featured-color": featured?.color,
		"--sib-featured-padding": featured?.padding,
		"--sib-featured-radius": featured?.borderRadius,
		"--sib-featured-top": featured?.top,
		"--sib-featured-bottom": featured?.bottom,
		"--sib-featured-right": featured?.right,
		"--sib-featured-left": featured?.left,
		"--sib-featured-fontSize": featured?.fontSize,
	};
};

export default CSSVars;
