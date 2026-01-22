import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import Save from './save';
import SingleBoxItem from './assets/SingleBoxItem';

registerBlockType(metadata.name, {
    icon: {
        foreground: '#ddd',
        src: <SingleBoxItem />
    },
    edit: Edit,
    save: Save
});