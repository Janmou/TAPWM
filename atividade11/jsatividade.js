 function atividade11(a1,b2,c3,d4){
                 let amaior = a1;
                
                if(a1 > b2 && a1>c3 && a1>d4) {
                   amaior = a1;
                
                }
                else if(b2>a1 && b2>c3 && b2>d4) {
                    amaior = b2;
                }
                else if(c3>a1 && c3>b2 && c3>d4) {
                    amaior = c3;
                }
                else if(d4>a1 && d4>b2 && d4>c3) {
                    amaior = d3;
                }

                return amaior;
        }


function atividade11dois(a1, b2, c3, d4){
    
    return Math.max(a1, b2, c3, d4); 
}


function atividade11tres(a1, b2, c3){

    let numcrescente = [a1, b2, c3];
    numcrescente.sort(function(x, y){
        return x - y;
    });
    return numcrescente;
}