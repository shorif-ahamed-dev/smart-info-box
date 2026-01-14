import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import SmartInfoBox from './assets/smartInfoBox';
registerBlockType(metadata.name, {
	icon: {
		// background: '#7e70af',
		foreground: '#fff',
		src: <SmartInfoBox />
	},
	edit: Edit,
});
