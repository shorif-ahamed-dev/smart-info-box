import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, TabPanel } from '@wordpress/components';
import SettingsIcon from './assets/SettingsIcon';
import AppearenceIcon from './assets/AppearenceIcon';
import LayoutSettings from './components/LayoutSettings';
import StyleSettings from './components/StyleSettings';
import { airplane, arrowRightAlt } from '@wordpress/icons';
import Airplane from './assets/Airplane';
import RightArrow from './assets/RightArrow';
import { AttributesProvider } from './context/AttributesContext';
import getBackgroundStyle from './utils/getBackgroundStyle';


export default function Edit({ attributes, setAttributes }) {

	const { contentAlignment, layout, styles } = attributes
	const { borderType, borderColor, borderWidth, borderRadius, padding, margin } = styles
	const onSelect = (value) => {

	}
	return (
		<AttributesProvider
			attributes={attributes}
			setAttributes={setAttributes}
		>
			<InspectorControls>
				<PanelBody title='Info Box'>
					<TabPanel
						className="my-tab-panel"
						activeClass="active-tab"
						onSelect={onSelect}
						tabs={[

							{
								name: 'style',
								title: <span><AppearenceIcon />Style</span>,
								className: 'tab-two',
							},
							{
								name: 'layout',
								title: <span> <SettingsIcon />Layout</span>,
								className: 'tab-one',
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
			<>
				<div {...useBlockProps()}>
					<div className={`wp-block-create-block-smart-info-box-container ${layout}`}
						style={{
							borderStyle: borderType,
							borderColor: borderColor,
							borderWidth: borderWidth,
							borderRadius: borderRadius,
							padding,
							margin,
							...getBackgroundStyle(styles)
						}}
					>
						<Airplane />
						<h4>Automated AI Chatbots</h4>
						<p style={{ textAlign: contentAlignment }}>
							Contains a high concentration of botanical, marine, and biological extracts. Has no artificial fragrances.
						</p>
						<a href="https://google.com">
							Learn More <RightArrow />

						</a>
					</div>
				</div>

			</>
		</AttributesProvider>

	);
}
