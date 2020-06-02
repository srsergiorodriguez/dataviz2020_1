<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Load scripts
 *
 * @uses wp_enqueue_script action

  function load_jquery() {
  wp_deregister_script('jquery');
  wp_register_script('jquery', get_template_directory_uri() . '/js/jquery-3.2.1.js', false, '3.2.1');
  wp_enqueue_script('jquery');
  }

  add_action('wp_enqueue_script', 'load_jquery');

 */
function load_jquery() {

    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, false);
    // wp_register_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js', array(), null, false);
    wp_enqueue_script('jquery');

    wp_register_script('popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', array('jquery'), null, false);
    wp_enqueue_script('popper');

    wp_register_script('bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', array('jquery'), '');
    wp_enqueue_script('bootstrap-js');

    wp_register_style('bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    wp_enqueue_style('bootstrap-css');

    wp_register_style('basic-css', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('basic-css');


    //wp_register_script('masonry-js', 'https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js', array('jquery'), true);
    wp_register_script('masonry-js', 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js', array('jquery'), false);
    wp_enqueue_script('masonry-js');

    wp_register_script('chart', 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0', array('jquery'), true);
    wp_enqueue_script('chart');

    wp_register_script('data-vizbg', get_template_directory_uri() . '/js/data.js', array('jquery'), true);
    wp_enqueue_script('data-vizbg');

    wp_register_script('data-hechos', get_template_directory_uri() . '/js/data-hechos.js', array('jquery'), true);
    wp_enqueue_script('data-hechos');

    wp_register_script('vizbg', get_template_directory_uri() . '/js/src-vizbg.js', array('jquery'), true);
    wp_enqueue_script('vizbg');

    wp_register_script('sketch-data-art', get_template_directory_uri() . '/js/sketch-data-art.js', array('jquery'), true);
    wp_enqueue_script('sketch-data-art');
}

add_action('wp_enqueue_scripts', 'load_jquery');

/*
 * 
 */
add_theme_support('title-tag');



/*
 * Menu de wordpress
 */

function add_menu_settings() {
    add_menu_page('mn-haptica', 'Haptica Settings', 'manage_options', 'Options', 'custom_settings_page', null, 99);
}

add_action('admin_menu', 'add_menu_settings');

// Create Custom Global Settings
function custom_settings_page() {
    ?>
    <div class="wrap">
        <h1>Custom Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('section');
            do_settings_sections('theme-options');
            submit_button();
            ?>          
        </form>
    </div>
    <?php
}



function login_logo() {
    ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/img/lg-haptica-orange.png);
            height:120px;
            width:200px;
            background-size: 250px 150px; 
            background-repeat:  no-repeat;

            padding-bottom: 30px;
        }

        body{

        }
    </style>
    <?php
}

add_action('login_enqueue_scripts', 'login_logo');




