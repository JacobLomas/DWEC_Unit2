function nImagenes(){
    var imagenes=document.images;
    alert("Hay "+imagenes.length+" imagenes");
}
function idImagen1(){
    var imagenes=document.images;
    alert("La primera imagen tiene de id: "+imagenes[0].id);
}
function nEnlaces(){
    var enlaces=document.links;
    alert("Hay "+enlaces.length+" enlaces");
}
function titulo(){
    document.title=prompt("Introduce el titulo nuevo");
}