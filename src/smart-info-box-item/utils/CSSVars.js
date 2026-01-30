const CSSVars = (attributes) => {
	const {
		infoBox,
		container,
		mediaContainer,
		title,
		description,
		cta,
		featuredContainer,
	} = attributes;

	const formatSize = (value) => {
		if (typeof value === "number") return `${value}px`;
		return value;
	};

	const commonVars = {
		/* infoBox */
		"--infoBox-layout": infoBox?.layout,
		"--infoBox-columns": infoBox?.columns,
		"--infoBox-gap": `${infoBox?.gap}px`,

		/* container */
		"--container-contentAlignment": container?.contentAlignment,
		"--container-columnsGap": `${container?.columnsGap}px`,
		"--container-rowGap": `${container?.rowGap}px`,
		"--container-color": container?.color,
		"--container-backgroundColor": container?.backgroundColor,
		"--container-borderType": container?.borderType,
		"--container-borderWidth": `${container?.borderWidth}px`,
		"--container-borderColor": container?.borderColor,
		"--container-border": `${container?.borderWidth}px ${container?.borderType} ${container?.borderColor}`,
		"--container-boxShadow": container?.boxShadow,

		/* mediaContainer */
		"--mediaContainer-width": mediaContainer?.width,
		"--mediaContainer-height": formatSize(mediaContainer?.height),
		"--mediaContainer-backgroundColor": mediaContainer?.backgroundColor,
		"--mediaContainer-padding": `${mediaContainer?.padding}px`,
		"--mediaContainer-color": mediaContainer?.color,
		"--mediaContainer-fontSize": `${mediaContainer?.fontSize}px`,

		/* title */
		"--title-color": title?.color,
		"--title-fontSize": `${title?.fontSize}px`,
		"--title-padding": `${title?.padding}px`,

		/* description */
		"--description-color": description?.color,
		"--description-fontSize": `${description?.fontSize}px`,
		"--description-padding": description?.padding,

		/* cta */
		"--cta-fontSize": `${cta?.fontSize}px`,
		"--cta-iconSize": `${cta?.iconSize}px`,
		"--cta-width": cta?.width,
		"--cta-height": cta?.height,
		"--cta-textColor": cta?.textColor,
		"--cta-borderType": cta?.borderType,
		"--cta-borderWidth": `${cta?.borderWidth}px`,
		"--cta-borderColor": cta?.borderColor,
		"--cta-border": `${cta?.borderWidth}px ${cta?.borderType} ${cta?.borderColor}`,
		"--cta-backgroundColor": cta?.backgroundColor,
		"--cta-gap": cta?.gap,

		/* featuredContainer */
		"--featuredContainer-badge": featuredContainer?.badge,
		"--featuredContainer-badgePosition": featuredContainer?.badgePosition,
		"--featuredContainer-top":
			featuredContainer?.top !== null ? `${featuredContainer?.top}px` : "auto",
		"--featuredContainer-bottom":
			featuredContainer?.bottom !== null
				? `${featuredContainer?.bottom}px`
				: "auto",
		"--featuredContainer-right":
			featuredContainer?.right !== null
				? `${featuredContainer?.right}px`
				: "auto",
		"--featuredContainer-left":
			featuredContainer?.left !== null
				? `${featuredContainer?.left}px`
				: "auto",
		"--featuredContainer-width": featuredContainer?.width,
		"--featuredContainer-height": featuredContainer?.height,
		"--featuredContainer-backgroundColor": featuredContainer?.backgroundColor,
		"--featuredContainer-fontSize": featuredContainer?.fontSize,
		"--featuredContainer-color": featuredContainer?.color,
	};

	const desktopVars = {
		...commonVars,
		"--container-padding": container?.padding?.Desktop,
		"--container-margin": container?.margin?.Desktop,
		"--container-borderRadius": container?.borderRadius?.Desktop,
		"--mediaContainer-margin": mediaContainer?.margin?.Desktop,
		"--mediaContainer-borderRadius": mediaContainer?.borderRadius?.Desktop,
		"--cta-padding": cta?.padding?.Desktop,
		"--cta-margin": cta?.margin?.Desktop,
		"--cta-borderRadius": cta?.borderRadius?.Desktop,
		"--featuredContainer-padding": featuredContainer?.padding?.Desktop,
		"--featuredContainer-margin": featuredContainer?.margin?.Desktop,
		"--featuredContainer-borderRadius":
			featuredContainer?.borderRadius?.Desktop,
	};

	// Tablet-specific styles
	const tabletVars = {
		...commonVars,
		"--container-padding": container?.padding?.Tablet,
		"--container-margin": container?.margin?.Tablet,
		"--container-borderRadius": container?.borderRadius?.Tablet,
		"--mediaContainer-margin": mediaContainer?.margin?.Tablet,
		"--mediaContainer-borderRadius": mediaContainer?.borderRadius?.Tablet,
		"--cta-padding": cta?.padding?.Tablet,
		"--cta-margin": cta?.margin?.Tablet,
		"--cta-borderRadius": cta?.borderRadius?.Tablet,
		"--featuredContainer-padding": featuredContainer?.padding?.Tablet,
		"--featuredContainer-margin": featuredContainer?.margin?.Tablet,
		"--featuredContainer-borderRadius": featuredContainer?.borderRadius?.Tablet,
	};

	// Mobile-specific styles
	const mobileVars = {
		...commonVars,
		"--container-padding": container?.padding?.Mobile,
		"--container-margin": container?.margin?.Mobile,
		"--container-borderRadius": container?.borderRadius?.Mobile,
		"--mediaContainer-margin": mediaContainer?.margin?.Mobile,
		"--mediaContainer-borderRadius": mediaContainer?.borderRadius?.Mobile,
		"--cta-padding": cta?.padding?.Mobile,
		"--cta-margin": cta?.margin?.Mobile,
		"--cta-borderRadius": cta?.borderRadius?.Mobile,
		"--featuredContainer-padding": featuredContainer?.padding?.Mobile,
		"--featuredContainer-margin": featuredContainer?.margin?.Mobile,
		"--featuredContainer-borderRadius": featuredContainer?.borderRadius?.Mobile,
	};

	return {
		Desktop: desktopVars,
		Tablet: tabletVars,
		Mobile: mobileVars,
	};
};

export default CSSVars;
