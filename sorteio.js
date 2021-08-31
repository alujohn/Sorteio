var sorteio;
var mega = Array()

var i = 0;
while ( i < 6) { 

    sorteio = Math.ceil(Math.random()*60)
    if (mega.indexOf(sorteio) < 0){
        mega.push(sorteio);
        i++;
    }
    
}
function ordenarNumeros(a, b){ 
    return a-b;
}

mega.sort(ordenarNumeros);
console.log(mega)