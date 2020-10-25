/* //Ejercicio 1
var a=Math.random();
var b=Math.random()*100+100;
console.log(a);
console.log(b);
var min=parseInt(prompt("Bottom num"));
var max=parseInt(prompt("Top num"));
console.log(Math.random()*(max-min)+min); */

/* //Ejercicio 5
var cuadratico
do{
    cuadratico=parseInt(prompt("Introduce el coeficiente cuadrático:"));
}while (cuadratico==0);
var lineal=parseInt(prompt("Introduce el coeficiente lineal:"));
var independiente=parseInt(prompt("Introduce el término independiente:"));
var discriminante=Math.pow(lineal, 2)-(4*cuadratico*independiente);
console.log(discriminante);
if(discriminante>=0){
    var sol1=(-lineal + Math.sqrt(discriminante))/(2*cuadratico);
    var sol2=(-lineal - Math.sqrt(discriminante))/(2*cuadratico);
    document.write(cuadratico+"x2 + "+lineal+"x + "+independiente+"<br> x="+sol1+"<br> x="+sol2);
}else
    document.write(cuadratico+"x2 + "+lineal+"x + "+independiente+"<br> No tien solucion real");
 */
/* //Ejercicio 7
document.write("<table>");
for(let i=1;i<100;i++){
    document.write('<tr> <td>'+i+'</td> <td>'+Math.sin(i)+'</td></tr>');
}
document.write('</table>'); */

/*  //Ejercicio 8
 var random=parseInt(Math.random()*3);
 if(random==0)
    document.write('<img src="0.jpg" alt="Foto 1">');
else if(random==1)
    document.write('<img src="1.jpg" alt="Foto 2">');
    else
    document.write('<img src="2.jpg" alt="Foto 3">'); */