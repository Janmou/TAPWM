function atv12Soma(array){

    var soma = Array.prototype.reduce.apply(array, [(acc, curr) => acc + curr, 0]);
    return soma;
}

function atv12quad(array){

    var quad = Math.pow.apply(null, [array[0], 2]);
    return quad;
}

function atv12quad2(array){

    var quad2 = Math.pow.apply(null, [array[1], 2]);
    return quad2;
}

function palavras(p1, p2){

    if(!p1||!p2){
        return "Erro encontrado!";
    }
    
    if (p1.includes(p2)){

        return "subconjunto identificado!"
    }
    else{
        return "nenhum subconjunto encontrado.";
    }
}