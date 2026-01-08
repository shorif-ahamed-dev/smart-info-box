import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, TabPanel } from '@wordpress/components';
import { settings, adminAppearance } from '@wordpress/icons';
import SettingsIcon from './assets/SettingsIcon';
import AppearenceIcon from './assets/AppearenceIcon';
import LayoutSettings from './components/LayoutSettings';
import StyleSettings from './components/StyleSettings';

const onSelect = (tabName) => {
	console.log('Selecting tab', tabName);
};

export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			<InspectorControls>
				<PanelBody title='Info Box'>
					<TabPanel
						className="my-tab-panel"
						activeClass="active-tab"
						onSelect={onSelect}
						tabs={[
							{
								name: 'layout',
								title: <span> <SettingsIcon />Layout</span>,
								className: 'tab-one',
							},
							{
								name: 'style',
								title: <span><AppearenceIcon />Style</span>,
								className: 'tab-two',
							},
						]}
					>
						{(tab) => {
							if (tab.name === 'layout') {
								return (
									<LayoutSettings
										attributes={attributes}
										setAttributes={setAttributes}
									/>
								);
							}
							if (tab.name === 'style') {
								return (
									<StyleSettings
										attributes={attributes}
										setAttributes={setAttributes}
									/>
								)
							}
						}}
					</TabPanel>

				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				{__(
					'Smart Info Box – hello from the editor!',
					'smart-info-box'
				)}
			</div>
		</>

	);
}
