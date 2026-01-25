const CSSVars = (attributes) => {
	const {
		infoBox,
		container,
		mediaContainer,
		iconImage,
		title,
		description,
		cta,
		featuredStyle,
	} = attributes;

	return {
		/* layout */
		"--sib-layout": infoBox?.layout,
		"--sib-content-align": infoBox?.contentAlignment,
		"--sib-text-align": infoBox?.textAlignment,
		"--sib-columns": infoBox?.columns,
		"--sib-columns-gap": `${infoBox?.columnsGap}px`,
		"--sib-row-gap": `${infoBox?.rowGap}px`,

		/* container */
		"--sib-bg-color": container?.backgroundColor,
		"--sib-text-color": container?.color,
		"--sib-padding": container?.padding,
		"--sib-margin": container?.margin,
		"--sib-border": container?.border,
		"--sib-radius": container?.borderRadius,
		"--sib-shadow": container?.boxShadow,

		/* media */
		"--sib-media-bg": mediaContainer?.backgroundColor,
		"--sib-media-width": mediaContainer?.width,
		"--sib-media-padding": mediaContainer?.padding,
		"--sib-media-radius": mediaContainer?.borderRadius,
		"--sib-media-color": mediaContainer?.color,
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
		"--sib-cta-fontSize": cta?.fontSize,
		"--sib-cta-color": cta?.textColor,
		"--sib-cta-padding": cta?.padding,
		"--sib-cta-margin": cta?.margin,
		"--sib-cta-gap": cta?.gap,

		/* featured */
		"--sib-featured-bg": featuredStyle?.backgroundColor,
		"--sib-featured-color": featuredStyle?.color,
		"--sib-featured-padding": featuredStyle?.padding,
		"--sib-featured-radius": featuredStyle?.borderRadius,
		"--sib-featured-top": featuredStyle?.top,
		"--sib-featured-bottom": featuredStyle?.bottom,
		"--sib-featured-right": featuredStyle?.right,
		"--sib-featured-left": featuredStyle?.left,
		"--sib-featured-fontSize": featuredStyle?.fontSize,
	};
};

export default CSSVars;
