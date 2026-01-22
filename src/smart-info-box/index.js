import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import SmartInfoBox from './assets/smartInfoBox';
import save from './save';

registerBlockType(metadata.name, {
	icon: {
		foreground: '#fff',
		src: <SmartInfoBox />
	},
	edit: Edit,
	save: save
});