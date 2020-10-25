function invierteCadena(cadena){
    let invertida='';
    for(let i=cadena.lenght-1;i>=0;i--){
        invertida=invertida+cadena.charAt(i);
    }
    return invertida;
}
function inviertePalabras(cadena){
    let arrayPalabras=cadena.split(" ");
    let invertidaPalabras='';
    for(let i=arrayPalabras.lenght-1;i>=0;i--){
        invertidaPalabras=invertidaPalabras+arrayPalabras[i];
    }
    return invertidaPalabras;
    
}

function encuentraPalabraMasLarga(cadena){
    let arrayPalabras=cadena.split(" ");
    var larga=arrayPalabras[0];
    for(i of arrayPalabras){
            if(i.length>larga.length)
                larga=i;
    }
    return larga;
}
document.write(encuentraPalabraMasLarga("Una dos tres"));

function filtraPalabrasMasLargas(cadena, n){
    let arrayPalabras=cadena.split(" ");
    let arrayMasLargas;
    for(i of arrayPalabras){
        if(i.length>n)
            arrayMasLargas.push(i);
    };
    return arrayMasLargas;
}

function cadenaBienFormada(cadena){
    let bienFormada='';
    for(let i=0; i<cadena.lenght-1;i++){
        if(i==0)
            bienFormada=bienFormada+cadena.charAt(i).toUpperCase();
        else
            bienFormada=bienFormada+cadena.charAt(i);
    };
    return bienFormada;
}

/* function textInformation(cad_arg){
    var auxUpper = 0;
    var auxLower = 0;
    for(let i = 0; i <= cad_arg.length-1; i++){
        var characterAux = cad_arg[i];
        if(upper(characterAux) == true){
            auxUpper++;
        }else if(lower(characterAux) == true){
            auxLower++;
        }
    }
    if(auxUpper >= 1 && auxLower == 0){
        document.write("Only Uppercase");
    }else if(auxLower >= 1 && auxUpper == 0){
        document.write("Only lowercase");
    }else if(auxLower >= 1 && auxUpper >= 1){
        document.write("Lower and Uppercase");
    }else{
        document.write("ERROR");
    }
} */
