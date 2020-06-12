<?php
/**
 * cb_neat functions and definitions
 *
 */

if ( ! function_exists( 'cb_neat_setup' ) ) :
	/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
	function cb_neat_setup()
	{
		/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on cb_neat, use a find and replace
		* to change 'some-like-it-neat' to the name of your theme in all the template files
		*/
		load_theme_textdomain( 'some-like-it-neat', get_template_directory() . '/library/languages' );

		/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
		*/
		add_theme_support( 'post-thumbnails' );

		/*
		* Enable title tag support for all posts.
		*
		* @link http://codex.wordpress.org/Title_Tag
		*/
		add_theme_support( 'title-tag' );

		/*
		* Enable menu support
		*/
		add_theme_support( 'menus' );

		/*
		* Add Editor Style for adequate styling in text editor.
		*
		* @link http://codex.wordpress.org/Function_Reference/add_editor_style
		*/
		add_editor_style( '/assets/css/editor-style.css' );

		/**
		* Including Theme Hook Alliance (https://github.com/zamoose/themehookalliance).
		*/
		include get_template_directory() . '/library/vendors/theme-hook-alliance/tha-theme-hooks.php' ;

		/**
		 * Including TGM Plugin Activation
		 */
		include_once get_template_directory() . '/library/vendors/tgm-plugin-activation/class-tgm-plugin-activation.php' ;

		include_once get_template_directory() . '/library/vendors/tgm-plugin-activation/tgm-plugin-activation.php' ;

	}
endif; // cb_neat_setup
add_action( 'after_setup_theme', 'cb_neat_setup' );

//add post-types
// require_once( get_stylesheet_directory() . '/inc/post-types/your-post-type.php');

/**
 * Enqueue scripts.
 */
if ( ! function_exists( 'cb_neat_scripts' ) ) :
	function cb_neat_scripts() {

		wp_deregister_script('jquery');
	 	wp_register_script('jquery', get_theme_file_uri("/assets/js/jquery-3.2.1.min.js"), false, null);
	 	wp_enqueue_script('jquery');

        /**
         * Concatenate Scripts. Checks the directory below for js files. If there are js files they will be concatenated and minified in either
         * development.js or production.js. NOTE - You will have to stop and restart gulp. Also, these scripts run on all pages. Make sure
         * your scripts actually need to run on all pages before concatenating.
         */
        $directory = get_template_directory() . '/assets/js/app/';
        $files = glob($directory . '*.js');
        if ( $files !== false ) {
            $filecount = count( $files );

            if ( ! $filecount == 0 ) {
                if ( SCRIPT_DEBUG || WP_DEBUG ) :
                    // Concatonated Scripts
                    wp_enqueue_script( 'cb_neat-js', get_theme_file_uri( '/assets/js/development.js' ), array( 'jquery' ), '1.0.0', false );
                else :
                    // Concatonated Scripts
                    wp_enqueue_script( 'cb_neat-js', get_theme_file_uri( '/assets/js/production-min.js' ), array( 'jquery' ), '1.0.0', false );
                endif;
            }
        }
	}
	add_action( 'wp_enqueue_scripts', 'cb_neat_scripts' );
endif; // Enqueue scripts


// Theme images sizes
function add_image_sizes() {
	 // add_image_size( 'YOUR_IMAGE_SIZE', 300, 185, 'center');
}

add_action( 'after_setup_theme', 'add_image_sizes' );

//allow svg upload
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

//partial with variables
function template_part($filePath, $variables = array(), $print = true)
{
    $output = null;

    // Extract the variables to a local namespace
    extract($variables);

    // Start output buffering
    ob_start();

    // Include the template file
    include(locate_template($filePath));

    // End buffering and return its contents
    $output = ob_get_clean();
    if ($print) {
        echo $output;
    }
    return $output;
}