function asincInit(nombre, callback){
    setTimeout(function(){
        console.log('hola ' + nombre);
        callback(nombre);
    }, 1000);
}

function asincFin(nombre, callback){
    setTimeout(function(){
        console.log('adios ' + nombre);
        callback();
    }, 2000);
}

console.log('inicio proceso....');

asincInit('Luis', function(nombre){

    asincFin(nombre, function(){

        console.log('finalizando asinc');
    });
    
});
