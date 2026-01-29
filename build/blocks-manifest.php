<?php
// This file is generated. Do not modify it manually.
return array(
	'smart-info-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/smart-info-box',
		'version' => '0.1.0',
		'title' => 'Smart Info Box',
		'category' => 'smart-post',
		'icon' => 'smiley',
		'description' => 'Contains a high concentration of botanical, marine, and biological extracts. Has no artificial fragrances.',
		'example' => array(
			
		),
		'attributes' => array(
			'infoBox' => array(
				'type' => 'object',
				'default' => array(
					'layout' => 'layout-one',
					'gap' => 20,
					'columns' => array(
						'Desktop' => 1,
						'Tablet' => 2,
						'Mobile' => 1
					)
				)
			),
			'container' => array(
				'type' => 'object',
				'default' => array(
					'contentAlignment' => 'center',
					'columnsGap' => 16,
					'rowGap' => 12,
					'color' => 'black',
					'backgroundType' => 'solid',
					'backgroundColor' => '#ffffff',
					'gradient' => 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
					'image' => array(
						'id' => '',
						'url' => '',
						'position' => 'center',
						'size' => 'cover',
						'repeat' => 'no-repeat'
					),
					'imageOverlayColor' => '#ddd',
					'imageOverlayOpacity' => 50,
					'borderType' => 'solid',
					'borderWidth' => 1,
					'borderColor' => '#cccccc',
					'boxShadow' => 'none',
					'padding' => array(
						'Desktop' => '28px 24px 28px 24px',
						'Tablet' => '0px 0px 0px 0px',
						'Mobile' => '28px 24px 28px 24px'
					),
					'margin' => array(
						'Desktop' => '0px 0px 0px 0px',
						'Tablet' => '0px 0px 0px 0px',
						'Mobile' => '0px 0px 0px 0px'
					),
					'borderRadius' => array(
						'Desktop' => '4px 8px 4px 8px',
						'Tablet' => '4px 8px 4px 8px',
						'Mobile' => '4px 8px 4px 8px'
					)
				)
			),
			'mediaContainer' => array(
				'type' => 'object',
				'default' => array(
					'width' => 'min-content',
					'height' => 'min-content',
					'backgroundColor' => 'black',
					'padding' => 12,
					'margin' => array(
						'Desktop' => '0px 0px 0px 0px',
						'Tablet' => '0px 0px 0px 0px',
						'Mobile' => '0px 0px 0px 0px'
					),
					'borderRadius' => array(
						'Desktop' => '4px 8px 4px 8px',
						'Tablet' => '4px 8px 4px 8px',
						'Mobile' => '4px 8px 4px 8px'
					),
					'color' => '#ddd',
					'fontSize' => 24
				)
			),
			'title' => array(
				'type' => 'object',
				'default' => array(
					'color' => 'black',
					'fontSize' => 20,
					'padding' => 0
				)
			),
			'description' => array(
				'type' => 'object',
				'default' => array(
					'color' => '#757575',
					'fontSize' => 14,
					'padding' => '0px'
				)
			),
			'cta' => array(
				'type' => 'object',
				'default' => array(
					'fontSize' => 14,
					'iconSize' => 14,
					'width' => '',
					'height' => '',
					'textColor' => 'black',
					'borderType' => 'none',
					'borderWidth' => 1,
					'borderColor' => '#cccccc',
					'backgroundColor' => 'none',
					'padding' => array(
						'Desktop' => '0px 0px 0px 0px',
						'Tablet' => '0px 0px 0px 0px',
						'Mobile' => '0px 0px 0px 0px'
					),
					'margin' => array(
						'Desktop' => '0px 0px 0px 0px',
						'Tablet' => '0px 0px 0px 0px',
						'Mobile' => '0px 0px 0px 0px'
					),
					'borderRadius' => array(
						'Desktop' => '4px 8px 4px 8px',
						'Tablet' => '4px 8px 4px 8px',
						'Mobile' => '4px 8px 4px 8px'
					),
					'gap' => '6px'
				)
			),
			'featuredContainer' => array(
				'type' => 'object',
				'default' => array(
					'badge' => true,
					'badgePosition' => 'top-left',
					'top' => 0,
					'bottom' => null,
					'right' => 0,
					'left' => null,
					'width' => '',
					'height' => '',
					'backgroundColor' => '#e0e0e0',
					'fontSize' => '13px',
					'padding' => array(
						'Desktop' => '4px 8px 4px 8px',
						'Tablet' => '4px 8px 4px 8px',
						'Mobile' => '4px 8px 4px 8px'
					),
					'margin' => array(
						'Desktop' => '0px 0px 0px 0px',
						'Tablet' => '0px 0px 0px 0px',
						'Mobile' => '0px 0px 0px 0px'
					),
					'borderRadius' => array(
						'Desktop' => '4px 4px 4px 4px',
						'Tablet' => '4px 4px 4px 4px',
						'Mobile' => '4px 4px 4px 4px'
					),
					'color' => '#7c3aed'
				)
			)
		),
		'providesContext' => array(
			'smartInfoBox/infoBox' => 'infoBox',
			'smartInfoBox/container' => 'container',
			'smartInfoBox/mediaContainer' => 'mediaContainer',
			'smartInfoBox/title' => 'title',
			'smartInfoBox/description' => 'description',
			'smartInfoBox/cta' => 'cta',
			'smartInfoBox/featuredContainer' => 'featuredContainer'
		),
		'supports' => array(
			'color' => array(
				'background' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'html' => false,
			'align' => array(
				'wide'
			)
		),
		'textdomain' => 'smart-info-box',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'smart-info-box-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/smart-info-box-item',
		'version' => '0.1.0',
		'title' => 'Info Box Item',
		'category' => 'text',
		'icon' => 'id',
		'parent' => array(
			'create-block/smart-info-box'
		),
		'description' => 'Contains a high concentration of botanical, marine, and biological extracts. Has no artificial fragrances.',
		'example' => array(
			
		),
		'attributes' => array(
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			),
			'content' => array(
				'type' => 'object',
				'default' => array(
					'icon' => array(
						'id' => '',
						'url' => '',
						'position' => 'center',
						'size' => 'cover',
						'repeat' => 'no-repeat'
					),
					'description' => 'Contains a high concentration of botanical, marine, and biological extracts. Has no artificial fragrances.',
					'title' => 'Automated AI Chatbotsx',
					'buttonText' => 'Learn More',
					'badgeText' => 'Sold Out',
					'ratting' => 4,
					'badge' => true
				)
			),
			'infoBox' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'container' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'mediaContainer' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'title' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'description' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'cta' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'featuredContainer' => array(
				'type' => 'object',
				'default' => array(
					
				)
			)
		),
		'usesContext' => array(
			'smartInfoBox/infoBox',
			'smartInfoBox/container',
			'smartInfoBox/mediaContainer',
			'smartInfoBox/title',
			'smartInfoBox/description',
			'smartInfoBox/cta',
			'smartInfoBox/featuredContainer'
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'center',
				'full',
				'left',
				'right'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
