/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
     Author     : apolan
 */



// optional
$('#blogCarousel').carousel({
    interval: 5000
});


function loadMultiple() {
    for (var id = 1; id <= 120; id++) {
        $("#artefactos").append("<div class='col'> <a href='files/pics/ley-1801_" + id + ".jpg' target='_blank'><img src='files/pics/ley-1801_" + id + ".jpg' class=''></a></div>");
    }
}