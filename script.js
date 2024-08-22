let patron = [['a',"ai"],['e',"enter"],['i',"imes"],['o',"ober"],['u',"ufat"]];
let vocal = ['a','e','i','o','u'];

const cuadroImg = document.querySelector('.cuadro-container');
const cuadroTxt = document.querySelector('.texto-mensaje');
cuadroTxt.style.display = 'none';

//Función encargada de copiar el contenido del cuadro de texto
function copiar(){
    let texto = document.getElementById('txtmensaje').value;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        alert("Error al copiar el texto: ", err);
    });
}

//Función encargada de alternar la sección derecha
function mensaje(texto){
    if(texto.length != 0){ //Si el texto no esta vacío
        cuadroImg.style.display = 'none';
        cuadroTxt.style.display = 'flex';
        document.getElementById('txtmensaje').innerHTML = texto;
    }else{
        cuadroImg.style.display = 'flex';
        cuadroTxt.style.display = 'none';
        document.getElementById('txtmensaje').innerHTML = "";
    }
}

//Función encargada de encriptar el texto ingresado
function encriptar(){
    let txtEncriptado = "";
    let texto = document.getElementById("txtarea").value;
    for(let i=0; i < texto.length; i++){
        if (vocal.includes(texto[i].toLowerCase())){
            txtEncriptado = txtEncriptado + convertir(texto[i]);
        }else{
            txtEncriptado = txtEncriptado + texto[i];
        }
    }
    mensaje(txtEncriptado);
    return txtEncriptado;
}

function convertir(letra){
    let indice = 0, encontro = false;
    while (indice < patron.length && !encontro){
        if (letra == patron[indice][0]){
            encontro = true;
        }else{
            indice++;
        }
    }
    return patron[indice][1];
}

//Función encargada de desencriptar el texto ingresado
function desencriptar(){
    let texto = document.getElementById("txtarea").value;
    for(let i=0; i < patron.length; i++){
        let reemplazar = new RegExp(patron[i][1],'g');
        texto = texto.replace(reemplazar,patron[i][0]);
    }
    mensaje(texto);
    return texto;
}
