<?php
/**
 * The template for displaying all attachments.
 *
 * This is the template that displays all attachments by default.
 * Please note that this is the WordPress construct of attachments
 * and that other 'attachments' on your WordPress site will use a
 * different template.
 *
 * @package cb_neat
 */

 get_header(); ?>

 <div class="container">

 	<?php while ( have_posts() ) : the_post(); ?>

 		<?php if (!get_field('hero')['image']): ?>
 			<h1 class="red title"><?php the_title(); ?></h1>
 		<?php endif; ?>
 		<div class="content">
 			<?php the_content(); ?>
 		</div>
 	<?php endwhile; // end of the loop. ?>

 </div>

 <?php get_sidebar(); ?>

 <?php get_footer(); ?>
