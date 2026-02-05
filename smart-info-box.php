<?php

/**
 * Plugin Name:       Smart Info Box
 * Description:       Contains a high concentration of botanical, marine, and biological extracts. Has no artificial fragrances.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       smart-info-box
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function create_block_smart_info_box_block_categories( $categories, $post ) {

	$custom_category = array(
		array(
			'slug'  => 'smart-post',
			'title' => __( 'Smart Post', 'smart-info-box' ),
		),
	);

	return array_merge( $custom_category, $categories );
}
add_filter( 'block_categories_all', 'create_block_smart_info_box_block_categories', 10, 2 );

function create_block_smart_info_box_block_init() {
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}

	$manifest_data = include __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'create_block_smart_info_box_block_init' );
