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
				'default' => 3
			),
			'columnsGap' => array(
				'type' => 'number',
				'default' => 20
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
					'buttonFontSize' => 14
				)
			),
			'hoverStyles' => array(
				'type' => 'object',
				'default' => array(
					'borderType' => 'solid',
					'borderColor' => '#884AE3',
					'backgroundColor' => '#884AE3'
				)
			)
		),
		'providesContext' => array(
			'smartInfoBox/layout' => 'layout',
			'smartInfoBox/styles' => 'styles',
			'smartInfoBox/contentAlignment' => 'contentAlignment'
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
				'wide',
				'center',
				'full',
				'left',
				'right'
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
					'buttonText' => 'Learn More'
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
			'smartInfoBox/contentAlignment'
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
