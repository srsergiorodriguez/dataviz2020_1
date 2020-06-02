<?php

get_header();
?>
<script>
    var page = "home";
</script>
<div class="container" >
    <div class="row justify-content-center section-general">

        <div class="col-sm-4 text-center">
            <h1  class="txt-titulo-proyecto">
                LA VIOLENCIA TIENE COLOR
            </h1>
            <p class="txt-subtitulo-2">
                Una exploración de la obra de Beatriz González
            </p>

            <p class="txt-normal-1 color-gray-1 space-lg">
                Beatriz González es una de las artistas colombianas más importantes del siglo XX. Su obra devela el paso del tiempo en un país lleno de fracturas y contrariedades. Las creaciones -que comprenden pinturas, dibujos, láminas, esculturas - se caracterizan por el uso vívido del color, empleado magistralmente para abordar con ironía una realidad contada a diario por los medios de comunicación. En sus retratos no solo aparecen los rostros de personalidades que van desde presidentes de la República, políticos, líderes religiosos y jugadores de fútbol, sino también de aquellas personas anónimas quienes padecen el curso inefable de los eventos más dolorosos que han marcado la historia contemporánea colombiana.
                <br><br>
                En este espacio, y como parte de un ejercicio académico, se han escogido diez obras por cada década a partir de 1964 que dan cuenta del recorrido artístico de Beatriz González y la relación de su obra con los hitos históricos de cada periodo. Adicionalmente, el propósito ha sido resaltar dos ejes temáticos: la violencia y las mujeres. Las violencias (intrafamiliar, política, del narcotráfico, etc.) son recurrentes en la obra de la artista colombiana, pero una mirada más detallada nos lleva a identificar a la mujer y el impacto de esa violencia en ella, siempre presente y no verbalizada.
                <br><br>
                Al final de la selección encontrará la paleta de colores usada en las obras de esta colección de acuerdo con cada década, de esta manera se destacan la evolución y los cambios de la artista en la composición conforme avanza la historia.
                <br><br>
                Los invitamos a explorar la obra de esta artista que convierte las imágenes de prensa en metáforas de la ‘colombianidad’, que pinta la historia con una paleta variada y nos comparte la mirada de una cronista, tal como ha sido catalogada por la crítica especializada.
        </div>
        <div class="col-sm-1 text-center">
        </div>
        <div class="col-sm-7 text-center ">
            <p class="txt-subtitulo-3">
                Catálogo seleccionado
            </p>
            <div id="main-gallery" class="grid-2">
                <div class="grid-sizer-2"></div>
            </div>
        </div>
    </div>

    <!-- * * * * * * * * * * * * * * * * * * * DECADA 1960 INICIO -->
    <div class="row section-general">
        <div class="col-sm-12">
            <p id="label-d1960" class="txt-subtitulo-1">
                EPOCA EN COLORES
            </p>
        </div>
        <div class="col-sm-12">
            <div id="d1960" class="color-epoca"></div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-sm-2 ">
            <p class="txt-subtitulo-3 st" >Línea del tiempo</p>
            <div id="l-d1960" class="linea-tiempo"></div>
        </div>
        <div class="col-sm-3 ">
            <div class="row ">
                <p id="d1960-titulo" class="txt-subtitulo-1 space-lg"></p>
                <p id="d1960-txt_analisis" class="txt-normal-1"></p>
            </div>
            <div class="row ">

                <p class="txt-subtitulo-1 space-lg">
                    Imagen destacada
                </p>
                <img id="d1960-foto_seleccionada" class="foto_seleccionada" >
                <p id="d1960-foto_texto" class="txt-normal-1"></p>

            </div>
        </div>
        <!-- Filtros -->
        <div class="col-sm-7">
            <p class="txt-subtitulo-3" >Filtros de obras</p>
            <div id="b-d1960" class="row space-sm">
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de violencia:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Intrafamiliar', 'd1960')">Intrafamiliar</button>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de Protagonista:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-mujer" onclick="selectFiltro('protagonista', 'mujer', 'd1960')" >La Mujer</button>
                    </div>
                </div>
                <div class="col-sm-1">
                    <button type="button" class="btn btn-light btn-separator btn-clean" onclick="selectFiltro('limpiar', '', '')">Limpiar</button>
                </div>
            </div>
            <div id="g-d1960" class="grid space-sm">
                <div class="grid-sizer"></div>
            </div>
        </div>
    </div>
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 1969 final -->
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 1970 INICIO -->
    <div class="row section-general">
        <div class="col-sm-12">
            <p id="label-d1970" class="txt-subtitulo-1">
                EPOCA EN COLORES
            </p>
        </div>
        <div class="col-sm-12">
            <div id="d1970" class="color-epoca"></div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-sm-2 ">
            <p class="txt-subtitulo-3 st" >Línea del tiempo</p>
            <div id="l-d1970" class="linea-tiempo"></div>
        </div>
        <div class="col-sm-3 ">
            <div class="row ">
                <p id="d1970-titulo" class="txt-subtitulo-1 space-lg"></p>
                <p id="d1970-txt_analisis" class="txt-normal-1"></p>
            </div>
            <div class="row ">

                <p class="txt-subtitulo-1 space-lg">
                    Imagen destacada
                </p>
                <img id="d1970-foto_seleccionada" class="foto_seleccionada" >
                <p id="d1970-foto_texto" class="txt-normal-1"></p>

            </div>
        </div>

        <div class="col-sm-7">
            <p class="txt-subtitulo-3" >Filtros de obras</p>
            <div id="b-d1970" class="row space-sm">
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de violencia:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Intrafamiliar', 'd1970')">Intrafamiliar</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Duelo', 'd1970')">Duelo</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Memoria', 'd1970')">Memoria</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Conflicto armado', 'd1970')">Conflicto armado</button>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de Protagonista:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-mujer" onclick="selectFiltro('protagonista', 'mujer', 'd1970')">La Mujer</button>
                    </div>
                </div>
                <div class="col-sm-1">
                    <button type="button" class="btn btn-light btn-separator btn-clean" onclick="selectFiltro('limpiar', '', '')">Limpiar</button>
                </div>
            </div>
            <div id="g-d1970" class="grid space-sm">
                <div class="grid-sizer"></div>
            </div>


        </div>
    </div>
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 1979 final -->
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 1980 INICIO -->
    <div class="row section-general">
        <div class="col-sm-12">
            <p id="label-d1980" class="txt-subtitulo-1">
                EPOCA EN COLORES
            </p>
        </div>
        <div class="col-sm-12">
            <div id="d1980" class="color-epoca"></div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-sm-2 ">
            <p class="txt-subtitulo-3 st" >Línea del tiempo</p>
            <div id="l-d1980" class="linea-tiempo"></div>
        </div>
        <div class="col-sm-3 ">
            <div class="row ">
                <p id="d1980-titulo" class="txt-subtitulo-1 space-lg"></p>
                <p id="d1980-txt_analisis" class="txt-normal-1"></p>
            </div>
            <div class="row ">

                <p class="txt-subtitulo-1 space-lg">
                    Imagen destacada
                </p>
                <img id="d1980-foto_seleccionada" class="foto_seleccionada" >
                <p id="d1980-foto_texto" class="txt-normal-1"></p>

            </div>
        </div>

        <div class="col-sm-7">
            <p class="txt-subtitulo-3" >Filtros de obras</p>
            <div id="b-d1980" class="row space-sm">
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de violencia:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Memoria', 'd1980')">Memoria</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Conflicto armado', 'd1980')">Conflicto armado</button>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de Protagonista:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-mujer" onclick="selectFiltro('protagonista', 'mujer', 'd1980')">La Mujer</button>
                    </div>
                </div>
                <div class="col-sm-1">
                    <button type="button" class="btn btn-light btn-separator btn-clean" onclick="selectFiltro('limpiar', '', '')">Limpiar</button>
                </div>
            </div>
            <div id="g-d1980" class="grid space-sm">
                <div class="grid-sizer"></div>
            </div>


        </div>
    </div>
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 1989 final -->
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 1990 INICIO -->
    <div class="row section-general">
        <div class="col-sm-12">
            <p id="label-d1990" class="txt-subtitulo-1">
                EPOCA EN COLORES
            </p>
        </div>
        <div class="col-sm-12">
            <div id="d1990" class="color-epoca"></div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-sm-2 ">
            <p class="txt-subtitulo-3 st" >Línea del tiempo</p>
            <div id="l-d1990" class="linea-tiempo"></div>
        </div>
        <div class="col-sm-3 ">
            <div class="row ">
                <p id="d1990-titulo" class="txt-subtitulo-1 space-lg"></p>
                <p id="d1990-txt_analisis" class="txt-normal-1"></p>
            </div>
            <div class="row ">

                <p class="txt-subtitulo-1 space-lg">
                    Imagen destacada
                </p>
                <img id="d1990-foto_seleccionada" class="foto_seleccionada" >
                <p id="d1990-foto_texto" class="txt-normal-1"></p>

            </div>
        </div>

        <div class="col-sm-7">
            <p class="txt-subtitulo-3" >Filtros de obras</p>
            <div id="b-d1990" class="row space-sm">
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de violencia:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Duelo', 'd1990')">Duelo</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Conflicto armado', 'd1990')">Conflicto armado</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Narcotráfico', 'd1990')">Narcotráfico</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Fenómenos naturales', 'd1990')">Fenómenos naturales</button>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de Protagonista:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-mujer" onclick="selectFiltro('protagonista', 'mujer', 'd1990')">La Mujer</button>
                    </div>
                </div>
                <div class="col-sm-1">
                    <button type="button" class="btn btn-light btn-separator btn-clean" onclick="selectFiltro('limpiar', '', '')">Limpiar</button>
                </div>
            </div>
            <div id="g-d1990" class="grid space-sm">
                <div class="grid-sizer"></div>
            </div>


        </div>
    </div>
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 1999 final -->
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 2000 INICIO -->
    <div class="row section-general">
        <div class="col-sm-12">
            <p id="label-d2000" class="txt-subtitulo-1">
                EPOCA EN COLORES
            </p>
        </div>
        <div class="col-sm-12">
            <div id="d2000" class="color-epoca"></div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-sm-2 ">
            <p class="txt-subtitulo-3 st" >Línea del tiempo</p>
            <div id="l-d2000" class="linea-tiempo"></div>
        </div>
        <div class="col-sm-3 ">
            <div class="row ">
                <p id="d2000-titulo" class="txt-subtitulo-1 space-lg"></p>
                <p id="d2000-txt_analisis" class="txt-normal-1"></p>
            </div>
            <div class="row ">

                <p class="txt-subtitulo-1 space-lg">
                    Imagen destacada
                </p>
                <img id="d2000-foto_seleccionada" class="foto_seleccionada" >
                <p id="d2000-foto_texto" class="txt-normal-1"></p>

            </div>
        </div>

        <div class="col-sm-7">
            <p class="txt-subtitulo-3" >Filtros de obras</p>
            <div id="b-d2000" class="row space-sm">
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de violencia:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Duelo', 'd2000')">Duelo</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Memoria', 'd2000')">Memoria</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Conflicto armado', 'd2000')">Conflicto armado</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Luto', 'd2000')">Luto</button>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de Protagonista:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-mujer" onclick="selectFiltro('protagonista', 'mujer', 'd2000')">La Mujer</button>
                    </div>
                </div>
                <div class="col-sm-1">
                    <button type="button" class="btn btn-light btn-separator btn-clean" onclick="selectFiltro('limpiar', '', '')">Limpiar</button>
                </div>
            </div>
            <div id="g-d2000" class="grid space-sm">
                <div class="grid-sizer"></div>
            </div>
        </div>
    </div>
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 2000 final -->
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 2010 INICIO -->
    <div class="row section-general">
        <div class="col-sm-12">
            <p id="label-d2010" class="txt-subtitulo-1">
                EPOCA EN COLORES
            </p>
        </div>
        <div class="col-sm-12">
            <div id="d2010" class="color-epoca"></div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-sm-2 ">
            <p class="txt-subtitulo-3 st" >Línea del tiempo</p>
            <div id="l-d2010" class="linea-tiempo"></div>
        </div>
        <div class="col-sm-3 ">
            <div class="row ">
                <p id="d2010-titulo" class="txt-subtitulo-1 space-lg"></p>
                <p id="d2010-txt_analisis" class="txt-normal-1"></p>
            </div>
            <div class="row ">
                <p class="txt-subtitulo-1 space-lg">
                    Imagen destacada
                </p>
                <img id="d2010-foto_seleccionada" class="foto_seleccionada" >
                <p id="d2010-foto_texto" class="txt-normal-1"></p>

            </div>
        </div>

        <div class="col-sm-7">
            <p class="txt-subtitulo-3" >Filtros de obras</p>
            <div id="b-d2010" class="row space-sm">
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de violencia:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Duelo', 'd2010')">Duelo</button>
                        <button type="button" class="btn btn-primary btn-separator btn-violencia" onclick="selectFiltro('violencia', 'Conflicto armado', 'd2010')">Conflicto armado</button>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="row">
                        <p class="txt-subtitulo-1 text-right">Tipo de Protagonista:</p>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-separator btn-mujer" onclick="selectFiltro('protagonista', 'mujer', 'd2010')">La Mujer</button>
                    </div>
                </div>
                <div class="col-sm-1">
                    <button type="button" class="btn btn-light btn-separator btn-clean" onclick="selectFiltro('limpiar', '', '')">Limpiar</button>
                </div>
            </div>
            <div id="g-d2010" class="grid space-sm">
                <div class="grid-sizer"></div>
            </div>


        </div>
    </div>
    <!-- * * * * * * * * * * * * * * * * * * * DECADA 2010 final -->


    <div class="row justify-content-center section-general">

        <div class="col-sm-4 text-center">
            <p  class="txt-subtitulo-1">
                Por último 
            </p>
            <p class="txt-normal-1">
                La anterior exploración fue una propuesta interpretativa sobre el amplio trabajo artístico que ha realizado Beatriz González en las últimas seis décadas. También, cabe resaltar que las visualizaciones dan cuenta de una pequeña selección de las obras de la artista, que se encuentran alojadas en el <a href="https://bga.uniandes.edu.co/catalogo/">Catálogo Razonado Beatriz González</a>. Esta iniciativa hace parte del Banco de Archivos Digitales de Artes en Colombia —BADAC—, el cual pertenece a la Facultad de Artes y Humanidades de la Universidad de Los Andes.
                <br><br>
                Teniendo en cuenta lo anterior, este ejercicio de visualización también es una invitación al público para que ingrese a este repositorio con preguntas para generar nuevas creaciones sobre los diálogos artísticos, políticos, sociales y culturales en los que estuvo inmersa Beatriz González. En suma, la sensibilidad visual y plástica de la artista son una fuente muy sugerente para viajar al pasado mediante sus lienzos, piezas y trazos.
            </p>
        </div>
        <div class="col-sm-1 text-center">
        </div>
        <div class="col-sm-7 text-center ">
            <div class="row">
                <div class="col-sm-2 text-center color-col"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <p class="txt-subtitulo-2 " style="text-align: center;">1960</p>
                    <canvas id="miCanvas60" width="82" height="825" class="chartjs-render-monitor" style="display: block; height: 660px; width: 66px;"></canvas>
                </div>
                <div class="col-sm-2 text-center color-col"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <p class="txt-subtitulo-2 " style="text-align: center;">1970</p>

                    <canvas id="miCanvas70" width="82" height="825" class="chartjs-render-monitor" style="display: block; height: 660px; width: 66px;"></canvas>
                </div>
                <div class="col-sm-2 text-center color-col"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <p class="txt-subtitulo-2 " style="text-align: center;">1980</p>

                    <canvas id="miCanvas80" width="81" height="812" class="chartjs-render-monitor" style="display: block; height: 650px; width: 65px;"></canvas>
                </div>
                <div class="col-sm-2 text-center color-col"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <p class="txt-subtitulo-2 " style="text-align: center;">1990</p>

                    <canvas id="miCanvas90" width="82" height="825" class="chartjs-render-monitor" style="display: block; height: 660px; width: 66px;"></canvas>
                </div>
                <div class="col-sm-2 text-center color-col"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <p class="txt-subtitulo-2 " style="text-align: center;">2000</p>

                    <canvas id="miCanvas00" width="82" height="825" class="chartjs-render-monitor" style="display: block; height: 660px; width: 66px;"></canvas>
                </div>
                <div class="col-sm-2 text-center color-col"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <p class="txt-subtitulo-2 " style="text-align: center;">2010</p>

                    <canvas id="miCanvas01" width="82" height="825" class="chartjs-render-monitor" style="display: block; height: 660px; width: 66px;"></canvas>
                </div>

            </div>
        </div>
    </div>

</div>








<?php

get_footer();
?>