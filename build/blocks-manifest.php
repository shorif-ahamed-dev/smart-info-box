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
			'layout' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'contentAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'columns' => array(
				'type' => 'number',
				'default' => 1
			),
			'columnsGap' => array(
				'type' => 'number',
				'default' => 16
			),
			'styles' => array(
				'type' => 'object',
				'default' => array(
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
					'imageOverlayColor' => '#000000',
					'imageOverlayOpacity' => 50,
					'borderType' => 'solid',
					'borderWidth' => 1,
					'borderRadius' => array(
						'topLeft' => '4px',
						'topRight' => '4px',
						'bottomLeft' => '4px',
						'bottomRight' => '4px'
					),
					'borderColor' => '#cccccc',
					'boxShadow' => 'none',
					'padding' => array(
						'top' => '28px',
						'bottom' => '28px',
						'left' => '24px',
						'right' => '24px'
					),
					'margin' => array(
						'top' => '0px',
						'bottom' => '0px',
						'left' => '0px',
						'right' => '0px'
					),
					'iconSize' => 45,
					'titleFontSize' => 20,
					'descriptionFontSize' => 14,
					'buttonFontSize' => 14,
					'badge' => false,
					'badgePosition' => 'top-left',
					'descriptionColor' => '#757575',
					'titleColor' => 'black',
					'buttonTextColor' => 'black',
					'badgeColor' => '#E0E0E0'
				)
			),
			'hoverStyles' => array(
				'type' => 'object',
				'default' => array(
					'borderType' => 'solid',
					'borderColor' => '#884AE3',
					'backgroundColor' => '#884AE3'
				)
			),
			'infoBox' => array(
				'type' => 'object',
				'default' => array(
					'layout' => 'layout-five',
					'contentAlignment' => 'center',
					'textAlignment' => 'center',
					'columns' => 1,
					'columnsGap' => 16,
					'rowGap' => 12
				)
			),
			'container' => array(
				'type' => 'object',
				'default' => array(
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
					'imageOverlayColor' => '#000000',
					'imageOverlayOpacity' => 50,
					'padding' => '28px 24px 28px 24px',
					'margin' => '0px 0px 0px 0px',
					'border' => '1px solid #cccccc',
					'borderRadius' => '4px 4px 4px 4px',
					'boxShadow' => 'none'
				)
			),
			'mediaContainer' => array(
				'type' => 'object',
				'default' => array(
					'width' => 'min-content',
					'height' => 'min-content',
					'backgroundColor' => 'black',
					'padding' => '12px',
					'margin' => '0px 0px 0px 0px',
					'borderRadius' => '4px 4px 4px 4px',
					'color' => '#ddd'
				)
			),
			'iconImage' => array(
				'type' => 'object',
				'default' => array(
					'iconColor' => 'red',
					'size' => 24,
					'position' => 'top',
					'alignment' => 'center'
				)
			),
			'title' => array(
				'type' => 'object',
				'default' => array(
					'color' => 'black',
					'fontSize' => 20,
					'padding' => '0px'
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
					'fontSize' => '14px',
					'width' => '',
					'height' => '',
					'textColor' => 'black',
					'border' => 'none',
					'backgroundColor' => 'none',
					'padding' => '0px',
					'margin' => '0px',
					'gap' => '6px'
				)
			),
			'featured' => array(
				'type' => 'object',
				'default' => array(
					'badge' => false,
					'badgePosition' => 'top-left',
					'top' => 0,
					'bottom' => null,
					'right' => 0,
					'left' => null,
					'width' => '',
					'height' => '',
					'backgroundColor' => '#e0e0e0',
					'padding' => '6px 12px 6px 12px',
					'fontSize' => '13px',
					'margin' => '0px 0px 0px 0px',
					'borderRadius' => '0px',
					'color' => 'red'
				)
			)
		),
		'providesContext' => array(
			'smartInfoBox/infoBox' => 'infoBox',
			'smartInfoBox/container' => 'container',
			'smartInfoBox/mediaContainer' => 'mediaContainer',
			'smartInfoBox/iconImage' => 'iconImage',
			'smartInfoBox/title' => 'title',
			'smartInfoBox/description' => 'description',
			'smartInfoBox/cta' => 'cta',
			'smartInfoBox/featured' => 'featured'
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
					'ratting' => 4
				)
			),
			'styles' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'contentAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			)
		),
		'usesContext' => array(
			'smartInfoBox/layout',
			'smartInfoBox/styles',
			'smartInfoBox/hoverStyles',
			'smartInfoBox/contentAlignment',
			'smartInfoBox/infoBox',
			'smartInfoBox/container',
			'smartInfoBox/mediaContainer',
			'smartInfoBox/iconImage',
			'smartInfoBox/title',
			'smartInfoBox/description',
			'smartInfoBox/cta',
			'smartInfoBox/featured'
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
