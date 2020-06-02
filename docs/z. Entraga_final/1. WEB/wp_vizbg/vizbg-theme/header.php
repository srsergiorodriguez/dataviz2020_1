<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="Háptica" content="">
        <meta property="og:image" content=<?php echo '"' . get_bloginfo('template_url') . '/img/favicon.png"' ?> >

        <script type="text/javascript">
            var urlcanonical = "<?php echo get_bloginfo('template_url') ?>" + "";
            pathIMG = <?php echo '"' . get_bloginfo('template_url') . '/img/"' ?>;

        </script>

        <title><?php echo get_bloginfo('name'); ?></title>
        <?php wp_head(); ?>
        <!-- Core CSS -->

        <link rel="icon" href=<?php echo '"' . get_bloginfo('template_url') . '/img/favicon.png"' ?> type="image/x-icon" />
        <link rel="shortcut icon" href=<?php echo '"' . get_bloginfo('template_url') . '/img/favicon.png"' ?> type="image/x-icon" />



    </head>
    <?php
    global $current_user;
    wp_get_current_user();
    ?>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light color-bkg-primary">


            <div id="menu-rp" class="navbar-toggler"  data-toggle="collapse"  >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active " href="<?php echo get_home_url(); ?>"><span class="txt-subtitulo-2">Incio</span></a>

       <!-- <img class="" src="<?php echo get_bloginfo('template_url') ?>/img/logo-blanco-XL_20190307.png"/> -->
                    </li>
                </ul> 
            </div>    



            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active " href="<?php echo get_home_url(); ?>"><span class="txt-subtitulo-2">Incio</span></a>

                        <!-- <img class="" src="<?php echo get_bloginfo('template_url') ?>/img/logo-blanco-XL_20190307.png"/> -->
                    </li>
                </ul>                

                <ul class="navbar-nav ul-right">
                    <a class="nav-link active " href="<?php echo get_permalink(get_page_by_title('Sobre')); ?>"><span class="txt-subtitulo-2">Sobre el proyecto</span></a>
                </ul>
            </div>
        </nav>



