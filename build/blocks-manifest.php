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
					'borderRadius' => 0,
					'borderColor' => '#e5e5e5',
					'boxShadow' => 'none',
					'padding' => 48,
					'margin' => 0
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'smart-info-box',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
