import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import SmartInfoBox from './assets/smartInfoBox';
registerBlockType(metadata.name, {
	icon: {
		// Specifying a background color to appear with the icon e.g.: in the inserter.
		// background: '#7e70af',
		// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
		foreground: '#fff',
		// Specifying an icon for the block
		src: <SmartInfoBox />
	},
	edit: Edit,
});
