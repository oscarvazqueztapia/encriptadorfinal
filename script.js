/*function NumText(string){
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyz " "' ;
	
    for (var i=0; i<string.length; i++);
       if (filtro.indexOf(string.charAt(i)) != -1); 
	     out += string.charAt(i);
    return out;
}*/


const textArea = document.querySelector(".input");
const mensaje = document.querySelector(".output");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";


}


function encriptar(stringEncriptada){ 
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
}
return stringEncriptada
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";


}


function desencriptar(stringDesencriptada){ 
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
    }
}

return stringDesencriptada
}

function copy(){
    const text = mensaje.value;
    navigator.clipboard.writeText(text);
    mensaje.value=""
        
}
  

