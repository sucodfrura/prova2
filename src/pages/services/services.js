
function dobro (a) {
    return a * 2

}

function soma (a,b) {
    return a + b
}

function temperatura (temp) {
    let febre = false
    if(temp > 37.5) {
        febre = true
    }
    return febre;
}



function media (n1, n2, n3) {
    return (n1+n2+n3)/3
}

function tabuadaArray (num) {
    let x = [10];
    for (let i = 0; i<=10; i++) {
        x[i] = num * i;
    }
    return x;
}

function corPrimaria (cor) {
    let primaria = 0
    if (cor== "azul"|| cor == "amarelo"|| cor=="vermelho") {
        primaria = true
    }
    else{
        primaria = false
    }
    return primaria;
}

function ingresso(inteira, meia, dia, nacionalidade){
    let total = 0
    if(dia == "quarta"){
        total =  (inteira + meia) * 14.25
    }
    else if (nacionalidade == "nacional"){
        total =  (inteira + meia) * 5
    }
    else{
        total =  (inteira * 28.5) + (meia * 14.25)
    }
    return total;
}

function maior (num) {
    let maior = Number.MIN_VALUE;
    for(let item of num) {
        if (item > maior){
            maior = item
        }
    }
    return maior
}

function freqcaracter(texto, caracteres) {
    let i = 0;
    for (let item of texto){
        if(item == caracteres){
            i++
        }
    }
    return i 
}
export {dobro, soma, temperatura, media, tabuadaArray, corPrimaria, ingresso, maior, freqcaracter}