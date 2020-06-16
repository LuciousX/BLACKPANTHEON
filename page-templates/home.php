<?php

/**
 * Template Name: Home
 */

get_header(); ?>

<?php $hero = get_field('hero'); ?>
<?php template_part('/template-parts/hero.php', array(
    'image'         => get_the_post_thumbnail_url(),
    'subtitle'      => $hero['subtitle'],
    'title'         => $hero['title'],
    'content'       => $hero['content'],
    'button_text'   => $hero['button_text'],
    'button_link'   => $hero['button_link'],
    'homepage'      => true
)); ?>

<?php echo get_template_part('/template-parts/image-contents'); ?>
<?php echo get_template_part('/template-parts/image-navigation'); ?>
<?php echo get_template_part('/template-parts/event-banner'); ?>
<?php echo get_template_part('/template-parts/carousel-committee'); ?>
<?php echo get_template_part('/template-parts/full-width-banner'); ?>
<?php echo get_template_part('/template-parts/featured-newsroom'); ?>
<?php echo get_template_part('/template-parts/newsletter-signup'); ?>
<?php echo get_template_part('/template-parts/double-cta'); ?>

<?php get_footer(); ?>