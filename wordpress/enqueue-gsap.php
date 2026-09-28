<?php
/**
 * Example WordPress integration for the bundled GSAP components.
 *
 * Copy and adapt this into a small custom plugin or theme integration.
 * Do not edit a third-party theme directly.
 *
 * @package WordPressGsapComponents
 */

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue the generated bundle and component CSS only where needed.
 */
function ar_gsap_components_enqueue_assets() {
	/*
	 * Replace this condition with a site-specific check.
	 * Examples:
	 * - is_front_page()
	 * - is_page_template( 'templates/landing.php' )
	 * - has_block( 'namespace/animated-section' )
	 */
	if ( ! is_front_page() ) {
		return;
	}

	$base_dir = get_stylesheet_directory();
	$base_uri = get_stylesheet_directory_uri();

	$script_path = '/assets/gsap-components/gsap-components.min.js';
	$style_path  = '/assets/gsap-components/components.css';

	if ( file_exists( $base_dir . $style_path ) ) {
		wp_enqueue_style(
			'ar-gsap-components',
			$base_uri . $style_path,
			array(),
			(string) filemtime( $base_dir . $style_path )
		);
	}

	if ( file_exists( $base_dir . $script_path ) ) {
		wp_enqueue_script(
			'ar-gsap-components',
			$base_uri . $script_path,
			array(),
			(string) filemtime( $base_dir . $script_path ),
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'ar_gsap_components_enqueue_assets' );
