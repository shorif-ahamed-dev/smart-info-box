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
		if (typeof value === 'number') return `${value}px`;
		return value;
	};

	return {
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
		"--container-padding": container?.padding?.Desktop,
		"--container-margin": container?.margin?.Desktop,
		"--container-borderType": container?.borderType,
		"--container-borderWidth": `${container?.borderWidth}px`,
		"--container-borderColor": container?.borderColor,
		"--container-border": `${container?.borderWidth}px ${container?.borderType} ${container?.borderColor}`,
		"--container-borderRadius": container?.borderRadius?.Desktop,
		"--container-boxShadow": container?.boxShadow,

		/* mediaContainer */
		"--mediaContainer-width": mediaContainer?.width,
		"--mediaContainer-height": formatSize(mediaContainer?.height),
		"--mediaContainer-backgroundColor": mediaContainer?.backgroundColor,
		"--mediaContainer-padding": `${mediaContainer?.padding}px`,
		"--mediaContainer-margin": mediaContainer?.margin?.Desktop,
		"--mediaContainer-borderRadius": mediaContainer?.borderRadius?.Desktop,
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
		"--cta-padding": cta?.padding?.Desktop,
		"--cta-margin": cta?.margin?.Desktop,
		"--cta-borderRadius": cta?.borderRadius?.Desktop,
		"--cta-gap": cta?.gap,

		/* featuredContainer */
		"--featuredContainer-badge": featuredContainer?.badge,
		"--featuredContainer-badgePosition": featuredContainer?.badgePosition,
		"--featuredContainer-top": featuredContainer?.top !== null ? `${featuredContainer?.top}px` : 'auto',
		"--featuredContainer-bottom": featuredContainer?.bottom !== null ? `${featuredContainer?.bottom}px` : 'auto',
		"--featuredContainer-right": featuredContainer?.right !== null ? `${featuredContainer?.right}px` : 'auto',
		"--featuredContainer-left": featuredContainer?.left !== null ? `${featuredContainer?.left}px` : 'auto',
		"--featuredContainer-width": featuredContainer?.width,
		"--featuredContainer-height": featuredContainer?.height,
		"--featuredContainer-backgroundColor": featuredContainer?.backgroundColor,
		"--featuredContainer-fontSize": featuredContainer?.fontSize,
		"--featuredContainer-padding": featuredContainer?.padding?.Desktop,
		"--featuredContainer-margin": featuredContainer?.margin?.Desktop,
		"--featuredContainer-borderRadius": featuredContainer?.borderRadius?.Desktop,
		"--featuredContainer-color": featuredContainer?.color,
	};
};

export default CSSVars;