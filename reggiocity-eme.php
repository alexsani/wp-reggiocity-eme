<?php
/*
 Plugin Name: Reggiocity Events Made Easy
 Plugin URI: 
 Description: Css e jQuery for Wordpress Events Made Easy Calendar
 Version: 1.0
 Author: Alex Sani
 Author URI: 
 */

add_action('wp_enqueue_scripts', 'reggiocityemestyle');
add_action('admin_footer', 'reggiocityemejs');
add_action('admin_footer', 'reggiocityemestyle');

function reggiocityemestyle()
{
 wp_register_style( 'reggiocity-eme-style', plugins_url('reggiocity-eme-style.css', __FILE__) );
 wp_enqueue_style( 'reggiocity-eme-style' );
}

function reggiocityemejs() {
    $url = plugins_url('reggiocity-eme-js.js', __FILE__);
    echo '"<script type="text/javascript" src="'. $url . '"></script>"';
}
?>